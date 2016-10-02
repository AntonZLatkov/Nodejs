'use strict'

let gulp = require('gulp')
let del = require('del')
let uglify = require('gulp-uglify')
let concat = require('gulp-concat')
let htmlmin = require('gulp-htmlmin')
// let sass = require('gulp-sass')
// let imagemin = require('gulp-imagemin')
let cleanCss = require('gulp-clean-css')

gulp.task('scripts', function () {
  del.sync(['content/build/alljs*'])

  return gulp.src([
    'libs/jquery/dist/jquery.js',
    'content/helperFunctions.js'
  ])
    .pipe(uglify())
    .pipe(concat('alljs.min.js'))
    .pipe(gulp.dest('content/build'))
})

// gulp.task('sass', function () {
//   return gulp.src('content/build/sass/*')
//     .pipe(sass()) // Converts Sass to CSS with gulp-sass
//     .pipe(gulp.dest('content/build/sass'))
// })

gulp.task('htmlmin', () => {
  del.sync(['content/build/index.html'])

  return gulp.src('*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('dist'))
})

gulp.task('css', function () {
  del.sync(['content/build/allcss*'])

  return gulp.src([
    'content/site.css'
  ])
    .pipe(cleanCss())
    .pipe(concat('allcss.min.css'))
    .pipe(gulp.dest('content/build'))
})

// gulp.task('images', function () {
//   return gulp.src('content/build/images/**/*.+(png|jpg|gif|svg)')
//   .pipe(imagemin())
//   .pipe(gulp.dest('content/build/images'))
// })

gulp.task('default', ['scripts', 'css'], function () {
  console.log('All running!')
})
