var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('sass', function(){ // 第一个是我们自定义的方法名
	gulp.src('css/*.scss')
	    .pipe(sass())
	    .pipe(gulp.dest('dest'));
	    gulp.watch('css/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
	
	