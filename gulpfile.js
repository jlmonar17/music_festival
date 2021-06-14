const { series, src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const notify = require("gulp-notify");
const webp = require("gulp-webp");
const concat = require("gulp-concat");

sass.compiler = require("dart-sass");

const paths = {
    images: "./src/img/**/*",
    scss: "./src/scss/**/*.scss",
    js: "./src/js/**/*.js",
};

function css() {
    return src("./src/scss/app.scss").pipe(sass()).pipe(dest("./build/css"));
}

function minifyCSS() {
    return src("./src/scss/app.scss")
        .pipe(
            sass({
                outputStyle: "compressed",
            })
        )
        .pipe(dest("./build/css"));
}

function watchFiles() {
    watch(paths.scss, css);
    watch(paths.js, javascript);
}

function minifyImage() {
    return src(paths.images)
        .pipe(imagemin())
        .pipe(dest("./build/img"))
        .pipe(notify({ message: "Image minified." }));
}

function convertToWebp() {
    return src(paths.images)
        .pipe(webp())
        .pipe(dest("./build/img"))
        .pipe(notify({ message: "Image converted to webp." }));
}

function javascript() {
    return src(paths.js).pipe(concat("bundle.js")).pipe(dest("./build/js"));
}

exports.css = css;
exports.minifyCSS = minifyCSS;
exports.minifyImage = minifyImage;
exports.watch = watchFiles;
exports.convertwebp = convertToWebp;
exports.default = series(
    css,
    javascript,
    minifyImage,
    convertToWebp,
    watchFiles
);
