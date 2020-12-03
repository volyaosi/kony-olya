// concat
String.prototype.concat = function () {
  let res = "" + this;
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res;
};

// lastIndexOf
String.prototype.lastIndexOf = function (
  searchValue,
  fromIndex = this.length - 1
) {
  let output = -1;
  let origin = "" + this;

  for (let i = fromIndex; i >= 0; i--) {
    if (origin[i] === searchValue) {
      output = i;
      break;
    }
  }
  return output;
};

//repeat
String.prototype.repeat = function (count) {
  let origin = "" + this;
  let output = "";

  if (count != count) {
    count = 0;
  }

  count = Math.floor(+count);

  if (count < 0 || count == Infinity || this == null) {
    throw new Error("inappropriate input");
  } else {
    for (let i = 0; i < count; i++) {
      output += origin;
    }
  }

  return output;
};

// includes
String.prototype.includes = function (searchString, position = 0) {
  let output = false;
  let origin = "" + this;

  if (!searchString) break;

  for (let i = position; i < origin.length; i++) {
    let subStrOrigin = "";
    for (let j = i; j < searchString.length; j++) {
      subStrOrigin += origin[j];
    }

    if (subStrOrigin === searchString) {
      output = true;
      break;
    }
  }
  return output;
};

//substr
String.prototype.substr = function (start, length = this.length) {
  let output = this.valueOf();
  let origin = "" + this;

  if (Number.isInteger(start) && !!origin) {
    output = "";

    if (start < origin.length && length > 0) {
      while (start < 0) {
        start = origin.length + start;
      }

      for (let i = start; i < start + length && i < origin.length; i++) {
        output += origin[i];
      }
    }
  }

  return output;
};

//substring
String.prototype.substring = function (indexA, indexB = this.length) {
  let output = "" + this;
  let origin = "" + this;

  if (Number.isInteger(indexA) && !!origin) {
    if (indexA < origin.length) {
      output =
        indexB > indexA ? getStr(indexA, indexB) : getStr(indexB, indexA);
    }
  }

  function getStr(start, end) {
    let str = "";
    start = start < 0 ? 0 : start;

    for (let i = start; i < end && i < origin.length; i++) {
      str += origin[i];
    }
    return str;
  }

  return output;
};
