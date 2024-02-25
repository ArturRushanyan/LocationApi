const Location  = require('./location/index');

const indexRoutes = (app) => {
    app.use('/api', Location);
};
 
module.exports = indexRoutes;