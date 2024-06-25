//convert snake case to camel case

function snakeToCamel(arr) {
    let str = arr.split('_');

    for (let i = 1; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    }
    return str.join('');
}

let snakeCaseString = "this_is_camel_case";
let camelCaseString = snakeToCamel(snakeCaseString);
console.log(camelCaseString);