"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _useKeyboardEvent = require("./useKeyboardEvent");

Object.keys(_useKeyboardEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useKeyboardEvent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useKeyboardEvent[key];
    }
  });
});