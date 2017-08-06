#!/usr/bin/env node

const program = require('commander')

const { version } = require('./package.json')
const makeAesthetic = require('.')

program
  .version(version)
  .option('-W, --no-full-width', 'Don\'t use full width characters')
  .option('-J, --no-japanese', 'Don\'t add japanese characters')
  .option('-f, --file-format', 'Add a file format')
  .option('-d, --decorate', 'Add a decorator (such as ™)')
  .parse(process.argv)

console.log(makeAesthetic(program.args.join(' '), program))
