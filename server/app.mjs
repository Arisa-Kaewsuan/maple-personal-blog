import express from "express";
import connectionPool from "./utils/db.mjs";
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Server API is working 🚀");
});

app.get("/profiles", (req, res) => {
  return res.status(200).json({
    data: {
      name: "John",
      age: 20,
    },
  });
});

app.post("/posts", async (req, res) => {
  const newPost = {...req.body};
  const { title, image, category_id, description, content, status_id } = newPost;

  if (![title, image, category_id, description, content, status_id].every(Boolean)) {
    return res.status(400).json({
      message:
        "Server could not create post because there are missing data from client",
    });
  }

  try {
    await connectionPool.query(`
    insert into posts (title, image, category_id, description, content, status_id)
    values ($1, $2, $3, $4, $5, $6)`, [
        newPost.title,
        newPost.image,
        newPost.category_id,
        newPost.description,
        newPost.content,
        newPost.status_id,
    ]);

    return res.status(201).json({ message: "Created post successfully" });
  } catch (error) {
    console.error("Create post error:", error);
    return res.status(500).json({
      message: "Server could not create post because database connection",
    });
  }
});

app.get("/posts/:postId", async (req, res) => {
  const { postId } = req.params;

  if (isNaN(postId)) {
    return res.status(400).json({ message: "Invalid postId" });
  }

  try {
    const query = `
      SELECT 
        posts.id,
        posts.image,
        categories.name AS category,
        posts.title,
        posts.description,
        posts.date,
        posts.content,
        statuses.status AS status,
        posts.likes_count
      FROM posts
      JOIN categories ON posts.category_id = categories.id
      JOIN statuses ON posts.status_id = statuses.id
      WHERE posts.id = $1
    `;
    
    const result = await connectionPool.query(query, [Number(postId)]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Server could not find a requested post"
      });
    }

    return res.status(200).json({ data: result.rows[0] });

  } catch (err) {
    console.error("Database error:", err);
    return res.status(500).json({
      message: "Server could not read post because database connection"
    });
  }
});

app.put("/posts/:postId", async (req, res) => {
  const { postId } = req.params;
  const {
    image,
    category_id,
    title,
    description,
    date,
    content,
    status_id,
    likes_count
  } = req.body;

  if (isNaN(postId)) {
    return res.status(400).json({ message: "Invalid postId" });
  }

  try {
    const query = `
      UPDATE posts
      SET 
        image = $1,
        category_id = $2,
        title = $3,
        description = $4,
        date = $5,
        content = $6,
        status_id = $7,
        likes_count = $8
      WHERE id = $9
      RETURNING *
    `;

    const values = [
      image,
      category_id,
      title,
      description,
      date,
      content,
      status_id,
      likes_count,
      postId
    ];

    const result = await connectionPool.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Server could not find a requested post to update"
      });
    }

    return res.status(200).json({ message: "Updated post successfully" });

  } catch (err) {
    console.error("Database error:", err);
    return res.status(500).json({
      message: "Server could not update post because database connection"
    });
  }
});

app.delete("/posts/:postId", async (req, res) => {
  const { postId } = req.params;

  if (isNaN(postId)) {
    return res.status(400).json({ message: "Invalid postId" });
  }

  try {
    const query = `
      DELETE FROM posts
      WHERE id = $1
      RETURNING *
    `;

    const result = await connectionPool.query(query, [Number(postId)]);

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Server could not find a requested post to delete"
      });
    }

    return res.status(200).json({ message: "Deleted post successfully" });

  } catch (err) {
    console.error("Database error:", err);
    return res.status(500).json({
      message: "Server could not delete post because database connection"
    });
  }
});

app.get("/posts", async (req, res) => {
  try {
    const category = req.query.category || "";
    const keyword = req.query.keyword || "";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 6;

    const safePage = Math.max(1, page);
    const safeLimit = Math.max(1, Math.min(100, limit));
    const offset = (safePage - 1) * safeLimit;

    let query = `
      SELECT posts.id, posts.image, categories.name AS category, posts.title,
             posts.description, posts.date, posts.content, statuses.status,
             posts.likes_count
      FROM posts
      INNER JOIN categories ON posts.category_id = categories.id
      INNER JOIN statuses ON posts.status_id = statuses.id
    `;

    let values = [];

    // สร้างเงื่อนไข WHERE ตาม category และ keyword
    if (category && keyword) {
      query += `
        WHERE categories.name ILIKE $1
        AND (posts.title ILIKE $2 OR posts.description ILIKE $2 OR posts.content ILIKE $2)
      `;
      values = [`%${category}%`, `%${keyword}%`];
    } else if (category) {
      query += ` WHERE categories.name ILIKE $1`;
      values = [`%${category}%`];
    } else if (keyword) {
      query += `
        WHERE posts.title ILIKE $1 OR posts.description ILIKE $1 OR posts.content ILIKE $1
      `;
      values = [`%${keyword}%`];
    }

    // เพิ่ม ordering, limit, offset
    query += ` ORDER BY posts.date DESC LIMIT $${values.length + 1} OFFSET $${values.length + 2}`;
    values.push(safeLimit, offset);

    const result = await connectionPool.query(query, values);

    // สร้าง query สำหรับนับจำนวนโพสต์ทั้งหมด
    let countQuery = `
      SELECT COUNT(*)
      FROM posts
      INNER JOIN categories ON posts.category_id = categories.id
      INNER JOIN statuses ON posts.status_id = statuses.id
    `;
    let countValues = values.slice(0, -2);

    if (category && keyword) {
      countQuery += `
        WHERE categories.name ILIKE $1
        AND (posts.title ILIKE $2 OR posts.description ILIKE $2 OR posts.content ILIKE $2)
      `;
    } else if (category) {
      countQuery += ` WHERE categories.name ILIKE $1`;
    } else if (keyword) {
      countQuery += `
        WHERE posts.title ILIKE $1 OR posts.description ILIKE $1 OR posts.content ILIKE $1
      `;
    }

    const countResult = await connectionPool.query(countQuery, countValues);
    const totalPosts = parseInt(countResult.rows[0].count, 10);

    const results = {
      totalPosts,
      totalPages: Math.ceil(totalPosts / safeLimit),
      currentPage: safePage,
      limit: safeLimit,
      posts: result.rows,
    };

    if (offset + safeLimit < totalPosts) {
      results.nextPage = safePage + 1;
    }
    if (offset > 0) {
      results.previousPage = safePage - 1;
    }

    return res.status(200).json(results);
  } catch (err) {
    console.error("Database error:", err);
    return res.status(500).json({
      message: "Server could not read post because database issue",
    });
  }
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
