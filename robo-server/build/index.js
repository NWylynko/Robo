"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.send("Hello World");
});
var PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
    console.log("Server is running in http://localhost:" + PORT);
});
//# sourceMappingURL=index.js.map