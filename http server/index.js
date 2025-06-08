const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  fs.appendFile(
    "log.txt",
    `${Date.now()} : Request hit to ${req.url}\n`,
    (err, data) => {
      switch (req.url) {
        case "/":
          res.end("homepage");
          break;
        case "/about":
          res.end("Hey Speedy here");
          break;
        case "/contact":
          res.end("mera semsung ka number lele raat ko call karna");
          break;
        default:
          res.end("nikal pheli phursat me");
          break;
      }
    }
  );
});
myServer.listen(3000, () => console.log("server started"));
