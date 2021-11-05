const fs = require("fs");
const path = require("path");

const txtPath = path.join(__dirname, "text.txt");
const readableStream = fs.createReadStream(txtPath, "utf8");

readableStream.on("data", function (chunk) {
  console.log(chunk);
});
