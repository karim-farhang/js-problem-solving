/*
This code demonstrates the use of JavaScript's primitive data types and how to determine their types using the `typeof` operator. 
The code covers:
1. Number and BigInt for numeric data.
2. Boolean for true/false values.
3. Null, representing an intentional absence of value.
4. Undefined, representing uninitialized variables.
5. Symbol for unique identifiers.
6. String for text.
7. Summary of all primitive data types in JavaScript.
*/

let age = 25;
let pi = 3.14;
console.log(age, typeof age, pi, typeof pi); // Outputs: 25 "number" 3.14 "number"

let bigNumber = 1111111111111111111111111000000000000000000000000002222222222222222222222222222222222222222n;
console.log(bigNumber, typeof bigNumber); // Outputs: <bigNumber> "bigint"

let isStudent = true;
console.log(isStudent, typeof isStudent); // Outputs: true "boolean"

let emptyValue = null;
console.log(emptyValue, typeof emptyValue); // Outputs: null "object" (special case in JavaScript)

let notAssigned = undefined;
console.log(notAssigned, typeof notAssigned); // Outputs: undefined "undefined"

let uniqueId = Symbol('id');
console.log(uniqueId, typeof uniqueId); // Outputs: Symbol(id) "symbol"

let name = 'karim';
console.log(name, typeof name); // Outputs: "karim" "string"

// Total primitive data types in JavaScript: 
// number, bigint, boolean, null, undefined, symbol, string
