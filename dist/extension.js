"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/jsonrepair/lib/cjs/utils/JSONRepairError.js
var require_JSONRepairError = __commonJS({
  "node_modules/jsonrepair/lib/cjs/utils/JSONRepairError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.JSONRepairError = void 0;
    var JSONRepairError = class extends Error {
      constructor(message, position) {
        super(message + " at position " + position);
        this.position = position;
      }
    };
    exports2.JSONRepairError = JSONRepairError;
  }
});

// node_modules/jsonrepair/lib/cjs/utils/stringUtils.js
var require_stringUtils = __commonJS({
  "node_modules/jsonrepair/lib/cjs/utils/stringUtils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.codeZero = exports2.codeUppercaseF = exports2.codeUppercaseE = exports2.codeUppercaseA = exports2.codeTab = exports2.codeSpace = exports2.codeSlash = exports2.codeSemicolon = exports2.codeReturn = exports2.codeQuote = exports2.codePlus = exports2.codeOpeningBracket = exports2.codeOpeningBrace = exports2.codeOpenParenthesis = exports2.codeNine = exports2.codeNewline = exports2.codeMinus = exports2.codeLowercaseF = exports2.codeLowercaseE = exports2.codeLowercaseA = exports2.codeFormFeed = exports2.codeDoubleQuote = exports2.codeDot = exports2.codeComma = exports2.codeColon = exports2.codeClosingBracket = exports2.codeClosingBrace = exports2.codeCloseParenthesis = exports2.codeBackspace = exports2.codeBackslash = exports2.codeAsterisk = void 0;
    exports2.endsWithCommaOrNewline = endsWithCommaOrNewline;
    exports2.insertBeforeLastWhitespace = insertBeforeLastWhitespace;
    exports2.isControlCharacter = isControlCharacter;
    exports2.isDelimiter = isDelimiter;
    exports2.isDelimiterExceptSlash = isDelimiterExceptSlash;
    exports2.isDigit = isDigit;
    exports2.isDoubleQuote = isDoubleQuote;
    exports2.isDoubleQuoteLike = isDoubleQuoteLike;
    exports2.isFunctionName = isFunctionName;
    exports2.isHex = isHex;
    exports2.isQuote = isQuote;
    exports2.isSingleQuote = isSingleQuote;
    exports2.isSingleQuoteLike = isSingleQuoteLike;
    exports2.isSpecialWhitespace = isSpecialWhitespace;
    exports2.isStartOfValue = isStartOfValue;
    exports2.isValidStringCharacter = isValidStringCharacter;
    exports2.isWhitespace = isWhitespace;
    exports2.removeAtIndex = removeAtIndex;
    exports2.stripLastOccurrence = stripLastOccurrence;
    var codeBackslash = exports2.codeBackslash = 92;
    var codeSlash = exports2.codeSlash = 47;
    var codeAsterisk = exports2.codeAsterisk = 42;
    var codeOpeningBrace = exports2.codeOpeningBrace = 123;
    var codeClosingBrace = exports2.codeClosingBrace = 125;
    var codeOpeningBracket = exports2.codeOpeningBracket = 91;
    var codeClosingBracket = exports2.codeClosingBracket = 93;
    var codeOpenParenthesis = exports2.codeOpenParenthesis = 40;
    var codeCloseParenthesis = exports2.codeCloseParenthesis = 41;
    var codeSpace = exports2.codeSpace = 32;
    var codeNewline = exports2.codeNewline = 10;
    var codeTab = exports2.codeTab = 9;
    var codeReturn = exports2.codeReturn = 13;
    var codeBackspace = exports2.codeBackspace = 8;
    var codeFormFeed = exports2.codeFormFeed = 12;
    var codeDoubleQuote = exports2.codeDoubleQuote = 34;
    var codePlus = exports2.codePlus = 43;
    var codeMinus = exports2.codeMinus = 45;
    var codeQuote = exports2.codeQuote = 39;
    var codeZero = exports2.codeZero = 48;
    var codeNine = exports2.codeNine = 57;
    var codeComma = exports2.codeComma = 44;
    var codeDot = exports2.codeDot = 46;
    var codeColon = exports2.codeColon = 58;
    var codeSemicolon = exports2.codeSemicolon = 59;
    var codeUppercaseA = exports2.codeUppercaseA = 65;
    var codeLowercaseA = exports2.codeLowercaseA = 97;
    var codeUppercaseE = exports2.codeUppercaseE = 69;
    var codeLowercaseE = exports2.codeLowercaseE = 101;
    var codeUppercaseF = exports2.codeUppercaseF = 70;
    var codeLowercaseF = exports2.codeLowercaseF = 102;
    var codeNonBreakingSpace = 160;
    var codeEnQuad = 8192;
    var codeHairSpace = 8202;
    var codeNarrowNoBreakSpace = 8239;
    var codeMediumMathematicalSpace = 8287;
    var codeIdeographicSpace = 12288;
    var codeDoubleQuoteLeft = 8220;
    var codeDoubleQuoteRight = 8221;
    var codeQuoteLeft = 8216;
    var codeQuoteRight = 8217;
    var codeGraveAccent = 96;
    var codeAcuteAccent = 180;
    function isHex(code) {
      return code >= codeZero && code <= codeNine || code >= codeUppercaseA && code <= codeUppercaseF || code >= codeLowercaseA && code <= codeLowercaseF;
    }
    function isDigit(code) {
      return code >= codeZero && code <= codeNine;
    }
    function isValidStringCharacter(code) {
      return code >= 32 && code <= 1114111;
    }
    function isDelimiter(char) {
      return regexDelimiter.test(char);
    }
    var regexDelimiter = /^[,:[\]/{}()\n+]$/;
    function isDelimiterExceptSlash(char) {
      return isDelimiter(char) && char !== "/";
    }
    function isStartOfValue(char) {
      return regexStartOfValue.test(char) || char && isQuote(char.charCodeAt(0));
    }
    var regexStartOfValue = /^[[{\w-]$/;
    function isControlCharacter(code) {
      return code === codeNewline || code === codeReturn || code === codeTab || code === codeBackspace || code === codeFormFeed;
    }
    function isWhitespace(code) {
      return code === codeSpace || code === codeNewline || code === codeTab || code === codeReturn;
    }
    function isSpecialWhitespace(code) {
      return code === codeNonBreakingSpace || code >= codeEnQuad && code <= codeHairSpace || code === codeNarrowNoBreakSpace || code === codeMediumMathematicalSpace || code === codeIdeographicSpace;
    }
    function isQuote(code) {
      return isDoubleQuoteLike(code) || isSingleQuoteLike(code);
    }
    function isDoubleQuoteLike(code) {
      return code === codeDoubleQuote || code === codeDoubleQuoteLeft || code === codeDoubleQuoteRight;
    }
    function isDoubleQuote(code) {
      return code === codeDoubleQuote;
    }
    function isSingleQuoteLike(code) {
      return code === codeQuote || code === codeQuoteLeft || code === codeQuoteRight || code === codeGraveAccent || code === codeAcuteAccent;
    }
    function isSingleQuote(code) {
      return code === codeQuote;
    }
    function stripLastOccurrence(text, textToStrip) {
      let stripRemainingText = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      const index = text.lastIndexOf(textToStrip);
      return index !== -1 ? text.substring(0, index) + (stripRemainingText ? "" : text.substring(index + 1)) : text;
    }
    function insertBeforeLastWhitespace(text, textToInsert) {
      let index = text.length;
      if (!isWhitespace(text.charCodeAt(index - 1))) {
        return text + textToInsert;
      }
      while (isWhitespace(text.charCodeAt(index - 1))) {
        index--;
      }
      return text.substring(0, index) + textToInsert + text.substring(index);
    }
    function removeAtIndex(text, start, count) {
      return text.substring(0, start) + text.substring(start + count);
    }
    function endsWithCommaOrNewline(text) {
      return /[,\n][ \t\r]*$/.test(text);
    }
    function isFunctionName(text) {
      return /^\w+$/.test(text);
    }
  }
});

// node_modules/jsonrepair/lib/cjs/regular/jsonrepair.js
var require_jsonrepair = __commonJS({
  "node_modules/jsonrepair/lib/cjs/regular/jsonrepair.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.jsonrepair = jsonrepair4;
    var _JSONRepairError = require_JSONRepairError();
    var _stringUtils = require_stringUtils();
    var controlCharacters = {
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "	": "\\t"
    };
    var escapeCharacters = {
      '"': '"',
      "\\": "\\",
      "/": "/",
      b: "\b",
      f: "\f",
      n: "\n",
      r: "\r",
      t: "	"
      // note that \u is handled separately in parseString()
    };
    function jsonrepair4(text) {
      let i = 0;
      let output = "";
      const processed = parseValue();
      if (!processed) {
        throwUnexpectedEnd();
      }
      const processedComma = parseCharacter(_stringUtils.codeComma);
      if (processedComma) {
        parseWhitespaceAndSkipComments();
      }
      if ((0, _stringUtils.isStartOfValue)(text[i]) && (0, _stringUtils.endsWithCommaOrNewline)(output)) {
        if (!processedComma) {
          output = (0, _stringUtils.insertBeforeLastWhitespace)(output, ",");
        }
        parseNewlineDelimitedJSON();
      } else if (processedComma) {
        output = (0, _stringUtils.stripLastOccurrence)(output, ",");
      }
      while (text.charCodeAt(i) === _stringUtils.codeClosingBrace || text.charCodeAt(i) === _stringUtils.codeClosingBracket) {
        i++;
        parseWhitespaceAndSkipComments();
      }
      if (i >= text.length) {
        return output;
      }
      throwUnexpectedCharacter();
      function parseValue() {
        parseWhitespaceAndSkipComments();
        const processed2 = parseObject() || parseArray() || parseString() || parseNumber() || parseKeywords() || parseUnquotedString();
        parseWhitespaceAndSkipComments();
        return processed2;
      }
      function parseWhitespaceAndSkipComments() {
        const start = i;
        let changed = parseWhitespace();
        do {
          changed = parseComment();
          if (changed) {
            changed = parseWhitespace();
          }
        } while (changed);
        return i > start;
      }
      function parseWhitespace() {
        let whitespace = "";
        let normal;
        while ((normal = (0, _stringUtils.isWhitespace)(text.charCodeAt(i))) || (0, _stringUtils.isSpecialWhitespace)(text.charCodeAt(i))) {
          if (normal) {
            whitespace += text[i];
          } else {
            whitespace += " ";
          }
          i++;
        }
        if (whitespace.length > 0) {
          output += whitespace;
          return true;
        }
        return false;
      }
      function parseComment() {
        if (text.charCodeAt(i) === _stringUtils.codeSlash && text.charCodeAt(i + 1) === _stringUtils.codeAsterisk) {
          while (i < text.length && !atEndOfBlockComment(text, i)) {
            i++;
          }
          i += 2;
          return true;
        }
        if (text.charCodeAt(i) === _stringUtils.codeSlash && text.charCodeAt(i + 1) === _stringUtils.codeSlash) {
          while (i < text.length && text.charCodeAt(i) !== _stringUtils.codeNewline) {
            i++;
          }
          return true;
        }
        return false;
      }
      function parseCharacter(code) {
        if (text.charCodeAt(i) === code) {
          output += text[i];
          i++;
          return true;
        }
        return false;
      }
      function skipCharacter(code) {
        if (text.charCodeAt(i) === code) {
          i++;
          return true;
        }
        return false;
      }
      function skipEscapeCharacter() {
        return skipCharacter(_stringUtils.codeBackslash);
      }
      function skipEllipsis() {
        parseWhitespaceAndSkipComments();
        if (text.charCodeAt(i) === _stringUtils.codeDot && text.charCodeAt(i + 1) === _stringUtils.codeDot && text.charCodeAt(i + 2) === _stringUtils.codeDot) {
          i += 3;
          parseWhitespaceAndSkipComments();
          skipCharacter(_stringUtils.codeComma);
          return true;
        }
        return false;
      }
      function parseObject() {
        if (text.charCodeAt(i) === _stringUtils.codeOpeningBrace) {
          output += "{";
          i++;
          parseWhitespaceAndSkipComments();
          if (skipCharacter(_stringUtils.codeComma)) {
            parseWhitespaceAndSkipComments();
          }
          let initial = true;
          while (i < text.length && text.charCodeAt(i) !== _stringUtils.codeClosingBrace) {
            let processedComma2;
            if (!initial) {
              processedComma2 = parseCharacter(_stringUtils.codeComma);
              if (!processedComma2) {
                output = (0, _stringUtils.insertBeforeLastWhitespace)(output, ",");
              }
              parseWhitespaceAndSkipComments();
            } else {
              processedComma2 = true;
              initial = false;
            }
            skipEllipsis();
            const processedKey = parseString() || parseUnquotedString();
            if (!processedKey) {
              if (text.charCodeAt(i) === _stringUtils.codeClosingBrace || text.charCodeAt(i) === _stringUtils.codeOpeningBrace || text.charCodeAt(i) === _stringUtils.codeClosingBracket || text.charCodeAt(i) === _stringUtils.codeOpeningBracket || text[i] === void 0) {
                output = (0, _stringUtils.stripLastOccurrence)(output, ",");
              } else {
                throwObjectKeyExpected();
              }
              break;
            }
            parseWhitespaceAndSkipComments();
            const processedColon = parseCharacter(_stringUtils.codeColon);
            const truncatedText = i >= text.length;
            if (!processedColon) {
              if ((0, _stringUtils.isStartOfValue)(text[i]) || truncatedText) {
                output = (0, _stringUtils.insertBeforeLastWhitespace)(output, ":");
              } else {
                throwColonExpected();
              }
            }
            const processedValue = parseValue();
            if (!processedValue) {
              if (processedColon || truncatedText) {
                output += "null";
              } else {
                throwColonExpected();
              }
            }
          }
          if (text.charCodeAt(i) === _stringUtils.codeClosingBrace) {
            output += "}";
            i++;
          } else {
            output = (0, _stringUtils.insertBeforeLastWhitespace)(output, "}");
          }
          return true;
        }
        return false;
      }
      function parseArray() {
        if (text.charCodeAt(i) === _stringUtils.codeOpeningBracket) {
          output += "[";
          i++;
          parseWhitespaceAndSkipComments();
          if (skipCharacter(_stringUtils.codeComma)) {
            parseWhitespaceAndSkipComments();
          }
          let initial = true;
          while (i < text.length && text.charCodeAt(i) !== _stringUtils.codeClosingBracket) {
            if (!initial) {
              const processedComma2 = parseCharacter(_stringUtils.codeComma);
              if (!processedComma2) {
                output = (0, _stringUtils.insertBeforeLastWhitespace)(output, ",");
              }
            } else {
              initial = false;
            }
            skipEllipsis();
            const processedValue = parseValue();
            if (!processedValue) {
              output = (0, _stringUtils.stripLastOccurrence)(output, ",");
              break;
            }
          }
          if (text.charCodeAt(i) === _stringUtils.codeClosingBracket) {
            output += "]";
            i++;
          } else {
            output = (0, _stringUtils.insertBeforeLastWhitespace)(output, "]");
          }
          return true;
        }
        return false;
      }
      function parseNewlineDelimitedJSON() {
        let initial = true;
        let processedValue = true;
        while (processedValue) {
          if (!initial) {
            const processedComma2 = parseCharacter(_stringUtils.codeComma);
            if (!processedComma2) {
              output = (0, _stringUtils.insertBeforeLastWhitespace)(output, ",");
            }
          } else {
            initial = false;
          }
          processedValue = parseValue();
        }
        if (!processedValue) {
          output = (0, _stringUtils.stripLastOccurrence)(output, ",");
        }
        output = "[\n".concat(output, "\n]");
      }
      function parseString() {
        let stopAtDelimiter = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        let skipEscapeChars = text.charCodeAt(i) === _stringUtils.codeBackslash;
        if (skipEscapeChars) {
          i++;
          skipEscapeChars = true;
        }
        if ((0, _stringUtils.isQuote)(text.charCodeAt(i))) {
          const isEndQuote = (0, _stringUtils.isDoubleQuote)(text.charCodeAt(i)) ? _stringUtils.isDoubleQuote : (0, _stringUtils.isSingleQuote)(text.charCodeAt(i)) ? _stringUtils.isSingleQuote : (0, _stringUtils.isSingleQuoteLike)(text.charCodeAt(i)) ? _stringUtils.isSingleQuoteLike : _stringUtils.isDoubleQuoteLike;
          const iBefore = i;
          const oBefore = output.length;
          let str = '"';
          i++;
          while (true) {
            if (i >= text.length) {
              const iPrev = prevNonWhitespaceIndex(i - 1);
              if (!stopAtDelimiter && (0, _stringUtils.isDelimiter)(text.charAt(iPrev))) {
                i = iBefore;
                output = output.substring(0, oBefore);
                return parseString(true);
              }
              str = (0, _stringUtils.insertBeforeLastWhitespace)(str, '"');
              output += str;
              return true;
            } else if (isEndQuote(text.charCodeAt(i))) {
              const iQuote = i;
              const oQuote = str.length;
              str += '"';
              i++;
              output += str;
              parseWhitespaceAndSkipComments();
              if (stopAtDelimiter || i >= text.length || (0, _stringUtils.isDelimiter)(text.charAt(i)) || (0, _stringUtils.isQuote)(text.charCodeAt(i)) || (0, _stringUtils.isDigit)(text.charCodeAt(i))) {
                parseConcatenatedString();
                return true;
              }
              if ((0, _stringUtils.isDelimiter)(text.charAt(prevNonWhitespaceIndex(iQuote - 1)))) {
                i = iBefore;
                output = output.substring(0, oBefore);
                return parseString(true);
              }
              output = output.substring(0, oBefore);
              i = iQuote + 1;
              str = str.substring(0, oQuote) + "\\" + str.substring(oQuote);
            } else if (stopAtDelimiter && (0, _stringUtils.isDelimiter)(text[i])) {
              str = (0, _stringUtils.insertBeforeLastWhitespace)(str, '"');
              output += str;
              parseConcatenatedString();
              return true;
            } else if (text.charCodeAt(i) === _stringUtils.codeBackslash) {
              const char = text.charAt(i + 1);
              const escapeChar = escapeCharacters[char];
              if (escapeChar !== void 0) {
                str += text.slice(i, i + 2);
                i += 2;
              } else if (char === "u") {
                let j = 2;
                while (j < 6 && (0, _stringUtils.isHex)(text.charCodeAt(i + j))) {
                  j++;
                }
                if (j === 6) {
                  str += text.slice(i, i + 6);
                  i += 6;
                } else if (i + j >= text.length) {
                  i = text.length;
                } else {
                  throwInvalidUnicodeCharacter();
                }
              } else {
                str += char;
                i += 2;
              }
            } else {
              const char = text.charAt(i);
              const code = text.charCodeAt(i);
              if (code === _stringUtils.codeDoubleQuote && text.charCodeAt(i - 1) !== _stringUtils.codeBackslash) {
                str += "\\" + char;
                i++;
              } else if ((0, _stringUtils.isControlCharacter)(code)) {
                str += controlCharacters[char];
                i++;
              } else {
                if (!(0, _stringUtils.isValidStringCharacter)(code)) {
                  throwInvalidCharacter(char);
                }
                str += char;
                i++;
              }
            }
            if (skipEscapeChars) {
              skipEscapeCharacter();
            }
          }
        }
        return false;
      }
      function parseConcatenatedString() {
        let processed2 = false;
        parseWhitespaceAndSkipComments();
        while (text.charCodeAt(i) === _stringUtils.codePlus) {
          processed2 = true;
          i++;
          parseWhitespaceAndSkipComments();
          output = (0, _stringUtils.stripLastOccurrence)(output, '"', true);
          const start = output.length;
          const parsedStr = parseString();
          if (parsedStr) {
            output = (0, _stringUtils.removeAtIndex)(output, start, 1);
          } else {
            output = (0, _stringUtils.insertBeforeLastWhitespace)(output, '"');
          }
        }
        return processed2;
      }
      function parseNumber() {
        const start = i;
        if (text.charCodeAt(i) === _stringUtils.codeMinus) {
          i++;
          if (atEndOfNumber()) {
            repairNumberEndingWithNumericSymbol(start);
            return true;
          }
          if (!(0, _stringUtils.isDigit)(text.charCodeAt(i))) {
            i = start;
            return false;
          }
        }
        while ((0, _stringUtils.isDigit)(text.charCodeAt(i))) {
          i++;
        }
        if (text.charCodeAt(i) === _stringUtils.codeDot) {
          i++;
          if (atEndOfNumber()) {
            repairNumberEndingWithNumericSymbol(start);
            return true;
          }
          if (!(0, _stringUtils.isDigit)(text.charCodeAt(i))) {
            i = start;
            return false;
          }
          while ((0, _stringUtils.isDigit)(text.charCodeAt(i))) {
            i++;
          }
        }
        if (text.charCodeAt(i) === _stringUtils.codeLowercaseE || text.charCodeAt(i) === _stringUtils.codeUppercaseE) {
          i++;
          if (text.charCodeAt(i) === _stringUtils.codeMinus || text.charCodeAt(i) === _stringUtils.codePlus) {
            i++;
          }
          if (atEndOfNumber()) {
            repairNumberEndingWithNumericSymbol(start);
            return true;
          }
          if (!(0, _stringUtils.isDigit)(text.charCodeAt(i))) {
            i = start;
            return false;
          }
          while ((0, _stringUtils.isDigit)(text.charCodeAt(i))) {
            i++;
          }
        }
        if (!atEndOfNumber()) {
          i = start;
          return false;
        }
        if (i > start) {
          const num = text.slice(start, i);
          const hasInvalidLeadingZero = /^0\d/.test(num);
          output += hasInvalidLeadingZero ? '"'.concat(num, '"') : num;
          return true;
        }
        return false;
      }
      function parseKeywords() {
        return parseKeyword("true", "true") || parseKeyword("false", "false") || parseKeyword("null", "null") || // repair Python keywords True, False, None
        parseKeyword("True", "true") || parseKeyword("False", "false") || parseKeyword("None", "null");
      }
      function parseKeyword(name, value) {
        if (text.slice(i, i + name.length) === name) {
          output += value;
          i += name.length;
          return true;
        }
        return false;
      }
      function parseUnquotedString() {
        const start = i;
        while (i < text.length && !(0, _stringUtils.isDelimiterExceptSlash)(text[i]) && !(0, _stringUtils.isQuote)(text.charCodeAt(i))) {
          i++;
        }
        if (i > start) {
          if (text.charCodeAt(i) === _stringUtils.codeOpenParenthesis && (0, _stringUtils.isFunctionName)(text.slice(start, i).trim())) {
            i++;
            parseValue();
            if (text.charCodeAt(i) === _stringUtils.codeCloseParenthesis) {
              i++;
              if (text.charCodeAt(i) === _stringUtils.codeSemicolon) {
                i++;
              }
            }
            return true;
          } else {
            while ((0, _stringUtils.isWhitespace)(text.charCodeAt(i - 1)) && i > 0) {
              i--;
            }
            const symbol = text.slice(start, i);
            output += symbol === "undefined" ? "null" : JSON.stringify(symbol);
            if (text.charCodeAt(i) === _stringUtils.codeDoubleQuote) {
              i++;
            }
            return true;
          }
        }
      }
      function prevNonWhitespaceIndex(start) {
        let prev = start;
        while (prev > 0 && (0, _stringUtils.isWhitespace)(text.charCodeAt(prev))) {
          prev--;
        }
        return prev;
      }
      function atEndOfNumber() {
        return i >= text.length || (0, _stringUtils.isDelimiter)(text[i]) || (0, _stringUtils.isWhitespace)(text.charCodeAt(i));
      }
      function repairNumberEndingWithNumericSymbol(start) {
        output += text.slice(start, i) + "0";
      }
      function throwInvalidCharacter(char) {
        throw new _JSONRepairError.JSONRepairError("Invalid character " + JSON.stringify(char), i);
      }
      function throwUnexpectedCharacter() {
        throw new _JSONRepairError.JSONRepairError("Unexpected character " + JSON.stringify(text[i]), i);
      }
      function throwUnexpectedEnd() {
        throw new _JSONRepairError.JSONRepairError("Unexpected end of json string", text.length);
      }
      function throwObjectKeyExpected() {
        throw new _JSONRepairError.JSONRepairError("Object key expected", i);
      }
      function throwColonExpected() {
        throw new _JSONRepairError.JSONRepairError("Colon expected", i);
      }
      function throwInvalidUnicodeCharacter() {
        const chars = text.slice(i, i + 6);
        throw new _JSONRepairError.JSONRepairError('Invalid unicode character "'.concat(chars, '"'), i);
      }
    }
    function atEndOfBlockComment(text, i) {
      return text[i] === "*" && text[i + 1] === "/";
    }
  }
});

// node_modules/jsonrepair/lib/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/jsonrepair/lib/cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "JSONRepairError", {
      enumerable: true,
      get: function() {
        return _JSONRepairError.JSONRepairError;
      }
    });
    Object.defineProperty(exports2, "jsonrepair", {
      enumerable: true,
      get: function() {
        return _jsonrepair.jsonrepair;
      }
    });
    var _jsonrepair = require_jsonrepair();
    var _JSONRepairError = require_JSONRepairError();
  }
});

// src/extension.ts
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);
var vscode5 = __toESM(require("vscode"));

// src/utils/try-merge-all-json.ts
var import_path = __toESM(require("path"));
var vscode = __toESM(require("vscode"));

// src/utils/remove-merge-words.ts
var removeMergeWords = (content) => {
  return content.replace(/<<<<<<<.+/g, "").replace(/>>>>>>>.+/g, "").replace(/=======.*/g, "");
};
var remove_merge_words_default = removeMergeWords;

// src/utils/check-merge-words.ts
var checkMergeWords = (content) => {
  return /<<<<<<<.+/.test(content) && /=======.*/.test(content) && />>>>>>>.+/.test(content);
};
var check_merge_words_default = checkMergeWords;

// src/utils/try-merge-all-json.ts
var { jsonrepair } = require_cjs();
var tryMergeAllJSON = async () => {
  const document = vscode.window.activeTextEditor?.document;
  if (!document) {
    return;
  }
  const workspace3 = vscode.workspace.getWorkspaceFolder(document.uri);
  const quickPick = vscode.window.createQuickPick();
  quickPick.placeholder = "\u8F93\u5165\u76EE\u6807\u6587\u4EF6\u5939\u8DEF\u5F84";
  quickPick.title = "\u5408\u5E76\u6240\u6709\u542B\u6709\u4EE3\u7801\u51B2\u7A81\u7684JSON\u6587\u4EF6";
  quickPick.onDidChangeValue(async (value) => {
    if (value) {
      const folders = await vscode.workspace.findFiles(`**/${value}*/**`, "**/node_modules/**", 10);
      const folderPathSet = /* @__PURE__ */ new Set();
      for (const folder of folders) {
        const relativePath = import_path.default.relative(workspace3.uri.fsPath, import_path.default.dirname(folder.fsPath));
        if (!relativePath) {
          continue;
        }
        let folderPath = "";
        for (const item of relativePath.split("/")) {
          folderPath = folderPath ? `${folderPath}/${item}` : item;
          folderPathSet.add(folderPath);
        }
      }
      const uniqueFolderPaths = Array.from(folderPathSet);
      uniqueFolderPaths.sort((a, b) => a.length - b.length);
      folderPathSet.clear();
      quickPick.items = uniqueFolderPaths.map((folderPath) => ({ label: `${folderPath}/` }));
    } else {
      quickPick.items = [];
    }
  });
  quickPick.onDidAccept(async () => {
    const selectedFolder = quickPick.selectedItems[0];
    if (selectedFolder) {
      const directory = import_path.default.join(workspace3.uri.fsPath, selectedFolder.label);
      const successFiles = /* @__PURE__ */ new Map([]);
      try {
        const collectFiles = async (_path) => {
          const directory2 = vscode.Uri.parse(_path);
          const files = await vscode.workspace.fs.readDirectory(directory2);
          await Promise.all(files.map(async ([filePath, FileType]) => {
            if (FileType === 1) {
              if (import_path.default.extname(filePath).toLowerCase() !== ".json") {
                return;
              }
              const file = vscode.Uri.joinPath(directory2, filePath);
              const fileUint8 = await vscode.workspace.fs.readFile(file);
              const content = fileUint8.toString();
              if (!check_merge_words_default(content)) {
                return;
              }
              const repairedJSONData = jsonrepair(remove_merge_words_default(content));
              const parseJSONData = JSON.parse(repairedJSONData);
              const newJSONData = JSON.stringify(parseJSONData, void 0, 2);
              const newContent = Buffer.from(newJSONData, "utf-8");
              successFiles.set(file, newContent);
            }
            if (FileType === 2) {
              await collectFiles(vscode.Uri.joinPath(directory2, filePath).fsPath);
            }
          }));
        };
        await collectFiles(directory);
        await Promise.all(Array.from(successFiles).map(
          ([url, content]) => vscode.workspace.fs.writeFile(url, content)
        ));
      } catch (error) {
        vscode.window.showErrorMessage(`JSON Merge Error: ${error.message}`);
      } finally {
        successFiles.clear();
      }
    }
    quickPick.hide();
  });
  quickPick.onDidHide(() => quickPick.dispose());
  quickPick.show();
};
var try_merge_all_json_default = tryMergeAllJSON;

// src/utils/try-merge-json.ts
var vscode2 = __toESM(require("vscode"));
var { jsonrepair: jsonrepair2 } = require_cjs();
var tryMergeJSON = async () => {
  const activeTextEditor = vscode2.window.activeTextEditor;
  if (!activeTextEditor) {
    return;
  }
  try {
    await activeTextEditor.edit((editBuilder) => {
      const document = activeTextEditor.document;
      const content = document.getText();
      const repairedJSONData = jsonrepair2(remove_merge_words_default(content));
      const parseJSONData = JSON.parse(repairedJSONData);
      const newJSONData = JSON.stringify(parseJSONData, void 0, 2);
      const entireRange = new vscode2.Range(
        document.positionAt(0),
        document.positionAt(document.getText().length)
      );
      editBuilder.replace(entireRange, newJSONData);
    });
  } catch (error) {
    vscode2.window.showErrorMessage(`JSON Repair Error: ${error.message}`);
  }
};
var try_merge_json_default = tryMergeJSON;

// src/utils/try-repair-json.ts
var vscode3 = __toESM(require("vscode"));
var { jsonrepair: jsonrepair3 } = require_cjs();
var tryRepairJSON = async () => {
  const activeTextEditor = vscode3.window.activeTextEditor;
  if (!activeTextEditor) {
    return;
  }
  try {
    await activeTextEditor.edit((editBuilder) => {
      const document = activeTextEditor.document;
      const content = document.getText();
      const repairedJSONData = jsonrepair3(content);
      const parseJSONData = JSON.parse(repairedJSONData);
      const newJSONData = JSON.stringify(parseJSONData, void 0, 2);
      const entireRange = new vscode3.Range(
        document.positionAt(0),
        document.positionAt(document.getText().length)
      );
      editBuilder.replace(entireRange, newJSONData);
    });
  } catch (error) {
    vscode3.window.showErrorMessage(`JSON Repair Error: ${error.message}`);
  }
};
var try_repair_json_default = tryRepairJSON;

// src/utils/try-sort-json-key.ts
var vscode4 = __toESM(require("vscode"));

// src/utils/sort-object-key.ts
var sortObjectKey = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(sortObjectKey);
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).sort((key1, key2) => {
      if (typeof obj[key1] === "object" && typeof obj[key2] !== "object") {
        return 1;
      }
      if (typeof obj[key1] !== "object" && typeof obj[key2] === "object") {
        return -1;
      }
      return key2 > key1 ? -1 : 1;
    }).reduce((result, key) => {
      result[key] = sortObjectKey(obj[key]);
      return result;
    }, {});
  }
  return obj;
};
var sort_object_key_default = sortObjectKey;

// src/utils/try-sort-json-key.ts
var trySortJSONKey = async () => {
  const activeTextEditor = vscode4.window.activeTextEditor;
  if (!activeTextEditor) {
    return;
  }
  try {
    await activeTextEditor.edit((editBuilder) => {
      const document = activeTextEditor.document;
      const content = document.getText();
      const parseJSONData = JSON.parse(content);
      const newJSONData = JSON.stringify(sort_object_key_default(parseJSONData), void 0, 2);
      const entireRange = new vscode4.Range(
        document.positionAt(0),
        document.positionAt(document.getText().length)
      );
      editBuilder.replace(entireRange, newJSONData);
    });
  } catch (error) {
    vscode4.window.showErrorMessage(`JSON Repair Error: ${error.message}`);
  }
};
var try_sort_json_key_default = trySortJSONKey;

// src/extension.ts
var NAMESPACE = "vscode-json-tools";
var $ = (key) => `${NAMESPACE}.${key}`;
var commands2 = [
  ["tryMergeJSON", try_merge_json_default],
  ["tryMergeAllJSON", try_merge_all_json_default],
  ["tryRepairJSON", try_repair_json_default],
  ["trySortJSONKey", try_sort_json_key_default]
];
var setExtensionContent = (editor) => {
  const document = editor?.document;
  if (!document || document.languageId !== "json") {
    return;
  }
  ;
  const content = document.getText();
  try {
    JSON.parse(content);
    vscode5.commands.executeCommand("setContext", $("isValidJSONFile"), true);
    vscode5.commands.executeCommand("setContext", $("isNeedMergeJSONFile"), false);
  } catch {
    vscode5.commands.executeCommand("setContext", $("isValidJSONFile"), false);
    vscode5.commands.executeCommand("setContext", $("isNeedMergeJSONFile"), check_merge_words_default(content));
  }
};
function activate(context) {
  const subscriptions = commands2.map((command) => vscode5.commands.registerCommand($(command[0]), command[1]));
  context.subscriptions.push(...subscriptions);
  vscode5.window.onDidChangeActiveTextEditor(setExtensionContent, null, context.subscriptions);
  vscode5.workspace.onDidChangeTextDocument((event) => {
    const editor = vscode5.window.activeTextEditor;
    if (editor && event.document === editor.document) {
      setExtensionContent(editor);
    }
  }, null, context.subscriptions);
  vscode5.workspace.onDidOpenTextDocument((document) => {
    const editor = vscode5.window.activeTextEditor;
    if (editor && document === editor.document) {
      setExtensionContent(editor);
    }
  }, null, context.subscriptions);
  if (vscode5.window.activeTextEditor) {
    setExtensionContent(vscode5.window.activeTextEditor);
  }
}
function deactivate() {
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
//# sourceMappingURL=extension.js.map
