"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useKeyboardEvent = void 0;

var _react = require("react");

const useKeyboardEvent = (keys, callback) => {
  (0, _react.useEffect)(() => {
    const keysArr = Array.isArray(keys) ? keys : [keys];

    const eventCallback = event => keysArr.includes(event.key) && callback();

    callback && window.addEventListener('keydown', eventCallback);
    return () => callback && window.removeEventListener('keydown', eventCallback);
  });
};

exports.useKeyboardEvent = useKeyboardEvent;