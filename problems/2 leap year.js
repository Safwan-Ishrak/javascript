var year = 2004

if(year%400==0 && (year%4==0 && year%100!=0)){
    console.log("leap year")
}
else{
    console.log("not a leap year")
}