import express from "express";
import cors from 'cors';
import postsRouter from "./routes/posts.mjs";
import profilesRouter from "./routes/profiles.mjs";
import authRouter from "./routes/auth.mjs";

const app = express();
const port = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Server API is working 🚀");
});

app.use("/profiles", profilesRouter);
app.use("/posts", postsRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
