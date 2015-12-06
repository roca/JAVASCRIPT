
var marked = require("marked");
/*
  Markdown plugin
*/
exports.translate = function(load) {


  load.metadata.format = 'amd';

   var html = marked(load.source);

  return 'def' + 'ine(function() {\nreturn "' + html
    .replace(/(["\\])/g, '\\$1')
    .replace(/[\f]/g, "\\f")
    .replace(/[\b]/g, "\\b")
    .replace(/[\n]/g, "\\n")
    .replace(/[\t]/g, "\\t")
    .replace(/[\r]/g, "\\r")
    .replace(/[\u2028]/g, "\\u2028")
    .replace(/[\u2029]/g, "\\u2029")
  + '";\n});';
}