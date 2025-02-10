const port = process.env.HOST_PORT;

import express from "express";
const app = express();

// # Middlewares
app.use(express.json());
app.use(express.static("public"));

// # Routers
import { homeRouter } from "./routers/homeRouter.js";
import { beersRouter } from "./routers/beersRouter.js";

app.use("/beers", homeRouter)
app.use("/beers/search", beersRouter)

// # Listening
app.listen(port, () => {
  console.log("Server listening...");
});
