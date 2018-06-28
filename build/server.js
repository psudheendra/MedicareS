"use strict";
/* app/server.ts */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import everything from express and assign it to the express variable
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
// Import WelcomeController from controllers entry point
var controllers_1 = require("./controllers");
// Create a new express application instance
var app = express_1.default();
mongoose_1.default.Promise = global.Promise;
// The port the express app will listen on
var port = 3000; // process.env.PORT ||
// Mount the WelcomeController at the /welcome route
app.use('/cms', controllers_1.CMSController);
// parse requests of content-type - application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(body_parser_1.default.json());
// define a simple route
app.get('/', function (req, res) {
    res.json({ "message": "Welcome to Medicare application." });
});
// var MongoClient = require('mongodb').MongoClient;
// var uri = "mongodb+srv://mongosa:mongosa123@mongo-qdafj.mongodb.net/test?retryWrites=true";
// MongoClient.connect(uri, function(err: any, client:any) {
//    const collection = client.db("test").collection("devices");
//    // perform actions on the collection object
//    client.close();
// });
// // Connecting to the database
// mongoose.connect("mongodb+srv://mongosa:mongosa123@mongo-qdafj.mongodb.net/test?retryWrites=true")
// .then(() => {
//     console.log("Successfully connected to the database");    
// }).catch(err => {
//     console.log('Could not connect to the database. Exiting now...' + err);
//     process.exit();
// });
// var db
// const MongoClient = require('mongodb').MongoClient;
// MongoClient.connect('your-mongodb-url', (err: any, client: any) => {
//     if (err) return console.log(err)
//     db = client.db('star-wars-quotes') // whatever your database name is
//     // Serve the application at the given port
//     app.listen(port, () => {
//         // Success callback
//         console.log(`Listening at http://localhost:${port}/`);
//     });
// })
// Serve the application at the given port
app.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
