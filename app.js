const createError = require('http-errors');
const express = require('express');
const modalRouter = require("./routes/modal");
const overviewRouter = require("./routes/overview");
const detailRouter = require("./routes/detail");

const app = express();
const port = process.env.port || 3000;


// Setup express and view engine
app.set("view engine", "ejs")
    .set("views", "views")
    .use(express.static('dist'))
    .use("/", modalRouter)
    .use("/topic", overviewRouter)
    .use("/topic/:topic/book", detailRouter)
    .use("/topic/:topic/:page/book", detailRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
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

app.listen(port, () => console.log(` Server running on http://localhost:${port}`));
