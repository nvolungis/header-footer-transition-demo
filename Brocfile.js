var compileSass = require('broccoli-sass'),
    concat      = require('broccoli-concat'),
    pickFiles   = require('broccoli-static-compiler'),
    mergeTrees  = require('broccoli-merge-trees'),
    appStyles,
    appScripts, 
    appHtml;


appStyles = compileSass(['app/scss'], 
  'app.scss', 
  '/assets/app.css'
);

appScripts  = concat('app/js', {
  inputFiles: ["vendor/**/*.js", "**/*.js"], 
  outputFile: '/assets/app.js' 
});

appHtml = pickFiles('app', {
  srcDir  : '/',
  files   : ['index.html'],
  destDir : '/'
});

appImages = pickFiles('app/img', {
  srcDir  : '/',
  files   : ['**/*.jpg'],
  destDir : '/assets/img' 
});

module.exports = mergeTrees([appHtml, appImages, appStyles, appScripts]);
