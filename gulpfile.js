const { series, src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const notify = require("gulp-notify");
const webp = require("gulp-webp");

sass.compiler = require("dart-sass");

const paths = {
    images: "./src/img/**/*",
    scss: "./src/scss/**/*.scss",
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

exports.css = css;
exports.minifyCSS = minifyCSS;
exports.minifyImage = minifyImage;
exports.watch = watchFiles;
exports.convertwebp = convertToWebp;
exports.default = series(css, minifyImage, convertToWebp, watchFiles);
