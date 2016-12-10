var pug = require('gulp-pug');
var gulp = require('gulp');

gulp.task('pug', function buildHTML() {
    return gulp.src('/static_site_to_turn_to_jekyll/**/*.pug')
    .pipe(pug({}))
});
