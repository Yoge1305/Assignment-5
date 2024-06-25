//8. write a function to find second minimum number in an array

function seconMinNum(arr) {
    let min = arr[0];
    let secondMin = arr[1];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        secondMin = min;
        min = arr[i];
      } else if (arr[i] < secondMin && arr[i] !== min) {
        secondMin = arr[i];
      }
    }
    return secondMin;
  }
  
  let a = [12,61,17,83,51,60];
  console.log(seconMinNum(a));
