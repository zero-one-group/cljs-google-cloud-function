var shadow$provide = {};
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.returnExports = factory();
  }
})(this, function() {
  var shadow$umd$export = null;
if("undefined"!==typeof Symbol){var a=Symbol;"object"!=typeof a||!a||a instanceof Array||a instanceof Object||Object.prototype.toString.call(a)};shadow$umd$export={home:require("firebase-functions").https.onRequest(function(c,b){return b.send("Clojurescript is sick!")})};return shadow$umd$export;
});