//9. Write a function to find average of the marks using below data let json = [{sub: “Maths”, marks:80},{sub: “Science”, marks:70},{sub: “Social”, marks:60}}

function averageOfMarks(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i].marks;
    }
    let average=sum/arr.length;
    return average;
}

let json = [{sub: "Maths", marks:80},{sub: "Science", marks:70},{sub: "Social", marks:60}];
console.log(averageOfMarks(json));