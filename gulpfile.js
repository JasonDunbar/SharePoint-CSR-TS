var gulp = require("gulp"),
    clean = require("gulp-clean"),
    ts = require("gulp-typescript"),
    sourcemaps = require("gulp-sourcemaps"),
    concat = require("gulp-concat"),
    browserify = require("browserify"),
    source = require("vinyl-source-stream"),
    buffer = require("vinyl-buffer"),
    tsify = require("tsify");
 
var paths = {
    ts: './source/**/*.ts',
    dist: './dist',
    js: './dist/**/*.js',
    app: './dist/app.js',
    bundle: './dist/csr.js',
    sourceMaps: "./maps"
};
 
// Create typescript project
var tsProject = ts.createProject('tsconfig.json');
 
// Gulp Tasks
gulp.task('clean-scripts', function () {
  return gulp.src('dist/**/*.js', {read: false})
    .pipe(clean());
});

gulp.task('scripts', function() {
    var tsResult = gulp.src(paths.ts)
        //.pipe(sourcemaps.init())
        .pipe(tsProject())
        
    return tsResult.js
        //.pipe(sourcemaps.write({includeContent: false, sourceRoot: '../source'})) // write inline source maps
        .pipe(concat('app.js'))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('bundle', function () {  
    return browserify()
        .add('./source/Override.ts')
        .plugin(tsify)
        .bundle()
        .on('error', function (error) { console.error(error.toString()); })
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
});
 
gulp.task('default', ['clean-scripts', 'scripts', 'watch']);