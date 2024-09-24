import Complex from "./complex.js";



let a = new Complex();
console.log(a.toString());
let b = new Complex(10);
console.log(b.toString());
let c = new Complex(5,2);
console.log(c.toString());

console.log(b.real);
console.log(c.imaginary);


b.real = (20);
b.imaginary = (10);
console.log(b.toString());

b.add(c);
console.log(b.toString());

a.real = (-30);
a.imaginary = (-20);
console.log(a.toString());
a.add(b);
console.log(a.toString())