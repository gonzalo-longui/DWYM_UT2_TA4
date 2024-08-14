function sumAll(a, b) {
    let suma = 0;
    a = parseInt(a);
    b = parseInt(b);
    for (let i = a; i <= b; i++) {
        suma += i;
    }
    console.log(suma);
}

let num1 = prompt("Indica un número: ");
let num2 = prompt("Indica otro número mayor al anterior: ");
sumAll(num1, num2);