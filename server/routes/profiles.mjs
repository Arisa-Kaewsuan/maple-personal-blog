import { Router } from 'express';

const profilesRouter = Router();

profilesRouter.get("/", (req, res) => {
    return res.status(200).json({
      data: {
        name: "John",
        age: 20,
      },
    });
});

export default profilesRouter;