// problem - 01

/* const students = ["abul", "babul", "cabul", "abul", "babul", "dabul"];

function noDuplicate(array) {
    const unique = [ ];

    for(const item of array) {
        if(unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(students)
console.log(uniqueArray); */


// problem - 02
/*const arr = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function noDuplicate(array) {
    const newArr = [ ];

    for(const item of array) {
        if(newArr.includes(item) === false) {
            newArr.push(item);
        }
    }
    return newArr;
}

const uniqueArray = noDuplicate(arr)
console.log(uniqueArray);  */



// problem - 3
let a = 5;
let b = 7;
console.log(a, b);

const temp = a;
a = b;
b = temp;
console.log(a, b);
