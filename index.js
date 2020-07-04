const express = require("express"),
    app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
    res.setTimeout(300000000);
    next();
})


// require("./middlewares/routes.mdw")(app);

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
