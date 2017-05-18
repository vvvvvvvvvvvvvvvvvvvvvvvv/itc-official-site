var gulp = require('gulp');
var config = require('../config');

var copy = function() {
	return gulp.src(config.src + '/fonts/**/*.woff2')
		.pipe(gulp.dest(config.dest + '/assets/fonts'))
	.on('end', function() {
		gulp.src(require('node-font-awesome').fonts)
			.pipe(gulp.dest(config.dest + '/assets/fonts'))
		.on('end', function() {
			gulp.src([config.src + '/favicon.ico', config.src + '/webclip.png'])
				.pipe(gulp.dest(config.dest));
		});
	});
};

gulp.task('copy', copy);
