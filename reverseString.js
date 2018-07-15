// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//function using built in JS functions


// function reverse(str) {
//   var splitString = str.split("")
//
//   var reverseString = splitString.reverse()
//
//   var joinString = reverseString.join("")
//
//   return joinString
//
// }

//function chaining built in functions

// function reverse(str) {
//   return str.split('').reverse().join('')
// }

// using a for loop to loop through the string
// function reverse(str) {
//   var reverseString = ''
//   for(var i = str.length - 1; i >= 0; i--) {
//     reverseString += str[i]
//   }
//   return reverseString;
// }

// using recursion

// function reverse(str) {
//   if(str === "")
//   return ""
//   else
//     return reverse(str.substr(1)) + str.charAt(0)
//
//
// }

//using new syntax

function reverse(str) {
  let reverseString = ""
  for (let character of str) {
    reverseString = character + reverseString
  }
  return reverseString
}

reverse("candy")



module.exports = reverse;
