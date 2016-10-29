/* Gulp File */

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('hello', function() {
	console.log("Hello, Porsh!")
});

// Preprocess Sass
gulp.task('sass', function(){
	return gulp.src('public/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});


//Browser Sync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'application'
    },
  })
})

// Watch Gulp Tasks
gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('public/scss/**/*.scss', ['sass']);
	// Other Watchers
})

