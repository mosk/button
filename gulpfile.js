const gulp = require(`gulp`);
const stylus = require(`gulp-stylus`);
const sourcemaps = require(`gulp-sourcemaps`);
const del = require(`del`);
const newer = require(`gulp-newer`);
const remember = require(`gulp-remember`);
const autoprefixer = require(`gulp-autoprefixer`);
const browserSync = require(`browser-sync`).create();

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
		.pipe(gulp.dest(`build`));
});

gulp.task(`clean`, () => {
	return del(`build`);
});

gulp.task(`assets`, () => {
	return gulp.src([`src/index.html`, `src/js/main.js`])
		.pipe(gulp.dest(`build`));
});

gulp.task(`build`, gulp.series(
	`clean`,
	gulp.parallel(`styles`, `assets`))
);

gulp.task(`watch`, () => {
	gulp.watch(`src/styles/**/*.*`, gulp.series(`styles`));
	gulp.watch([`src/**/*.html`, `src/**/*.js`], gulp.series(`assets`));
});

gulp.task(`serve`, () => {
	browserSync.init({
		server: `build`
	});

	browserSync.watch(`build/**/*.*`).on(`change`, browserSync.reload);
});

gulp.task(`dev`, gulp.series(`build`, gulp.parallel(`watch`, `serve`)));