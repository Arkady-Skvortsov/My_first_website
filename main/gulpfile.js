let gulp = require('gulp');
let browserSync = require('browser-sync').create();

function Sync() {
   browserSync.init({
      server: {
      	 baseDir: "./"
      },
      port: 3000
   });
}

function Reload() {
   browserSync.reload();
}


function Watch() {
	gulp.watch('./**/*.html', Reload);
	gulp.watch('./CSS/*.css', Reload);
}

gulp.task('default', gulp.parallel(Watch, Sync)); 
