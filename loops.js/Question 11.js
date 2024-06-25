//11.Write a function that counts the occurrences of a specific character in a given string

function occuranceCount(str){
    let count={};

    for(let i=0;i<str.length;i++){
        let element=str[i];
        if(count[element]){
            count[element]++;
        }
        else{
            count[element]=1;
        }
    }
    return count;
}

console.log(occuranceCount("Welcome Yogesh"));