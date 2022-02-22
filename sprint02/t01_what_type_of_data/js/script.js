let number = 100;
let bigint = 1000n;
let string = "Oracle";
let bool = true;
let empty = null;
let undef;
let obj = {};
let symbol = Symbol('symbol');
let func = () => {};

alert(`Number is ${typeof number}
BigInt is ${typeof bigint}
String is ${typeof string}
Boolean is ${typeof bool}
Null is null
Undefined is ${typeof undef}
Object is ${typeof obj}
Symbol is ${typeof symbol}
Function is ${typeof func}`);