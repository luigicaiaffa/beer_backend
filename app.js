import express from "express";
import cors from "cors";

const app = express();

const port = process.env.HOST_PORT;

// # Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// # Routers
import { homeRouter } from "./routers/homeRouter.js";
import { beersRouter } from "./routers/beersRouter.js";

app.use("/beers", homeRouter);
app.use("/beers/search", beersRouter);

// # Listening
app.listen(port, () => {
  console.log("Server listening...");
});
