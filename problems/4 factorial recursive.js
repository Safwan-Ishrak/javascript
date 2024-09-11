function fact(num){
    if(num==0){
        return 1;
    }
    else{
        return num*fact(num-1);
    }
}

var num=5;
console.log(fact(num))