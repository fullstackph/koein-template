const gulp = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");

function sassCompile() {
  return gulp
    .src("stylesheets/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(rename({ basename: "main", suffix: ".min" }))
    .pipe(gulp.dest("stylesheets"));
}

function autoprefixCSS() {
  return gulp
    .src("stylesheets/main.min.css")
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest("stylesheets"));
}

function minifyCSS() {
  return gulp
    .src("stylesheets/main.min.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest("stylesheets"));
}

function watch() {
  browserSync.init({ server: "./" });
  gulp.watch("./stylesheets/**/*.scss", sassCompile);
}

const build = gulp.series(sassCompile, autoprefixCSS, minifyCSS);

exports.default = watch;
exports.build = build;
