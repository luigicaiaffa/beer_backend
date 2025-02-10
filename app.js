import express from "express";
import cors from "cors";

const app = express();

const port = process.env.HOST_PORT;

// # Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// # Routers
import { beersRouter } from "./routers/beersRouter.js";

app.use("/api/beers", beersRouter);

// # Listening
app.listen(port, () => {
  console.log("Server listening...");
});
