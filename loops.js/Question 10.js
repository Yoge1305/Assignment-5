//10. Write a function that merges two arrays into one without duplicates

function mergeArray(arr1, arr2) {
    let result = [];
    let add = arr1.concat(arr2);
    for (let i = 0; i < add.length; i++) {
      let duplicate = false;
      for (let j = 0; j < result.length; j++) {
        if (add[i] === result[j]) {
          duplicate = true;
          break;
        }
      }
      if (!duplicate) {
        result.push(add[i]);
      }
    }
    return result;
  }
  
  console.log(mergeArray([1,2,3,4,5,6], [7,8,9,10,11,12]));