import express from "express";

import router from "router";

const app = express();

// Middleware
app.use(express.json());

// Rotas
app.use("/points", router);

export default app;