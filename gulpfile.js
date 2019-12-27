const { src, dest, task, series, watch, parallel } = require("gulp");
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const concat = require('gulp-concat'); 
const browserSync = require('browser-sync').create(); 
const reload = browserSync.reload; 
const sassGlob = require('gulp-sass-glob'); 
const autoprefixer = require('gulp-autoprefixer'); 
const px2rem = require('gulp-smile-px2rem');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');  
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
//  const svgo = require('gulp-svgo');
//  const svgSprite = require('gulp-svg-sprite');
const gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');
 
const env = process.env.NODE_ENV;
 
const {SRC_PATH, DIST_PATH, STYLE_LIBS, JS_LIBS} = require('./gulp.config');
 
sass.compiler = require('node-sass');
 
task('clean', () => {
 return src(`${DIST_PATH}/**/*`, { read: false })
   .pipe(rm())
})
 
task('copy:html', () => {
 return src('./src/*.html')
   .pipe(dest(DIST_PATH))
   .pipe(reload({ stream: true }));
})

const fonts = [
  './src/fonts/**/*.woff',
  './src/fonts/**/*.woff2'
]
task('copy:fonts', () => {
  return src(fonts).pipe(dest('./dist/fonts'))
})
 
task('styles', () => {
 return src([...STYLE_LIBS, './src/css/layout/media.scss', './src/css/layout/base.scss', './src/css/**/*.scss'])
   .pipe(gulpif(env === 'dev', sourcemaps.init()))
   .pipe(concat('main.min.scss'))
   .pipe(sassGlob())
   .pipe(sass().on('error', sass.logError))
    // .pipe(px2rem())
   .pipe(gulpif(env === 'prod', autoprefixer({
       browsers: ['last 2 versions'],
       cascade: false
     })))
   .pipe(gulpif(env === 'prod', gcmq()))
   .pipe(gulpif(env === 'prod', cleanCSS()))
   .pipe(gulpif(env === 'dev', sourcemaps.write()))
   .pipe(dest(DIST_PATH))
   .pipe(reload({ stream: true }));
});


task ('images', () => {
  return src('./src/images/**/*')
  .pipe(imagemin())
  .pipe(dest('./dist/images'))
})

task ('video', () => {
  return src('./src/video.mp4')
  .pipe(dest('./dist'))
})

 
const libs = [
 './node_modules/jquery/dist/jquery.js',
 './src/js/*.js'
];
 
task('scripts', () => {
 return src([...JS_LIBS, './src/js/*.js'])
   .pipe(gulpif(env === 'dev', sourcemaps.init()))
   .pipe(concat('main.min.js', {newLine: ';'}))
   .pipe(gulpif(env === 'prod', babel({
       presets: ['@babel/env']
     })))
   .pipe(gulpif(env === 'prod', uglify()))
   .pipe(gulpif(env === 'dev', sourcemaps.write()))
   .pipe(dest(DIST_PATH))
   .pipe(reload({ stream: true }));
});
 
task('server', () => {
 browserSync.init({
     server: {
         baseDir: "./dist"
     },
 });
});
 
task('watch', () => {
 watch('./src/css/**/*.scss', series('styles'));
 watch('./src/index.html', series('copy:html'));
 watch('./src/js/*.js', series('scripts'));
 watch('./src/images/**/*', series('images'));
});
 
 
task('default',
 series(
   'clean',
   parallel('copy:html', 'copy:fonts' ,'styles', 'scripts', 'images', 'video'),
   parallel('watch', 'server')
 )
);
 
task('build',
 series(
   'clean',
   parallel('copy:html', 'copy:fonts', 'styles', 'scripts', 'images', 'video'))
);