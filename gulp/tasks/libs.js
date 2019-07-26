module.exports = function () {
    $.gulp.task('libs', () => {
        return $.gulp.src('./dev/static/libs/**/*.*')
            .pipe($.gulp.dest('./build/static/libs/'));
    });
};