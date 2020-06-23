'use strict';

const gulp = require('gulp');
const svgmin = require('gulp-svgmin');
const svgpath = require('svgpath');
const fs = require('fs');

gulp.task('icons', function(done) {
  const folder = 'icons/';
  const fileName = 'vaadin-avatar-iconset';

  // Optimize the source files
  gulp.src(folder + '*.svg')
    .pipe(svgmin({
      plugins: [{
        removeTitle: true
      }, {
        cleanupNumericValues: {
          floatPrecision: 6
        }
      }, {
        convertPathData: {
          floatPrecision: 6
        }
      }]
    }))
    .pipe(gulp.dest(folder))
    .on('finish', function(args) {
      // iron-iconset-svg
      fs.readdir(folder, function(err, filenames) {
        if (err) {
          console.error(err);
          return;
        }

        var output = `<!-- NOTICE: Generated with 'gulp icons' -->
<link rel="import" href="../../iron-iconset-svg/iron-iconset-svg.html">
<iron-iconset-svg size="1000" name="avatar">
<svg xmlns="http://www.w3.org/2000/svg">
<defs>
`;

        filenames.forEach(function(filename) {
          // Skip non-svg files
          if (filename.indexOf('.svg') === -1) {
            return;
          }

          var content = fs.readFileSync(folder + filename, 'utf-8');
          var path = content.match(/<path d="([^"]*)"/);
          if (path) {
            // var xScale = Math.min(1, fontHeight / glyphWidth);
            // var yScale = -1 * Math.min(1, fontHeight / glyphWidth);
            // var xTranslate = Math.max(0, (fontHeight - glyphWidth) / 2);
            // var yTranslate = -1 * fontAscent * (2 - Math.min(1, fontHeight / glyphWidth));
            var newPath = new svgpath(path[1])
              // .translate(xTranslate, yTranslate)
              .scale(1000 / 24, 1000 / 24)
              .round(0)
              .toString();
            var name = filename.replace('.svg', '').replace(/\s/g, '-').toLowerCase();
            output += `<g id="${name}"><path d="${newPath}"/></g>\n`;
          }
        });

        output += `</defs>
</svg>
</iron-iconset-svg>
`;

        fs.writeFile(`src/${fileName}.html`, output, function(err) {
          if (err) {
            return console.error(err);
          }
          done();
        });
      });
    });
});
