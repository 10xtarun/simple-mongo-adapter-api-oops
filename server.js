require('dotenv').config();
//imports
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/main');

//creating server class
class Server{
    constructor(port){
        //creating express function
        const app = this.expressApp = express();
        //use logger
        app.use(logger('dev'));
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());

        // call router and error handling methods
        this.setRoutes();
        this.errorHandling();
        //listening to port
        app.listen(port, () => console.log(`Listening on port ${port}`))
    }

    //method for routes
    setRoutes(){
        this.expressApp.use('/', todoRoutes);
    }

    //method for error handling
    errorHandling(){
        //404 error and forward it to error handler
        this.expressApp.use((req, res, next) => {
        const err = new Error('Not Found!');
        err.status = 404;
        next(err);
    });
    //handle the error
    this.expressApp.use((err, req, res, next) => {
        res.json({err: err, message: "Not Found!"})
        next();
    });
}
}

module.exports = Server;