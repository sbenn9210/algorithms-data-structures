var reverse = function (x) {
  if (Math.sign(x) === -1) {
    absX = Math.abs(x);
    absX = absX + "";
    console.log(absX.split("").reverse().join(""));
  } else {
    x = x + "";
    console.log(x.split("").reverse().join(""));
  }
};

var int = -321;

reverse(int);
