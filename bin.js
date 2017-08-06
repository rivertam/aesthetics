#!/usr/bin/env node
'use strict';

var program = require('commander');

var _require = require('./package.json'),
    version = _require.version;

var makeAesthetic = require('.');

program.version(version).option('-W, --no-full-width', 'Don\'t use full width characters').option('-J, --no-japanese', 'Don\'t add japanese characters').option('-f, --file-format', 'Add a file format').option('-d, --decorate', 'Add a decorator (such as ™)').parse(process.argv);

console.log(makeAesthetic(program.args.join(''), program));