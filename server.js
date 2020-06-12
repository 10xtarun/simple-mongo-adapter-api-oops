//imports
const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')

//creating server class
class Server{
    constructor(port){
        //creating express function
        const app = this.expressApp = express();
        //use logger
        app.use(logger('dev'));
        //listening to port
        app.listen(port, () => console.log(`Listening on port ${port}`))
    }

    //method for routes
    setRoutes(){
        this.expressApp.use('/', routes);
    }

    //method for error handling
    errorHandling(){
        //404 error and forward it to error handler
        this.expressApp.use(req, res, next) => {
            cons
        }
    }
}

module.exports = Server;