function IsPrime(n){
    if(n%2==0){
        return false;
    }
    var flag=0;
    for(i=3;i*i<=n/2;i+=2){
        if(n%i==0){
            return false;
            flag=1;
            break;
        }
    }
    if(flag==0){
        return true;
    }
}

console.log(IsPrime(27))