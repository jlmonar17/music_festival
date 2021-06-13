const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");

sass.compiler = require("dart-sass");

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
    watch("./src/scss/**/*.scss", css);
}

function minifyImage() {
    return src("./src/img/**/*").pipe(imagemin()).pipe(dest("./build/img"));
}

exports.css = css;
exports.minifyCSS = minifyCSS;
exports.minifyImage = minifyImage;
exports.watch = watchFiles;
