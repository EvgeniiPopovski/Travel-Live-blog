let project = 'dist';
let source = '#src';

let path ={
    build: {
        html: project + '/',
        css: project + '/css/',
        js: project + '/js/',
        img: project + '/img/',
        fonts: project + '/fonts/',
    },
    src: {
        html: [source + '/*.html', '!'+source + '/_*.html'],
        css: source + '/scss/style.scss',
        js: source + '/js/script.js',
        img: source + '/img/**/*.{jpg,svg,ico,webp,gif,png}',
        fonts: source + '/fonts/*.ttf',
    },
    watch: {
        html: source + '/**/*.html',
        css: source + '/scss/**/*.scss',
        js: source + '/js/**/*.js',
        img: source + '/img/**/*.{jpg,svg,ico,webp,gif,png}',
    },
    clean: './' +  project + '/'
}

let {src,dest} = require('gulp');
let gulp = require('gulp');
let browsersync = require('browser-sync').create();
let fileinclude = require('gulp-file-include');
let del = require('del');
let sass = require('gulp-sass')

function browserSync  (params) {
    browsersync.init({
        server: {
        baseDir: './' +  project + '/',
        },
        port: 3000,
        notify: false
    })
}

function html () {
    return src(path.src.html)
    .pipe(fileinclude())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

function watchFiles () {
    gulp.watch([path.watch.html], html)
    gulp.watch([path.watch.css], css)

}

function doDelete () {
    return del(path.clean)
}

function css (){
    return src(path.src.css)
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

let build = gulp.series(doDelete, gulp.parallel(css,html))
let watch = gulp.parallel(build, watchFiles, browserSync);



exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;