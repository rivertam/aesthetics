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

module.exports = function makeAesthetic(string, {
  fullWidth = true,
  japanese = true,
  fileFormat = false,
  decorate = false,
  seed = string,
} = {}) {
  const random = ((seedString) => {
    let seed = hashStringToNumber(seedString)
    return function random() {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    }
  })(seed)

  let str = "" + string
  if (fullWidth) {
    str = makeFullWidth(str)
  }

  if (fileFormat) {
    str = addFormat({ string: str, random })
  }

  if (decorate) {
    str = addDecoration({ string: str, random })
  }

  if (japanese) {
    str = addJapanese({ string: str, random, count: japanese.count })
  }

  return str
}
