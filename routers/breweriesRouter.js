import express from "express";
import { breweriesController } from "../controllers/breweriesController.js";

const breweriesRouter = express.Router();

breweriesRouter.get("/", breweriesController.index);
breweriesRouter.post("/newBrewery", breweriesController.store);
// breweriesRouter.put("/:id", breweriesController.update);
// breweriesRouter.patch("/:id", breweriesController.modify);
// breweriesRouter.delete("/:id", breweriesController.destroy);

export { breweriesRouter };
