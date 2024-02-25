const bodyParser = require('body-parser');
const logger  = require('morgan');

const config = require('./config');
const routes = require('../src/routes/index');

const startServer = async (app) => {
    app.use(logger('dev'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    routes(app);

    app.listen(config.ServerRunningPort, () => {
        console.log(`Server is up on port: ${config.ServerRunningPort}`);
    });
};

module.exports = startServer;