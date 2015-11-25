var path = require('path');

var es6Path = path.join('uber-standard', 'rc', '.eslintrc.es6.json');
var es6Rules = require(es6Path);

var rules = {extends: 'eslint-config-uber/base'};
Object.keys(es6Rules).forEach(function(key) {
    rules[key] = es6Rules[key];
});
module.exports = rules;
