const express = require("express");
const app = express();

app.listen(3200, () => {
  console.log("Application started and Listening on port 3200");
});

// serve your css as static
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
