import express from "express";
import bcrypt from "bcrypt";
import connectionPool from "../utils/db.mjs";
import { v4 as uuidv4 } from 'uuid';

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
    console.log("signup endpoint called");
    try {
      const { name, username, email, password } = req.body;
  
      // Basic validation
      if (!name || !username || !email || !password) {
        console.log("All fields are required");
        return res.status(400).json({
          message: "All fields are required"
        });
      }
  
      // Check if username or email already exists
      const checkUserQuery = `
        SELECT * FROM users 
        WHERE username = $1 OR email = $2
      `;
      const checkResult = await connectionPool.query(checkUserQuery, [username, email]);
  
      if (checkResult.rows.length > 0) {
        console.log("Username or email already exists");
        return res.status(400).json({
          message: "Username or email already exists"
        });
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Insert new user
      const insertQuery = `
        INSERT INTO users (id,name, username, email, password, role)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id, name, username, email, role
      `;
      const result = await connectionPool.query(insertQuery, [
        uuidv4(),
        name,
        username, 
        email,
        hashedPassword,
        "user"
      ]);
  
      return res.status(201).json({
        message: "User created successfully",
        user: result.rows[0]
      });
  
    } catch (err) {
      console.error("Database error:", err);
      return res.status(500).json({
        message: "Error creating user"
      });
    }
  });
  
  export default authRouter;