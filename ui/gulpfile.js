const { series, parallel, src, dest, watch } = require('gulp');
const webpack = require('webpack-stream');
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


function jsBundle(cb) {
    src('./js/lib/*.js').pipe(dest('./dist/js'));
    src('js/*.js').pipe(webpack(require('./webpack.config.js'))).pipe(dest('dist/js/'));

    cb();
}

function publish(cb) {
    src('./index.html').pipe(dest('./dist'));
    src('./img/*').pipe(dest('./dist/img'));
    src('./favicon.ico').pipe(dest('./dist'));
    src('./*.png').pipe(dest('./dist'));
    cb();
}

exports.build = series(
    clean,
    parallel(
        cssTranspile,
        jsBundle
    ),
    publish
);

exports.default = function() {
    watch('css/*.scss', cssTranspile);
    watch('js/*.js', series(clean, jsBundle));
    watch('img/*', series(clean, publish));
    watch('*.png', series(clean, publish));
    watch('index.html', series(clean, publish));
  };