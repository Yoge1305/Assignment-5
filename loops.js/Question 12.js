//12.Write a function that removes duplicate elements from an array.

function removeDuplicate(arr){
    let newArray=[];
    for(i=0;i<arr.length;i++){
       let duplicate = false;
       for(let t=0;t<newArray.length;t++){
        if(newArray[t]===arr[i]){
            duplicate=true;
            break;
        }
       } 
       if(!duplicate){
        newArray.push(arr[i]);
       }
    }
    return newArray;
}

console.log(removeDuplicate("Thanks"));
console.log(removeDuplicate([1,2,4,5,2,5,6,8]));
