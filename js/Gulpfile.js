var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var flux = require('flux');

gulp.task('browserify',function(){
    return browserify('./example-app.js')
        .transform(babelify, {stage: 2})
        .bundle()
        .pipe(source('example-bundle.js'))
        .pipe(gulp.dest('.'));

});

gulp.task('watch',function(){
    gulp.watch(['components/*.js','flux/*.js','example-app.js'],['browserify']);
});