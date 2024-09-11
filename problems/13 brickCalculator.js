function brickCalculator(flor){
    var bricks=0;
    if(flor>20){
        var rest=flor-20;
        bricks+=rest*10000;
        flor=20;
    }
    if(flor>10){
        var rest=flor-10;
        bricks+=rest*12000;
        flor=10;
    }
    if(flor<=10){
        bricks+=flor*15000;
    }
    return bricks;
}
 
var buildin1=45;
console.log(brickCalculator(buildin1));