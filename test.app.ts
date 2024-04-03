import express from "express";
import Router from "./routes/index";
import mongoose from "mongoose";

import 'dotenv/config'

const port = 3000;
const app = express();
const db_url: string = process.env.DB_URL || ''

app.use(express.json());
app.use(Router);

mongoose.connect(db_url).then(() => {
  console.log('Connected to MongoDB')
})

app.get("/", async (req, res) => {
  res.json({
    message: "API Running",
  });
});

export default app