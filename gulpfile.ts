import gulp, { dest, series, src } from "gulp";
import del from "del";

import webpack from "webpack-stream";

// const gulp = require("gulp");
// const webpack = require("gulp-webpack");
// const version = require("./package.json").version;
// const browserSync = require("browser-sync");
// const reload = browserSync.reload;
const output = "build";
const mode =
  process.env.NODE_ENV === "develop" ? "development" : ("production" as any);
const path = {
  js: "src/**/*.js",
};
const webpackConfig = {
  entry: "./src/index.js",
  mode,
  output: {
    path: __dirname + "/" + output,
    filename: "rxjs.js",
  },
};
gulp.task("clean", () => {
  return del(output);
});

gulp.task("script", function () {
  return src(path.js).pipe(webpack(webpackConfig)).pipe(dest(output));
});
gulp.task("compile", () => {
  series("script");
});
// gulp.task("default", ["clean"], () => {
//     gulp.start("compile");
// });
// gulp.task("connect", ["compile"], function () {
//     browserSync({
//         notify: false,
//         port: 9000,
//         server: {
//             baseDir: ["."],
//         },
//         startPath: "demo/index.html",
//     });
//
//     // watch for changes
//     gulp.watch(path.js, function () {
//         gulp.start("script");
//         reload();
//     });
// });
// gulp.task("serve", ["clean"], function () {
//     gulp.start("connect");
// });
gulp.task("default", series("clean",'script'));
