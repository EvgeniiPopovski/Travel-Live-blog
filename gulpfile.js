let project = 'dist';
let source = '#src';

let path = {
    build: {
        html: project + '/',
        css: project + '/css/',
        js: project + '/js/',
        img: project + '/img/',
        fonts: project + '/fonts/',
    },
    src: {
        html: [source + '/*.html', '!' + source + '/_*.html'],
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
    clean: './' + project + '/'
}

let { src, dest } = require('gulp');
let gulp = require('gulp');
let browsersync = require('browser-sync').create();
let fileinclude = require('gulp-file-include');
let del = require('del');
let sass = require('gulp-sass');
let group_media = require('gulp-group-css-media-queries');
let gulp_clean = require('gulp-clean-css')
let gulp_rename = require('gulp-rename')
let uglify = require('gulp-uglify-es').default
let image_min = require('gulp-imagemin');
let webp = require('gulp-webp');
let ttf2woff = require('gulp-ttf2woff')
let ttf2woff2 = require('gulp-ttf2woff2')

function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: './' + project + '/',
        },
        port: 3000,
        notify: false
    })
}

function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}


function css() {
    return src(path.src.css)
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(group_media())
        .pipe(dest(path.build.css))
        .pipe(gulp_clean())
        .pipe(gulp_rename(
            {
                extname: '.min.css'
            }
        ))
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}


function js() {
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        .pipe(uglify())
        .pipe(gulp_rename(
            {
                extname: '.min.js'
            }
        ))
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}

function images() {
    return src(path.src.img)
        .pipe(webp({
            quality: 70
        }))
        .pipe(dest(path.build.img))
        .pipe(src(path.src.img))
        .pipe(image_min({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true,
            optimizationLevel: 3 // 0 to 7
        }))
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

function fonts () {
    src(path.src.fonts)
    .pipe(ttf2woff())
    .pipe(dest(path.build.fonts))
    return src(path.src.fonts)
    .pipe(ttf2woff2())
    .pipe(dest(path.build.fonts))

}

function watchFiles() {
    gulp.watch([path.watch.html], html)
    gulp.watch([path.watch.css], css)
    gulp.watch([path.watch.js], js)
    gulp.watch([path.watch.img], images)

}

function doDelete() {
    return del(path.clean)
}


let build = gulp.series(doDelete, gulp.parallel(js, css, html, images , fonts))
let watch = gulp.parallel(build, watchFiles, browserSync);



exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;