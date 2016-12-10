'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const del = require('del');
//const exec = require('child_process').exec;
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config');

const pathsJS = {
    allSrcJs: 'lesson_7/src/**/*.js',
    distDir: 'lesson_7/dist',
    clientEntryPoint: 'lesson_7/src/index.js',

};

gulp.task('clean', () => {
    return del(pathsJS.distDir);
});

gulp.task('build', ['clean'], () => {
    return gulp.src(pathsJS.allSrcJs)
        .pipe(babel())
        .pipe(gulp.dest(pathsJS.distDir));
});

// gulp.task('main', ['build'], (callback) => {
//     exec(`node ${pathsJS.distDir}`, (error, stdout) => {
//         console.log(stdout);
//         return callback(error);
//     });
// });
gulp.task('main', ['build'], () =>
    gulp.src(pathsJS.clientEntryPoint)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(pathsJS.distDir))
);

gulp.task('watch', () => {
    gulp.watch(pathsJS.allSrcJs, ['main']);
});

gulp.task('default', ['watch', 'sass:watch', 'main']);

gulp.task('sass', function () {
    gulp.src('./sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', ['sass'], function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});