// NUMBER 1
// write a function named isEven with one number as a parameter
// that returns a boolean value indicating whether the number is even

////////// YOUR CODE HERE //////////
function isEven(aNumber) {
  if (aNumber % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
///////////////////////////////////

// call isEven on some numbers
console.log(isEven(7));
console.log(isEven(8));
console.log(isEven(9));
console.log(isEven(10));

// NUMBER 2
// write a function named findMax that that takes an array of numbers as input
// and returns the maximum number from the array

////////// YOUR CODE HERE //////////
function findMax(anArray) {
  let maxIndex = 0;
  for (let index = 1; index < anArray.length; index++) {
    if (anArray[maxIndex] < anArray[index]) {
      maxIndex = index;
    }
  }
  return anArray[maxIndex];
}
///////////////////////////////////

console.log(findMax([5, 4, 6, 3]));
console.log(findMax([28, 40, 3, 2, 12]));

// NUMBER 3
// write a function named countOccurrences that takes fruitsArray as input and
// returns an object where each property is a fruit from the array and each
// value is the number of times that fruit occurs in the array

// i.e., for the following array, the returned object should be
// {"apple": 2, "pear": 1, "banana": 2, "orange": 1}
let fruitsArray = ["apple", "pear", "apple", "banana", "orange", "banana"];

////////// YOUR CODE HERE //////////
function countOccurrences(fruitArray) {
  let numbApples = 0;
  let numbPears = 0;
  let numbBanana = 0;
  let numbOrange = 0;
  numbApples = fruitArray.filter((aFruit) => aFruit === "apple").length;
  numbPears = fruitArray.filter((aFruit) => aFruit === "pear").length;
  numbBanana = fruitArray.filter((aFruit) => aFruit === "banana").length;
  numbOrange = fruitArray.filter((aFruit) => aFruit === "orange").length;
  let returnObject = {
    apple: numbApples,
    pear: numbPears,
    banana: numbBanana,
    orange: numbOrange,
  };
  return returnObject;
}
///////////////////////////////////

console.log(countOccurrences(fruitsArray));
