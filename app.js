const path = require("path");
const express = require("express");
const http = require("http");
const app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.use(function(req, res) {
  res.redirect("/");
});

const port = 3000;
app.set("port", port);
const server = http.createServer(app);
server.listen(port);
