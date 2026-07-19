import express from "express";
import { runGraph } from "./ai/graph.ai.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // Vite frontend
    credentials: true,
  }),
);

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

app.post("/use-graph", async (req, res) => {
  try {
    const { problem } = req.body;

    if (!problem) {
      return res.status(400).json({
        success: false,
        message: "Problem is required",
      });
    }

    const result = await runGraph(problem);

    res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

export default app;
