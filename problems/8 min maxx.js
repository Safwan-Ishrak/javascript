var a=12;
var b=101;
var c=33;
var ma=Math.max(a,b);

console.log(ma);

var ma2=Math.max(a,Math.max(b,c));

console.log(ma2);

if(a>b){
    if(a>c){
        console.log(a)
    }
    else{
        console.log(c)
    }
}
else{
    if(b>c){
        console.log(b)
    }
    else{
        console.log(c)
    }
}