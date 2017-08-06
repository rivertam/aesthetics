'use strict';

var makeFullWidth = require('./transforms/fullwidth');
var addJapanese = require('./transforms/japanese');
var addFormat = require('./transforms/fileformat');
var addDecoration = require('./transforms/decorate');

function hashStringToNumber(str) {
  var hash = 0;
  for (var i = 0; i < str.length; ++i) {
    var c = str.charCodeAt(i);
    hash = (hash << 5) - hash + c | 0;
  }

  return hash;
}

function makeRandom(seed) {
  return function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };
}

function makeAesthetic(string) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === undefined ? true : _ref$fullWidth,
      _ref$japanese = _ref.japanese,
      japanese = _ref$japanese === undefined ? true : _ref$japanese,
      _ref$fileFormat = _ref.fileFormat,
      fileFormat = _ref$fileFormat === undefined ? false : _ref$fileFormat,
      _ref$decorate = _ref.decorate,
      decorate = _ref$decorate === undefined ? false : _ref$decorate,
      _ref$seed = _ref.seed,
      seedString = _ref$seed === undefined ? string : _ref$seed;

  var str = "" + string;

  var seed = hashStringToNumber(seedString);

  if (fileFormat) {
    str = addFormat({ string: str, random: makeRandom(seed) });
  }

  if (fullWidth) {
    str = makeFullWidth(str);
  }

  if (decorate) {
    str = addDecoration({ string: str, random: makeRandom(seed) });
  }

  if (japanese) {
    str = addJapanese({ string: str, random: makeRandom(seed), count: japanese.count });
  }

  return str;
}

makeAesthetic.reverse = function makeUgly(pretty) {
  return pretty.replace(/[^\s]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) - 0xFEE0);
  }).replace(/[^\sa-zA-Z0-9!\?\.'";:\]\[}{\)\(@#\$%\^&\*\-_=\+`~><]/g, '');
};

module.exports = makeAesthetic;