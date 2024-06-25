//5. Write a function that takes an array of numbers and returns the maximum value.

function maxNum(arr){
    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }
    }
    return max;
}

let result=[1,18,12,13,17,51,31];
console.log(maxNum(result));