var fs = require("fs");
var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    var url = req.url;

    if (url === "/") {
        fs.readFile("Home.html", function (err, data) {
            res.end(data);
        });
    } else if (url === "/Profil") {
        fs.readFile("Profil.html", function (err, data) {
            res.end(data);
        });
    } else if (url === "/Visi") {
        fs.readFile("Visi.html", function (err, data) {
            res.end(data);
        });
    } else if (url === "/Sambutan") {
        fs.readFile("Sambutan.html", function (err, data) {
            res.end(data);
        });
    } else if (url === "/Blog") {
        fs.readFile("Blog.html", function (err, data) {
            res.end(data);
        });
    } else if (url === "/Perpustakaan") {
        fs.readFile("Perpustakaan.html", function (err, data) {
            res.end(data);
        });
    } else {
        res.write("");
        res.end();
    }

}).listen(7000, function () {
    console.log("server start at port http://localhost:7000");
});

