var gulp 	= require('gulp'),     
    sass 	= require('gulp-sass') 
    notify 	= require("gulp-notify") 
    bower 	= require('gulp-bower');

var config = {
     fontPath 	: './app/fonts',
    cssPath 	: './app/css',
    sassPath 	: './app/sass',
     bowerDir 	: './app/bower_components' 
}

gulp.task('bower', function() { 
    return bower()
         .pipe(gulp.dest(config.bowerDir)) 
});

gulp.task('icons', function() { 
    return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*') 
        .pipe(gulp.dest(config.fontPath)); 
});

gulp.task('sass', function () {
	gulp.src(config.sassPath + '/app.scss')
	.pipe(sass({
		outputStyle: 'compressed',
		includePaths: [
		 	'./resources/sass',
		     config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
		    	config.bowerDir + '/fontawesome/scss',
         ]
	}))
	.pipe(gulp.dest(config.cssPath));
});

// Rerun the task when a file changes
 gulp.task('watch', function() {
     gulp.watch(config.sassPath + '/**/*.scss', ['sass']); 
});

  gulp.task('default', ['bower', 'icons', 'sass']);