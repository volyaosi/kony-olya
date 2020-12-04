// https://docs.google.com/document/d/e/2PACX-1vQlY1cqzkJB-mMrRX6ds1KTKaU4Acq28eaOmMF1V2QNPXxF9q-6F4P2ek6A_V_-PiY7yJ6xA4NqPn1v/pub

// Task 1
// функции-аналоги методов массивов используя только свойства массивов: pop, push, shift, unshift, concat

// pop
Array.prototype.pop = function () {
  if (this.length === 0) {
    return undefined;
  }

  let output = this[this.length - 1];
  this.length = this.length - 1;

  return output;
};


// push
Array.prototype.push = function (...args) {
  const arr = this;
  const initLength = arr.length;

  for (let i = 0; i < args.length; i++) {
    arr[i + initLength] = args[i];
  }

  return arr.length;
};


// shift
Array.prototype.shift = function () {
  const arr = this;

  let output = arr.length === 0 ? undefined : arr[0];

  if (arr.length > 0) {
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }

    arr.length = arr.length - 1;
  }

  return output;
};


// unshift
Array.prototype.unshift = function (...args) {
  const arr = this;
  const initLen = arr.length - 1;

  if (args.length > 0) {
    for (let i = initLen + args.length; i >= 0; i--) {
      //reassign values from initial arr to their new position
      for (let j = initLen; j >= 0; j--, i--) {
        arr[i] = arr[j];
      }

      //assign new elemnts to the first positions of given arr
      for (let k = args.length - 1; k >= 0; k--, i--) {
        arr[i] = args[k];
      }
    }
  }

  return arr.length;
};
