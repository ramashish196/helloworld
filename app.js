import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World,hi there!");
});
app.listen(3000, () => {
  console.log(`server listening at http://localhost:3000}`);
});
