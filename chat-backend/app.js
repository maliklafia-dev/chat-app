const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Bienvenu sur le serveur");
});

app.listen(port, () => {
  console.log("server online on port http://localhost:${port}");
});
