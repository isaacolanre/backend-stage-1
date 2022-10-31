const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({ origin: "*" }));
app.use(express.json());

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

const data = {
  slackUsername: "isaacolanre",
  backend: true,
  age: 31,
  bio: "I am a software engineer currently living in Lagos, Nigeria. My interests range from web development to mobile development. I am also interested in soccer, reading, and technology. I'm a full-stack engineer with a strong desire for pushing the boundaries, learning, and a healthy disregard for the impossible.",
};

app.get("/", (req, res) => {
  res.status(200).send(JSON.stringify(data));
});
