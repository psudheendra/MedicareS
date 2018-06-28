"use strict";
/* app/controllers/welcome.controller.ts */
Object.defineProperty(exports, "__esModule", { value: true });
// Import only what we need from express
var express_1 = require("express");
// Assign router to the express.Router() instance
var router = express_1.Router();
router.get('/communications', function (req, res) {
    // mongodb+srv://mongosa:<PASSWORD>@mongo-qdafj.mongodb.net/test?retryWrites=true
    var fs = require('fs-extra');
    var version = "default ";
    fs.readJson('./cmsdata.json')
        .then(function (packageObj) {
        res.json(packageObj);
    })
        .catch(function (err) {
        console.error(err);
        res.send("error: " + err);
    });
});
// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get('/', function (req, res) {
    // Reply with a hello world when no name param is provided
    res.send('Hello, World! Mike');
});
// Export the express.Router() instance to be used by server.ts
exports.CMSController = router;
