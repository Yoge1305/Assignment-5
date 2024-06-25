//1. Write a function that takes an array of numbers and returns the sum of all elements

function sumOfElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    return sum;
  }
  let array = [30,16,18,17,10];
  let result= sumOfElements(array);
  console.log(result);