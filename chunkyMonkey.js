// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  var multiArr = []
  for (var i = 0; i <= arr.length; i++) {
    multiArr.push(arr.splice(0, size))
  }
  if (arr.length >= 1) {
    multiArr.push(arr)
  }
  return multiArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)

//1. loop arr 
//2. Push spliced arr into a new array according to size parameter
//3. if arr.length is greater or = 1 then push the contents of that arr into the new array 