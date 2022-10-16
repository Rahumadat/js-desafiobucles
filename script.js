console.log("imprimir impares 1-20");
for (let i=1; i <= 20; i=i+2) {
    console.log(i);
}
console.log("disminuir multiplos de 3");
for (let i=100; i > 0; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
}
console.log("imprime secuencia");
let a=[4,2.5,1,-0.5,-2,-3.5];
for (let i=0; i < a.length; i++) {
        console.log(a[i]);
}
console.log("Sigma");
let suma = 0;
for (let i=1; i <= 100 ; i++) {
    suma = suma +i;
}
console.log(suma);
console.log("Factorial");
let product= 1;
let i = 1;
while ( i <= 12) {
    product = product * i;
    i++
}
console.log(product);

