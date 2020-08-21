const server = require("./api/server.js");
const express = require("express");

const PORT = process.env.PORT || 6000;
server.listen(PORT, () => {
  console.log(`\n Server listening on port ${PORT} \n`);
});

server.get("/", (req, res) => {
  res.status(200).json({ message: "API is working!" });
});
