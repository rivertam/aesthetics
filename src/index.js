const makeFullWidth = require('./transforms/fullwidth')
const addJapanese = require('./transforms/japanese')
const addFormat = require('./transforms/fileformat')
const addDecoration = require('./transforms/decorate')

function hashStringToNumber(str) {
  let hash = 0
  for (let i = 0; i < str.length; ++i) {
    const c = str.charCodeAt(i)
    hash = (((hash << 5) - hash) + c) | 0
  }

  return hash
}

function makeRandom(seed) {
  return function random() {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }
}

function makeAesthetic(string, {
  fullWidth = true,
  japanese = true,
  fileFormat = false,
  decorate = false,
  seed: seedString = string,
} = {}) {
  let str = "" + string

  const seed = hashStringToNumber(seedString)

  if (fileFormat) {
    str = addFormat({ string: str, random: makeRandom(seed) })
  }

  if (fullWidth) {
    str = makeFullWidth(str)
  }


  if (decorate) {
    str = addDecoration({ string: str, random: makeRandom(seed) })
  }

  if (japanese) {
    str = addJapanese({ string: str, random: makeRandom(seed), count: japanese.count })
  }

  return str
}

makeAesthetic.reverse = function makeUgly(pretty) {
  return pretty
    .replace(/[^\s]/g, c => String.fromCharCode(c.charCodeAt(0) - 0xFEE0))
    .replace(/[^\sa-zA-Z0-9!\?\.'";:\]\[}{\)\(@#\$%\^&\*\-_=\+`~><]/g, '')
}

module.exports = makeAesthetic
