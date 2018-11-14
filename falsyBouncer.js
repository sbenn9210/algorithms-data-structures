// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  var falsyArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (Boolean(arr[i]) === true) {
      falsyArr.push(arr[i]);
    }
  }
  return falsyArr;
}

bouncer([7, "ate", "", false, 9]);

// 1. loop through array
// 2. If boolean === true return those values
// 3. return all the TRUE values
