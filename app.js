import express from "express";
import cors from "cors";
const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(cors({ origin: "*", credentials: true }));
app.use(express.urlencoded());

//  import router

import blogRouter from "./src/router/blog.router.js";

app.use("/api", blogRouter);

export { app };
