/* app/server.ts */

// Import everything from express and assign it to the express variable
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// Import WelcomeController from controllers entry point
import { CMSController } from './controllers';

// Create a new express application instance
const app: express.Application = express();

mongoose.Promise = global.Promise;

// The port the express app will listen on
const port: number = 3000; // process.env.PORT ||

// Mount the WelcomeController at the /welcome route
app.use('/cms', CMSController);

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Medicare application."});
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
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});