var gulp = require('gulp'), // Load Gulp!
// Now that we've installed the uglify package we can require it:
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    // input = ['build/style.scss'],
    // output = ['build/style.min.css'],
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano');


gulp.task('sass', function() {
   gulp.src('build/*.scss')
      .pipe(sass())
      .pipe(autoprefixer({
         browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('build'))
      .pipe(cssnano())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('build'));
});

// Static server
gulp.task('browser', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });

    gulp.watch("app/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('compress', function(){
    gulp.src('build/*.js') // What files do we want gulp to consume?
      .pipe(uglify()) // Call the uglify function on these files
      .pipe(rename({ extname: '.min.js' })) //  Rename the uglified file
      .pipe(gulp.dest('build')) // Where do we put the result?
});

gulp.task('watch-sass', function() {
   gulp.watch('build/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'browser']);

