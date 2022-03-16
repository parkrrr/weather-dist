const { series, parallel, src, dest, watch } = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const sass = require('gulp-sass')(require('sass'));
var argv = require('yargs').argv;
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

    const config = webpackConfig;
    if (argv.debug) {
        config.mode = 'development';
    }

    src('js/*.js').pipe(webpackStream(config, webpack)).pipe(dest('dist/js/'));
    cb();
}

function publish(cb) {
    src('./index.html').pipe(dest('./dist'));
    src('./img/*').pipe(dest('./dist/img'));
    src('./favicon.ico').pipe(dest('./dist'));
    src('./*.png').pipe(dest('./dist'));
    src('./site.webmanifest').pipe(dest('./dist'));
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