//4. Write a function that takes a string and returns the reversed string 

let reverse="";
const reverseString=function(str){
    for(let i=str.length-1;i>=0;i--){
        reverse=reverse+str[i];
    }
    return reverse;
}

console.log(reverseString("Welcome to Javascript Yogesh"));