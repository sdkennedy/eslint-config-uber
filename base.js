var readFileSync = require('fs').readFileSync;
var path = require('path');
var ini = require('ini');

var basePath = path.join('uber-standard', 'rc', '.eslintrc.json');
var baseRules = require(basePath);

var rules = {};
Object.keys(baseRules).forEach(function(key){
  rules[key] = baseRules[key];
});

// Attempt to pull indent size from project root's .editorconfig [*]
try {
  var editorConfigPath = path.join('.', '.editorconfig');
  var editorConfig = ini.parse(readFileSync(editorConfigPath, 'utf-8'));
  var indentSize = editorConfig && editorConfig['*'] && editorConfig['*'].indent_size;
  if(typeof indentSize === 'string'){
    rules.rules = rules.rules || {};
    rules.rules.indent = rules.rules.indent || [2, 2];
    rules.rules.indent[1] = parseInt(indentSize, 10);
  }
} catch (err) {
  // Do nothing
}
// Haven't figured out how to include custom rules in a reusable config
delete rules.rules['no-try-catch'];

rules.rules.indent = [2, 2];
module.exports = baseRules;
