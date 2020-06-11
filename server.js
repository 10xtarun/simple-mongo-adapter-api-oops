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
}

module.exports = Server;