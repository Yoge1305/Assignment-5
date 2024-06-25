//6. Write a program to find minimum number in a array

function minNum(arr){
    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i];
        }
    }
    return min;
}

let result=[18,12,17,13,51,31];
console.log(minNum(result));