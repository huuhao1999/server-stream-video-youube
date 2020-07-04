module.exports = function(app) {
    app.use("/", require("../routers/home.route"));
};