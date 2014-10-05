// plugins load
var gulp = require('gulp'),
    compass = require('gulp-compass');

gulp.task('compass', function(){

    gulp.src('src/sass/*.scss').pipe(compass({
        config_file : 'src/sass/config.rb',
        comments    : false,
        css         : 'dist/css/',
        sass        : 'src/sass/'
    }));

});

gulp.task('watch', function(){
    gulp.watch('src/sass/*.scss', function(event) {
        gulp.run('compass');
    });
});

gulp.task('default', function(){
    gulp.run('compass');
});
