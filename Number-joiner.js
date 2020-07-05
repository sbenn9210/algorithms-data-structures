// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'

function numberJoinerWhile(num1, num2) {
  let count = num1;
  let arr = [];
  while (count <= num2) {
    if (count == num2) {
      arr.push(count);
    } else {
      arr.push(count, "_");
    }

    count++;
  }
  console.log(arr.join(""));
}

numberJoinerWhile(1, 14);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.

function numberJoinerFor(num1, num2) {
  var arr = [];
  for (var i = num1; i <= num2; i++) {
    if (i == num2) {
      arr.push(i);
    } else {
      arr.push(i, "_");
    }
  }
  console.log(arr.join(""));
}

numberJoinerFor(1, 10);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3

function numberJoinerFancy(num1, num2, seperator) {
  let count = num1;
  let arr = [];
  while (count <= num2) {
    if (count == num2) {
      arr.push(count);
    } else {
      arr.push(count, seperator);
    }

    count++;
  }
  console.log(arr.join(""));
}
