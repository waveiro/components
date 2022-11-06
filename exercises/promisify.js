function promisify(fn) {
  return function (...args) {
    return new Promise((resolve) => {
      function innerCallback(result) {
        resolve(result);
      }

      fn.apply(this, args.concat(innerCallback));
    });
  };
}

const callbackHellFunctionPromisified = promisify(callbackHellFunction);

callbackHellFunctionPromisified("param1", {}).then(() => {});
