import express from "express";
import Router from "./routes/index";

const port = 3000;
const app = express();

app.use(express.json());
app.use(Router);

app.get("/", async (req, res) => {
  res.json({
    message: "API Running",
  });
});

app.listen(port, async () => {
  console.log(`listening on port ${port}`);
});
