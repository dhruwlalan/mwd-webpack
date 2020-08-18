"use strict";

require("core-js/modules/es.array.flat");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.unscopables.flat");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("regenerator-runtime/runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ES2015 ~ ES6
var arr = ['react', 'angular', 'vue']; // ES2016 ~ ES7

if (arr.includes('react')) {
  console.log('Can use React');
} // ES2017 ~ ES8


function getContent() {
  return _getContent.apply(this, arguments);
} // ES2018 ~ ES9


function _getContent() {
  _getContent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var text;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return loadExternalContent();

          case 2:
            text = _context.sent;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getContent.apply(this, arguments);
}

var best = function best() {
  for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {
    arr[_key] = arguments[_key];
  }

  console.log(arr);
}; // ES2019 ~ ES10


var newarr = arr.flat(); // ES2020 ~ ES11

function greet(input) {
  return input !== null && input !== void 0 ? input : "Hello world";
}
