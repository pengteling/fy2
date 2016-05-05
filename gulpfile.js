var gulp = require('gulp');
var imagemin = require('gulp-imagemin'),
    //确保本地已安装imagemin-pngquant [npm install gulp-imagemin imagemin-pngquant --save-dev]
pngquant = require('imagemin-pngquant');

gulp.task('image', function() {
    gulp.src('./images/**/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }], //不要移除svg的viewbox属性
            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        }))
        .pipe(gulp.dest('dist/images'));
});

var htmlmin = require('gulp-htmlmin');  //压缩html
gulp.task('html', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});