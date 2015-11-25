var path = require('path');

var babelPath = path.join('uber-standard', 'rc', '.eslintrc.babel.json');
var babelRules = require(babelPath);

var rules = {extends: 'eslint-config-uber/es6'};
Object.keys(babelRules).forEach(function(key){
  rules[key] = babelRules[key];
});

module.exports = rules;
