/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var 御日こらゆは擢みれａｅｓｔｈｅｔｉｃｓ = __webpack_require__(1);

var ｆｏｒｍめも以屋名 = document.getElementById('ｆｏｒｍめも以屋名');

// const ｌａｂｅｌｓしたむっのややく = Array.from(ｆｏｒｍめも以屋名.getElementsByClassName('ｌａｂｅｌゃるめ譜氏ヒフラテケ絵'))

var ｏｐｔｉｏｎｓ目氏やつしろちんゅ = {};

// ｓｅｔ　ｕｐ　ｏｐｔｉｏｎｓ　ｉｎｐｕｔｓ派留差擢もまにむ保
[{
  ｎａｍｅ御手擢舳ふく: 'ｆｕｌｌ－ｗｉｄｔｈトハミカ名夜列かあ',
  ｋｅｙまよほふつえれふ目名: '離魔等無擢留列保ｆｕｌｌＷｉｄｔｈ',
  ｄｅｓｃｒｉｐｔｉｏｎ留都列へくこ: 'ｆｕｌｌ　ｗｉｄｔｈ　ｃｈａｒａｃｔｅｒｓ等区氏譜課雲樹',
  ｄｅｆａｕｌｔ阿毛課都ろ: true
}, {
  ｎａｍｅ御手擢舳ふく: 'ｊａｐａｎｅｓｅサエノメナフ手露名ゅ遊譜',
  ｋｅｙまよほふつえれふ目名: 'ｊａｐａｎｅｓｅサエノメナフ手露名ゅ遊譜',
  ｄｅｓｃｒｉｐｔｉｏｎ留都列へくこ: 'ｕｓｅ　ｊａｐａｎｅｓｅ　ｃｈａｒａｃｔｅｒｓかつゃくっけよしにそ',
  ｄｅｆａｕｌｔ阿毛課都ろ: true
}, {
  ｎａｍｅ御手擢舳ふく: 'ｆｉｌｅ名名らま',
  ｋｅｙまよほふつえれふ目名: 'ｆｉｌｅＦｏｒｍａｔゅしたほやにな',
  ｄｅｓｃｒｉｐｔｉｏｎ留都列へくこ: 'ａｄｄ　ａ　ｆｉｌｅ　ｆｏｒｍａｔ　ｔｏ　ｔｈｅ　ｅｎｄゃゆょふ列へょ',
  ｄｅｆａｕｌｔ阿毛課都ろ: false
}, {
  ｎａｍｅ御手擢舳ふく: 'ろ区瀬差ゃけｄｅｃｏｒａｔｅ',
  ｋｅｙまよほふつえれふ目名: 'ろ区瀬差ゃけｄｅｃｏｒａｔｅ',
  ｄｅｓｃｒｉｐｔｉｏｎ留都列へくこ: 'ａｄｄ　ａ　ｄｅｃｏｒａｔｉｏｎヤュスサニ無離遊素都よいねか',
  ｄｅｆａｕｌｔ阿毛課都ろ: false
}].forEach(function (_ref) {
  var ｎａｍｅ御手擢舳ふく = _ref.ｎａｍｅ御手擢舳ふく,
      ｋｅｙまよほふつえれふ目名 = _ref.ｋｅｙまよほふつえれふ目名,
      ｄｅｓｃｒｉｐｔｉｏｎ留都列へくこ = _ref.ｄｅｓｃｒｉｐｔｉｏｎ留都列へくこ,
      ｄｅｆａｕｌｔ阿毛課都ろ = _ref.ｄｅｆａｕｌｔ阿毛課都ろ;

  var ｈｔｍｌっに離無すそおひ阿 = '\n    <label for="' + ｎａｍｅ御手擢舳ふく + '">\n      <input\n        type="checkbox"\n        id="' + ｎａｍｅ御手擢舳ふく + '"\n        name="' + ｎａｍｅ御手擢舳ふく + '"\n        \uFF56\uFF41\uFF4C\uFF55\uFF45\u4ED6\u9B54\u304F\u3078\u3066\u308D\u3042\u3072\u91CE\u5FA1="' + ｋｅｙまよほふつえれふ目名 + '"\n        ' + (ｄｅｆａｕｌｔ阿毛課都ろ ? 'checked' : '') + '\n      >\n      <span\n        class="\uFF4C\uFF41\uFF42\uFF45\uFF4C\u3083\u308B\u3081\u8B5C\u6C0F\u30D2\u30D5\u30E9\u30C6\u30B1\u7D75"\n        \uFF4B\uFF45\uFF59\u307E\u3088\u307B\u3075\u3064\u3048\u308C\u3075\u76EE\u540D="' + ｄｅｓｃｒｉｐｔｉｏｎ留都列へくこ + '"\n      ></span>\n    </label>\n    <br>\n  ';
  document.getElementById('ｌａｂｅｌｓしたむっのややく').innerHTML += ｈｔｍｌっに離無すそおひ阿;
});

var 氏野ちめせ列ｔｅｍｐｌａｔａｂｌｅ = document.querySelectorAll('[ｋｅｙまよほふつえれふ目名]');

function ｓｅｔＯｐｔｉｏｎｓ擢二瀬列留派() {
  氏野ちめせ列ｔｅｍｐｌａｔａｂｌｅ.forEach(function (露尾露課そてすゃムスメムレネｔ) {
    var ｋｅｙまよほふつえれふ目名 = 御日こらゆは擢みれａｅｓｔｈｅｔｉｃｓ.reverse(露尾露課そてすゃムスメムレネｔ.getAttribute('ｋｅｙまよほふつえれふ目名'));
    var ｐｒｅｔｔｙ根派スケケソけふはよ津 = 御日こらゆは擢みれａｅｓｔｈｅｔｉｃｓ(ｋｅｙまよほふつえれふ目名, ｏｐｔｉｏｎｓ目氏やつしろちんゅ);

    露尾露課そてすゃムスメムレネｔ.innerHTML = ｐｒｅｔｔｙ根派スケケソけふはよ津;
  });
}

ｓｅｔＯｐｔｉｏｎｓ擢二瀬列留派();

ｆｏｒｍめも以屋名.addEventListener('change', function (模舳派なうけｅ) {
  if (模舳派なうけｅ.target.tagName !== 'INPUT') {
    return;
  }
  var ｋｅｙまよほふつえれふ目名 = 御日こらゆは擢みれａｅｓｔｈｅｔｉｃｓ.reverse(模舳派なうけｅ.target.getAttribute('ｖａｌｕｅ他魔くへてろあひ野御'));

  ｏｐｔｉｏｎｓ目氏やつしろちんゅ[ｋｅｙまよほふつえれふ目名] = 模舳派なうけｅ.target.checked;

  ｓｅｔＯｐｔｉｏｎｓ擢二瀬列留派();
});

ｆｏｒｍめも以屋名.addEventListener('submit', function (模舳派なうけｅ) {
  模舳派なうけｅ.preventDefault();

  var ｕｇｌｙま遊遊巣区雲御派 = 模舳派なうけｅ.target['ん保留やｔｅｘｔ'].value;

  var 知他素て屋列御二課ｏｕｔｐｕｔ = document.getElementById('知他素て屋列御二課ｏｕｔｐｕｔ');

  知他素て屋列御二課ｏｕｔｐｕｔ.innerHTML = 御日こらゆは擢みれａｅｓｔｈｅｔｉｃｓ(ｕｇｌｙま遊遊巣区雲御派, ｏｐｔｉｏｎｓ目氏やつしろちんゅ);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var makeFullWidth = __webpack_require__(2);
var addJapanese = __webpack_require__(3);
var addFormat = __webpack_require__(7);
var addDecoration = __webpack_require__(8);

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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function makeFullwidth(input) {
  return input.replace(/[a-zA-Z0-9!\?\.'";:\]\[}{\)\(@#\$%\^&\*\-_=\+`~><]/g, function (c) {
    return String.fromCharCode(0xFEE0 + c.charCodeAt(0));
  }).replace(/ /g, '　');
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var lorem = __webpack_require__(4);

module.exports = function (_ref) {
  var string = _ref.string,
      random = _ref.random,
      count = _ref.count;

  var japanese = lorem({
    count: count || Math.floor(random() * 2 + 3),
    units: 'words',
    format: 'plain',
    random: random
  });

  if (random() < 0.8) {
    return string + japanese;
  }

  return japanese + string;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var generator = function generator() {
  var options = arguments.length ? arguments[0] : {},
      count = options.count || 1,
      units = options.units || 'sentences',
      sentenceLowerBound = options.sentenceLowerBound || 5,
      sentenceUpperBound = options.sentenceUpperBound || 15,
      paragraphLowerBound = options.paragraphLowerBound || 3,
      paragraphUpperBound = options.paragraphUpperBound || 7,
      format = options.format || 'plain',
      dictionary = options.dictionary || __webpack_require__(5),
      random = options.random || Math.random,
      suffix = options.suffix || __webpack_require__(6).EOL;

  units = simplePluralize(units.toLowerCase());

  var randomInteger = function randomInteger(min, max) {
    return Math.floor(random() * (max - min + 1) + min);
  };

  var pickOne = function pickOne(array) {
    return array[randomInteger(0, array.length - 1)];
  };

  var randomWord = function randomWord(dictionary) {
    var wordType = pickOne(dictionary.mixWeighting);
    var word = '';
    var types = ['', 'kanji', 'hiragana', 'katakana'];
    var length = pickOne(dictionary[types[wordType] + 'LengthWeighting']);
    for (var i = 0; i < length; ++i) {
      word += pickOne(dictionary[types[wordType]]);
    }
    return word;
  };

  var randomSentence = function randomSentence(dictionary, lowerBound, upperBound) {
    var sentence = '',
        bounds = { min: 0, max: randomInteger(lowerBound, upperBound) };

    while (bounds.min < bounds.max) {
      sentence = sentence + randomWord(dictionary);
      bounds.min = bounds.min + 1;
    }

    return sentence;
  };

  var randomParagraph = function randomParagraph(dictionary, lowerBound, upperBound, sentenceLowerBound, sentenceUpperBound) {
    var paragraph = '',
        bounds = { min: 0, max: randomInteger(lowerBound, upperBound) };

    while (bounds.min < bounds.max) {
      paragraph = paragraph + '。' + randomSentence(dictionary, sentenceLowerBound, sentenceUpperBound);
      bounds.min = bounds.min + 1;
    }

    if (paragraph.length) {
      paragraph = paragraph.slice(1);
      paragraph = paragraph + '。';
    }

    return paragraph;
  };

  var iter = 0,
      bounds = { min: 0, max: count },
      string = '',
      prefix = '',
      openingTag,
      closingTag;

  if (format == 'html') {
    openingTag = '<p>';
    closingTag = '</p>';
  }

  while (bounds.min < bounds.max) {
    switch (units.toLowerCase()) {
      case 'words':
        string = string + randomWord(dictionary);
        break;
      case 'sentences':
        string = string + '。' + randomSentence(dictionary, sentenceLowerBound, sentenceUpperBound);
        break;
      case 'paragraphs':
        var nextString = randomParagraph(dictionary, paragraphLowerBound, paragraphUpperBound, sentenceLowerBound, sentenceUpperBound);

        if (format == 'html') {
          nextString = openingTag + nextString + closingTag;
          if (bounds.min < bounds.max - 1) {
            nextString = nextString + suffix; // Each paragraph on a new line
          }
        } else if (bounds.min < bounds.max - 1) {
          nextString = nextString + suffix + suffix; // Double-up the EOL character to make distinct paragraphs, like carriage return
        }

        string = string + nextString;

        break;
    }

    bounds.min = bounds.min + 1;
  }

  if (string.length) {

    if (string.indexOf('。') == 0) {
      string = string.slice(1);
    }

    if (units == 'sentences') {
      string = string + '。';
    }
  }

  return string;
};

function simplePluralize(string) {
  if (string.indexOf('s', string.length - 1) === -1) {
    return string + 's';
  }
  return string;
}

module.exports = generator;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dictionary = {
  kanji: ["阿", "以", "鵜", "絵", "尾", "課", "樹", "区", "毛", "個", "差", "氏", "巣", "瀬", "素", "他", "知", "津", "手", "都", "名", "二", "擢", "根", "野", "派", "日", "譜", "舳", "保", "魔", "御", "無", "目", "模", "屋", "遊", "夜", "等", "離", "留", "列", "露", "雲"],
  kanjiLengthWeighting: [2, 2, 2, 2, 2, 2, 1, 1, 1, 3, 3, 4],
  hiragana: ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "ん", "っ", "ゃ", "ょ", "ゅ"],
  hiraganaLengthWeighting: [1, 1, 1, 1, 2, 2, 2, 3, 3, 4],
  katakana: ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ン", "ッ", "ャ", "ュ", "ョ", "ー"],
  katakanaLengthWeighting: [2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 6, 6, 7],
  // [1:kanji, 2:hiragana, 3:katakana]
  mixWeighting: [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3]
};

module.exports = dictionary;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.endianness = function () {
    return 'LE';
};

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname;
    } else return '';
};

exports.loadavg = function () {
    return [];
};

exports.uptime = function () {
    return 0;
};

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () {
    return [];
};

exports.type = function () {
    return 'Browser';
};

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces = exports.getNetworkInterfaces = function () {
    return {};
};

exports.arch = function () {
    return 'javascript';
};

exports.platform = function () {
    return 'browser';
};

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var formats = ['wav', 'raw', 'mp3', 'mp4', 'mid', 'wma'];

module.exports = function (_ref) {
  var string = _ref.string,
      random = _ref.random;
  return string + '.' + formats[Math.floor(random() * formats.length)];
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var decorators = ['™', '†', '‡'];

module.exports = function (_ref) {
  var string = _ref.string,
      random = _ref.random;
  return '' + string + decorators[Math.floor(random() * decorators.length)];
};

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map