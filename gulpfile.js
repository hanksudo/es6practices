const gulp = require("gulp");
const babel = require("gulp-babel");
const watch = require("gulp-watch");

gulp.task("default", function() {
    return gulp.src("src/*.js")
    .pipe(watch("src/*.js"))
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest("dist"));
});
