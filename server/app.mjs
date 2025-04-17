import express from "express";
import connectionPool from "./utils/db.mjs";

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

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
