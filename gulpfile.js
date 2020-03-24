const cleanCss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const gulp = require('gulp');

function moveAssets(cb) {
    gulp.src("./public/*")
        .pipe(gulp.dest("./dist/"));

    cb();
}

function minifyCss(cb) {
    // Gulp task to minify CSS files
    gulp.src('./public/css/*.css')
        // Minify the file
        .pipe(cleanCss())
        // Output
        .pipe(gulp.dest('./dist/css'));

    cb();
}

function minifyImg(cb) {
    // Gulp task to minify images
    gulp.src(['./public/img/*'])
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));

    gulp.src(['./public/img/icons/*'])
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img/icons'));

    cb();
}

exports.default = gulp.series(moveAssets, minifyCss, minifyImg);