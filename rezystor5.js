let tab=[0,0,0,1,0];

function readValue1(){
let a=document.getElementById("value1").value;
tab[0]=parseInt(a);
calculate();
}

function readValue2(){
let a=document.getElementById("value2").value;
tab[1]=parseInt(a);
calculate();
}

function readValue3(){
let a=document.getElementById("value3").value;
tab[2]=parseInt(a);
calculate();
}

function readMultiplier(){
let a=document.getElementById("multiplier").value;
tab[3]=parseInt(a);
calculate();
}

function readTolerance(){
let a=document.getElementById("tolerance").value;
tab[4]=parseInt(a);
calculate();
}

function calculate(){

let value=(tab[0]*100 + tab[1]*10 + tab[2]) * tab[3];

document.getElementById("result").innerHTML =
"Wartość rezystancji: "+value+" Ω ±"+tab[4]+"%";

}
