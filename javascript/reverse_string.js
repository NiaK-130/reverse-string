function reverseString(str) {
  var reversed = "";
  for (var i = str.length -1; i >= 0; i--){
    reversed += str[i];
    
  }
  return reversed;

}

if (require.main === module) {
  // add your own tests in here
  console.log("hello").length()
  // console.log("Expecting: 'ih'");
  // console.log("=>", reverseString("hi"));

  // console.log("");

  // console.log("Expecting: 'ybabtac'");
  // console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution


  // iterate through each letter and want to print the
  // last letter first 
