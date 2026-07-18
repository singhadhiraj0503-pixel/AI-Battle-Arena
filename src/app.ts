import express from "express";
import { runGraph } from "./ai/graph.ai.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world !");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/use-graph", async (req, res) => {
  const result = await runGraph("Write a code for factorial number in python");

  res.json(result);
});

export default app;
