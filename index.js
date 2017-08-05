const makeFullwidth = require('./fullwidth')

module.exports = function makeAesthetic(string, { fullwidth = true } = {}) {
  let str = "" + string
  if (fullwidth) {
    str = makeFullwidth(str)
  }

  return str
}
