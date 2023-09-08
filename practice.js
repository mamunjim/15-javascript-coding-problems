function total(students){
    let sum=0;
    for(i=0;i<students.length;i++){
        var elements=students[i];
        sum=sum+elements;
    }
    return sum;
}

var students=[29,50,60,38,10,9,38,85,24,67,84,55,25];
console.log(total(students));

