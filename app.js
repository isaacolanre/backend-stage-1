const express = require("express");
const app = express();
app.use(express.json());

app.listen(5000, () => {
  console.log("Server is up");
});

const data = {
  slackUsername: "@isaacolanre",
  backend: true,
  age: 31,
  bio: "I am a software engineer currently living in Lagos, Nigeria. My interests range from web development to mobile development. I am also interested in soccer, reading, and technology. I'm a full-stack engineer with a strong desire for pushing the boundaries, learning, and a healthy disregard for the impossible.",
};

app.get("/", (req, res) => {
  res.send(JSON.stringify(data));
});
