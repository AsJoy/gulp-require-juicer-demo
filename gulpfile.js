const gulp = require('gulp'),
    rjs = require('gulp-requirejs');
const del = require('del'),
    shell = require('gulp-shell');

var aResPath = ['js/app'];

gulp.task('clean', function (cb) {
    del(['dist/**']).then(paths => {
        cb()
    });
})

gulp.task('juicer', function() {
 shell.task(
        [
            'juicer ./www/js/sup/index.juicer.html -af ./www/js/sup/index.juicer.js'
        ]
    )   
})
gulp.task('requirejsBuild', ['clean'],  function() {
    aResPath.forEach(function (v) {
        rjs({
            baseUrl: './www/',
            name: v,
            out: v + '.js',
            paths: {
                'jquery': 'http://jquery.js'
            }
        })
        .pipe(gulp.dest('./dist/'));
    })
});

gulp.task('watch', function () {
    gulp.watch(['www/**/*.js'], ['requirejsBuild']);
    gulp.watch(['www/**/*.juicer.html'], ['juicer']);
})

gulp.task('start', ['juicer', 'requirejsBuild', 'watch']);