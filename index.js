const express = require("express"),
    app = express();
const PORT = process.env.PORT || 8080;
var cors = require('cors');
app.use(function(req, res, next) {
    res.setTimeout(300000000);
    next();
})


// require("./middlewares/routes.mdw")(app);
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));
app.use('', require('./routers/home.route'));
app.listen(PORT, () => {
    console.log(`Server listening at PORT: ${PORT}`);
});

function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  }
