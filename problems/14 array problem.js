function tinyFriend(arr=[]){
    var min=10000000;
    var k;
    for(var i=0;i<arr.length;i++){
        if(arr[i].length<=min){
            min=arr[i].length;
            k=i;
        }
    }
    return arr[k];
}

var arr=["asad" , "ahmed", "sam", "labuschange","lamine","am"]

console.log(tinyFriend(arr));