import express from "express";
const app = express();

app.get("/sigin", (req, res) => {
  res.send("Login page");
});

app.get("/signup", (req, res) => {
  res.send("signup page");
});

app.get("/chats", (req, res) => {
  res.send("get all chats here");
});

app.listen(8080, () => {
  console.log("App is running on port 8080");
});
