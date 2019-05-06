const app = require("express")();
const router = require("./api/router");
const debug = require('debug')('my-application');

const logger = require('morgan');
const bodyParser = require('body-parser');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// require("./api/services/dbConnection")
require("./api/models/users")
app.use("/", router);
app.use((req, res, next) => {
    res.status(404).json({
        status: 404,
        message: 'Page Not Found'
    })
})
app.use((err, req, res, next) => {
    debug(err.stack);
    res.status(500).json({
        status: 500,
        message: 'Oops something went wrong..'
    })
})

module.exports = app;