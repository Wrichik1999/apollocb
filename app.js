const http = require("http");
const fs = require("fs");

http.createServer(function (req, res) {
    fs.readFile("./public" + req.url, function (err, data) {
        if (err) {
            console.log(err);
            console.log(data);
            res.write("ERROR");
            return res.end();
        }
        res.write(data);
        return res.end();
    })
}).listen(8000);