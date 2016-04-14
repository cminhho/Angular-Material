gulp = require 'gulp'
path = require 'path'
_ = require 'lodash'
browserSync = require 'browser-sync'
$ = require('gulp-load-plugins')()

gulp.task 'coffee', ->
	gulp
	.src([
		path.join conf.paths.src, '/app/main/apps/**/*.coffee'
	])
	.pipe($.coffee bare: yes)
	.pipe(gulp.dest path.join conf.paths.temp '/serve/app/')
	.pipe(browserSync.reload stream: yes)