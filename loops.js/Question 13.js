//13. write a function to return seperate arrays for even and odd from a given array

let evenArray=[];
let oddArray=[];
function evenOdd(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            evenArray.push(arr[i]);
        }
        else{
            oddArray.push(arr[i]);
        }
    }
    return{
        even:evenArray,
        odd:oddArray
    }
}

console.log(evenOdd([18,1,9,11,16,2,4,,17,3,5]));