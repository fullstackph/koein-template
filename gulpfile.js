const gulp = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

function sassCompile() {
  return gulp
    .src("stylesheets/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(rename({ basename: "main", suffix: ".min" }))
    .pipe(gulp.dest("stylesheets"))
    .pipe(browserSync.stream());
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

function compileJS() {
  return gulp
    .src("javascripts/main.js", { sourcemaps: true })
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(uglify())
    .pipe(rename({ basename: "main", suffix: ".min" }))
    .pipe(gulp.dest("javascripts"));
}

function transpileJS() {
  return gulp
    .src("javascripts/main.js")
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(rename({ basename: "main", suffix: ".min" }))
    .pipe(gulp.dest("javascripts"));
}

function watch() {
  browserSync.init({ server: "./" });
  gulp.watch("./stylesheets/**/*.scss", sassCompile);
  gulp.watch("./javascripts/main.js", transpileJS);
  gulp.watch("./*.html").on("change", browserSync.reload);
}

const build = gulp.parallel(
  gulp.series(sassCompile, autoprefixCSS, minifyCSS),
  gulp.series(compileJS)
);

exports.default = watch;
exports.build = build;
