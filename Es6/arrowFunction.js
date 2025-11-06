/* const add3 = (a, b) => a + b;

const sum = add3(5, 30);
console.log(sum); */


/* const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}
const result = doMath(3, 5, 8);
console.log(result); */


/* const person = {
    name: "Siam",
    greetRegular: function() {
        console.log("Hello, " + this.name);
    },

    greetArrow: () => {
        console.log("Hello", + this.name);
    }
}

person.greetRegular();
person.greetArrow();
*/


/*const greet = (name = "Siam") => `Hello, ${name}`;
console.log(greet());
console.log(greet("Moury")); */


// wrong way
// const getObject = () => {
//     key: "value"
// };
// console.log(getObject());


//right way 
// const getObject = () => (
//     {
//         key: "value"
//     }
// );

// console.log(getObject());


//1st index ber kora
/*const firstValue = (arr) => arr[0];
const numbers = [10, 20, 30, 40];
console.log(firstValue(numbers));
*/


//3 ti shohkhar ghun fol
/* const multiplyThree = (a, b, c) => a * b * c;
console.log(multiplyThree(2, 3 ,4)); */


// const arr = [10, 20, 30, 40];
// const last = arr[arr.length - 1];
// console.log(last);

// const firstAndLast = (arr) => {
//     const first = arr[0];
//     const last1 = arr[arr.length - 1];
//     return { first, last1 };
// };
// const numbers = [10, 20, 30, 40, 50];
// console.log(firstAndLast(numbers));
// Output: { first: 10, last: 50 }


const arr = (a = 10, b = 5) => `The number is ${a} and ${b}`;

console.log(arr(20, 30));
console.log(arr());