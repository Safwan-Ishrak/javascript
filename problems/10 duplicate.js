var arr=[1,2,2,3,4,5,6,6,7,7,9,8]

var arr2=[]

for(var i=0;i<arr.length;i++){
    if(arr2.includes(arr[i])==false){
        arr2.push(arr[i])
    }
}

console.log(arr2)