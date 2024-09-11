function AddNumbers(){
    var sum=0;
    for (let i = 0; i <arguments.length; i++) {
        const element =arguments [i];
        sum+=element;
    }
    return sum;
}

var result=AddNumbers(10,20,50,2,3,4,5,6);
console.log(result);