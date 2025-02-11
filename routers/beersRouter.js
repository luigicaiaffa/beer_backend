import express from "express";
import { beersController } from "../controllers/beersController.js";

const beersRouter = express.Router();

beersRouter.get("/", beersController.index);
beersRouter.get("/:id", beersController.show);
beersRouter.post("/newBeer", beersController.store);
// beersRouter.put("/:id", beersController.update);
// beersRouter.patch("/:id", beersController.modify);
// beersRouter.delete("/:id", beersController.destroy);

export { beersRouter };
