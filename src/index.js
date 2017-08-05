const makeFullWidth = require('./transforms/fullwidth')

module.exports = function makeAesthetic(string, { fullWidth = true } = {}) {
  let str = "" + string
  if (fullWidth) {
    str = makeFullWidth(str)
  }

  return str
}
