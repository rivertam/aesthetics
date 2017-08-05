#!/usr/bin/env node

const program = require('commander')

const { version } = require('./package.json')
const makeAesthetic = require('.')

program
  .version(version)
  .option('-w, --full-width', 'Full width characters')
  .parse(process.argv)

console.log(makeAesthetic(program.args.join(' '), program))
