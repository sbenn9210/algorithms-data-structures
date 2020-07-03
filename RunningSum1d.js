var runningSum = function (nums) {
  var result = 0;
  var resultArr = [];
  for (var i = 0; i < nums.length; i++) {
    result = result + nums[i];
    resultArr.push(result);
  }
  return resultArr;
};

var arr = [1, 2, 3, 4];
runningSum(arr);
