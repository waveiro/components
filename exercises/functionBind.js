function bindThis(fn, thisValue) {
  return function () {
    fn.call(thisValue);
  };
}
