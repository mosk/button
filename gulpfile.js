const gulp = require(`gulp`);
const stylus = require(`gulp-stylus`);
const sourcemaps = require(`gulp-sourcemaps`);
const del = require(`del`);
const newer = require(`gulp-newer`);
const remember = require(`gulp-remember`);
const autoprefixer = require(`gulp-autoprefixer`);
const browserSync = require(`browser-sync`).create();
const webpack = require(`webpack`);
const webpackStream = require(`webpack-stream`);
const webpackConfig = require(`./webpack.config.js`);

gulp.task(`styles`, () => {
	return gulp.src(`src/**/main.styl`, {since: gulp.lastRun(`styles`)})
		.pipe(sourcemaps.init())
		.pipe(remember(`styles`))
		.pipe(stylus())
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(`docs`));
});

gulp.task(`js`, () => {

	return gulp.src(`src/**/main.js`)
		.pipe(webpackStream(webpackConfig, webpack))
		.pipe(gulp.dest(`docs/js`));
});

gulp.task(`clean`, () => {
	return del(`docs`);
});

gulp.task(`assets`, () => {
	return gulp.src([`src/index.html`])
		.pipe(gulp.dest(`docs`));
});

gulp.task(`build`, gulp.series(
	`clean`,
	gulp.parallel(`styles`, `assets`, `js`))
);

gulp.task(`watch`, () => {
	gulp.watch(`src/styles/**/*.*`, gulp.series(`styles`));
	gulp.watch([`src/**/*.html`], gulp.series(`assets`));
	gulp.watch(`src/js/**/*.js`, gulp.series(`js`));
});

gulp.task(`serve`, () => {
	browserSync.init({
		server: `docs`
	});

	browserSync.watch(`docs/**/*.*`).on(`change`, browserSync.reload);
});

gulp.task(`dev`, gulp.series(`build`, gulp.parallel(`watch`, `serve`)));