const http = require('http');
const createError = require('http-errors');
const express = require('express');
const minifyHtml = require('express-minify-html');
const enforce = require('express-sslify');
const modalRouter = require("./routes/modal");
const overviewRouter = require("./routes/overview");
const detailRouter = require("./routes/detail");

const app = express();
const port = process.env.PORT || 3000;

// Enforce https when on Heroku
if (app.get("env") === "production") {
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

// Setup express and view engine
app.set("view engine", "ejs")
    .set("views", "views")
    .use(express.static('dist'))
    .use(minifyHtml({
        override: true,
        exception_url: false,
        htmlMinifier: {
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true,
            minifyJS: true
        }
    }))
    .use("/", modalRouter)
    .use("/topic", overviewRouter)
    .use("/topic/:topic/book", detailRouter)
    .use("/topic/:topic/:page/book", detailRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// catch 500 and forward to error handler
app.use(function (req, res, next) {
    next(createError(500));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error', {title: `Error ${err.status}`});
});

http.createServer(app).listen(port, () =>{
    console.log(`Server running on http://localhost:${port}`)
});

module.exports = app;
