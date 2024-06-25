//16. Write a function that takes two arrays and returns a new array with elements that are common to both arrays 

function findCommonElements(arr1, arr2) {
    let commonElements = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            commonElements.push(arr1[i]);
        }
    }

    return commonElements;
}

const array1 = [16,3,18,10];
const array2 = [6,10,5,2,3];

const common = findCommonElements(array1, array2);
console.log(common);