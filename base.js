var readFileSync = require('fs').readFileSync;
var path = require('path');
var editorconfig = require('editorconfig');

var basePath = path.join('uber-standard', 'rc', '.eslintrc.json');
var baseRules = require(basePath);

var rules = {};
Object.keys(baseRules).forEach(function(key){
  rules[key] = baseRules[key];
});

// Attempt to pull indent size from project root's .editorconfig [*]
var editorConfig;
editorConfig = editorconfig.parseSync('.editorconfig');
if( Object.keys(editorConfig).length === 0 ){
  editorConfig = editorconfig.parseSync('.');
}

var indentSize = editorConfig.indent_size;
if(typeof indentSize === 'number'){
  rules.rules = rules.rules || {};
  rules.rules.indent = rules.rules.indent || [2, 2];
  rules.rules.indent[1] = indentSize;
}

// Haven't figured out how to include custom rules in a reusable config
delete rules.rules['no-try-catch'];

module.exports = baseRules;
