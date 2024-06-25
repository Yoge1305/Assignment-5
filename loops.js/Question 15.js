//15. Write a function that removes duplicate elements from an array

function removeDuplicate(arr) {
    let newArray = [];
    for (i = 0; i < arr.length; i++) {
      let duplicate = false;
      for (let j = 0; j < newArray.length; j++) {
        if (newArray[j] === arr[i]) {
          duplicate = true;
          break;
        }
      }
      if (!duplicate) {
        newArray.push(arr[i]);
      }
    }
    return newArray;
  }
  
  console.log(removeDuplicate("Remove the Duplicate elements"));