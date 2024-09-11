//1 1 2 3 5 8 13 21
var arr=[0,1]
var num1=0;
var num2=1;
for(var i=1;i<=7;i++){
    var sum=num1+num2;
    arr.push(sum);
    num1=num2;
    num2=sum;
}

console.log(arr);

for(var i=2;i<=7;i++){
    arr[i]=arr[i-2]+arr[i-1];
}
console.log(arr);