const gulp         = require('gulp');
const browserSync  = require('browser-sync');
const sass         = require('gulp-sass')(require('sass'));
const rename       = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS     = require('gulp-clean-css');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('styles', function() {
    return gulp.src("./sass/**/*.+(scss|sass)")
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            prefix: "",
            suffix: ".min",
          }))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("./sass/**/*.+(scss|sass)", gulp.parallel("styles"));
    gulp.watch("./*.html").on("change", browserSync.reload);
    gulp.watch("./js/*.js").on("change", browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));