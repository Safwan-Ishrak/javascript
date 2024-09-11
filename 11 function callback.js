function fun_callback(name,age,task){
    console.log("hello ",name);
    console.log("age is ",age);
    task();
}

function WashHand(){
    console.log("wash your hand with soap");
}
function takeShower(){
    console.log("vhalo kore gosol kor");
}
fun_callback("sogir uddin",34,WashHand);
fun_callback("kagir uddin",12,takeShower);

//synchronus call back