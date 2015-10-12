var gulp = require('gulp'),
    args = require('yargs').argv,
    del = require('del'),
    $ = require('gulp-load-plugins')({lazy: true}),    
    config = require('./gulp-config.js');

gulp.task('sass', function() {
    return gulp
        .src(config.source.sassMain)
        .pipe($.print())
        .pipe($.sass(config.sass).on('error', $.sass.logError))
        .pipe($.autoprefixer(config.autoprefixer))
        .pipe($.minifyCss())
        .pipe($.rename(config.build.allCss))
        .pipe(gulp.dest(config.build.root));
});

gulp.task('watch', config.watchTasks, function() {
    return gulp.watch([config.source.sassFiles], config.watchTasks);
});

gulp.task('clean', function() {
    return del(config.build.root);
});