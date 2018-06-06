/*
You are given an array of numbers, print the odd numbers, doubled and reversed ones.
*/
function print(array) {
    console.log(
      array.filter((element, index) => element % index === 1)
      .map(a => a * 2)
      .reverse()
      .join(' '))
      
   }
   print([10,15,20,25])