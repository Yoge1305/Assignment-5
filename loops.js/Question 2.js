//2. Write a function that calculates the factorial of a given number



function factorial(num){
    let result=1;
    for(let i=num;i>0;i--){
        result=result*i;

    }
    return result;

}
let num=6;
let value=factorial(num);
console.log(value);