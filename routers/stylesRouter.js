import express from "express";
import { stylesController } from "../controllers/stylesController.js";

const stylesRouter = express.Router();

stylesRouter.get("/", stylesController.index);
stylesRouter.post("/newStyle", stylesController.store);
// stylesRouter.put("/:id", stylesController.update);
// stylesRouter.patch("/:id", stylesController.modify);
// stylesRouter.delete("/:id", stylesController.destroy);

export { stylesRouter };
