function oblicz(){

let a = parseInt(document.getElementById("p1").value);
let b = parseInt(document.getElementById("p2").value);
let c = parseInt(document.getElementById("p3").value);
let m = parseInt(document.getElementById("mult").value);

let value = (a*100 + b*10 + c) * m;

document.getElementById("wynik").innerHTML =
"Wartość rezystancji: " + value + " Ω";

}
