var express = require("express");
var bodyParser = require("body-parser");
var http = require("http");
var https = require("https");
var fs = require("fs");

var app = express();

//express config
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
//express config END

//https config
/* var options = {
	key: __dirname + "/cert/privateKey.pem",
    cert: __dirname + "/cert/cert.pem"
}; */

var options = {
	key: fs.readFileSync('key.pem'),
	cert: fs.readFileSync('cert.pem'),
	passphrase: "1234"
}

https.createServer(options, app).listen(8080, function() {
console.log("running https on :8080")});
//https config END

//post and get configuration
app.post("/", function (req, res) {
	console.log("Latitude: " + req.body.lat);
	console.log("Longitude: " + req.body.lon);
	res.sendStatus(200);
});

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
});
app.get("/client.js", function (req, res) {
	res.sendFile(__dirname + "/client.js");
});

/* app.listen(8080, function () {
	console.log("Listening on Port 8080");
}); */