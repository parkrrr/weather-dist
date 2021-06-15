const { series, parallel, src, dest } = require('gulp');
var sass = require('gulp-sass');
var del = require('del');

function clean(cb) {
    del('dist/**', { force: true });
    cb();
}

function cssTranspile(cb) {
    src('./css/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./dist/css'));

    cb();
}

function cssMinify(cb) {
    cb();
}

function jsTranspile(cb) {
    cb();
}

function jsBundle(cb) {
    src('./js/*.js').pipe(dest('./dist/js'));
    cb();
}

function jsMinify(cb) {
    cb();
}

function publish(cb) {
    src('./index.html').pipe(dest('./dist'));
    src('./img/*').pipe(dest('./dist/img'));
    src('./*.png').pipe(dest('./dist'));
    cb();
}

exports.build = series(
    clean,
    parallel(
        cssTranspile,
        series(jsTranspile, jsBundle)
    ),
    parallel(cssMinify, jsMinify),
    publish
);