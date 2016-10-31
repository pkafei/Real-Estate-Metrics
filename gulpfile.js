/* Gulp File */

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');

//Process Pug
gulp.task('pug', function() {
	gulp.src('views/*.pug')
	.pipe(pug({
		pretty: true
	}))
	.pipe(gulp.dest('dist'))
})

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
      baseDir: 'dist',
      index: 'index.html'
    },
  })
})

// Watch Gulp Tasks
gulp.task('watch', ['browserSync', 'pug', 'sass'], function(){
	gulp.watch('public/scss/**/*.scss', ['sass']);
	gulp.watch('views/*.pug', browserSync.reload);
})

//Docs: https://css-tricks.com/gulp-for-beginners/