/*eslint no-extend-native: ["error",{"exceptions": ["Number"]}] */
if (!Number.hasOwnProperty("thousand"))
  Number.prototype.thousand = function (decimal = 0) {
    const thousand = new Intl.NumberFormat(navigator.language);
    return thousand.format(this);
  };
