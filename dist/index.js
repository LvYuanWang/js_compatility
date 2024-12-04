"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var A = /*#__PURE__*/(0, _createClass2.default)(function A() {
  (0, _classCallCheck2.default)(this, A);
  this.a = 1;
  this.b = 3;
}); // function Print() {
//   console.log(this.loginId);
// }
// const obj = {
//   loginId: "abc"
// };
// obj:: Print();
// const obj = {
//   foo: {
//     bar: {
//       baz: 42
//     }
//   }
// }
// const baz = obj?.foo?.bar?.baz; // 42
// const safe = obj?.qux?.baz; // undefined
// console.log(baz, safe);