const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");

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

exports.css = css;
exports.minifyCSS = minifyCSS;
exports.watch = watchFiles;
