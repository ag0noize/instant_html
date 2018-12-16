const gulp = require('gulp'),
	  browserSync = require('browser-sync').create(),
	  babel = require('gulp-babel'),
	  notify = require('gulp-notify'),
	  uglify = require('gulp-uglify'),
	  image = require('gulp-image'),
	  autoprefixer = require('gulp-autoprefixer'),
	  cleanCSS = require('gulp-clean-css'),
	  concat = require('gulp-concat'),

	  // config your ftp access

	  ftp = require('vinyl-ftp').create({
      	    host: 'myserver',
      	    user: 'me',
      	    password: 'mypass',
      	    parallel: 10,
      });

let scripts = [
	'app/js/libs/jquery-3.3.1.min.js',
	'app/js/libs/**/*.js', 
	'app/js/**/*.js', 
	'!app/js/build/scripts.min.js'
];

let styles = [
	'app/css/libs/*.css', 
	'app/css/**/*.css', 
	'!app/css/build/styles.min.css'
];


gulp.task('browserSync', () => {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });

    browserSync.watch('app', browserSync.reload);
});

gulp.task('styles', () => {
	return gulp.src(styles)
			   .pipe(concat('styles.min.css'))
		       .pipe(autoprefixer({
		            browsers: ['> 0.1%'],
		            cascade: false
		        }))
		       .pipe(cleanCSS({level: 2}))
		       .on('error', notify.onError({
		       		title: 'styles error'
		       }))
			   .pipe(gulp.dest('app/css/build'));
});

gulp.task('scripts', () => {
	return gulp.src(scripts)
		       .pipe(babel())
			   .pipe(concat('scripts.min.js'))
			   .pipe(uglify({
			   		toplevel: true
			   }))
		       .on('error', notify.onError({
		       		title: 'scripts error'
		       }))
			   .pipe(gulp.dest('app/js/build'));
});

gulp.task('images', () => {
  	return gulp.src(['app/img/**/*.{jpg,jpeg,png}', '!app/img/favicon/*'])
    		   .pipe(image())
		       .on('error', notify.onError({
		       		title: 'images error'
		       }))
    		   .pipe(gulp.dest('app/img'));
});

gulp.task('watch', () => {
	gulp.watch(['app/css/**/*.css', '!app/css/build/styles.min.css'], gulp.parallel('styles'))
	gulp.watch(['app/js/**/*.js', '!app/js/build/scripts.min.js'], gulp.parallel('scripts'))
});

gulp.task('upload', () => {
    return gulp.src('app/**', {base: 'app', buffer: false})
        .pipe(ftp.newer( '/www/aa'))
        .pipe(ftp.dest( '/www/aa'));
});


// minify all resources (styles, scripts, images) and upload them to server
	
gulp.task('deploy', gulp.series(
	gulp.parallel('styles', 'scripts', 'images'),
	'upload'
));


// run hotreaload and minify scripts and styles on change

gulp.task('default', gulp.series(
	gulp.parallel('styles', 'scripts'),
	gulp.parallel('watch', 'browserSync')
));