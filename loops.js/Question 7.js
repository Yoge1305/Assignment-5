//7. write a function to find second maximum number in an array

function secondMaxNum(arr) {
    let max = a[0];
    let secondMax = a[1];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max ) {
        secondMax = max;
        max = arr[i];
      } else if (arr[i] > secondMax && arr[i] !== max) {
        secondMax = arr[i];
      } 
    }
    return secondMax;
  }
  
  let a= [12,61,17,83,51,60];
  console.log(secondMaxNum(a));