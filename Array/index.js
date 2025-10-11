// ========== array method==========

// length
const  fruits = ["Banana", "Orange", "Apple", "Mango"];

// const size = fruits.length;
// fruits.length = 2;
// console.log(fruits);

// array toString
// const myList = fruits.toString();
// console.log(myList);

// const myLists = fruits[2];
// console.log(myLists);

// array at()

// const fruit = fruits.at(2);
// console.log(fruit);


// join()

// const result = fruits.join();
// console.log(result);

// const result = fruits.join(" - ");
// console.log(result);

// const words = ["I", "Love", "Javascript"];
// const sentence = words.join(" ");
// console.log(sentence);


// push
fruits.push("Lemon");
console.log(fruits);

//pop
fruits.pop();
console.log(fruits);

//unshift
fruits.unshift("Lemon");
console.log(fruits);

//shift
fruits.shift();
console.log(fruits);

// slice
const citrus = fruits.slice(1, 3);
console.log(citrus);

//index of
console.log(fruits.indexOf("grape"));
console.log(fruits.indexOf("Mango", 3));

// index
console.log(fruits[0]);
console.log(fruits[2]);

console.log(fruits[fruits.length - 1]);


// include
const friends = ["balam", "kalam", "salam", "gelam", "pailam"];
const exist = friends.includes("gelam");
console.log(exist);

const exit = friends.includes("khailam");
// console.log(exit);

if(friends.includes("khailam")) {
    console.log("Party");
}
else {
    console.log("No food. We are fasting");
}

const index1 = friends.indexOf("gelam");
console.log(index1);


//=====includes - eti holo array er modde thaka element ase ki na ta check kore...
//=====indexOf - eti element ta kon position a ase ta check kore


const fruits1 = ["Apple", "Banana", "Mango", "Lichu"];

if(fruits1.includes("Mango")) {
    console.log("Aum ache");
} else {
    console.log("Aum nei, Gache uth");
}

const birds = ["Babul", "Alif", "Choton"];
const birdIndex = birds.indexOf("Babul");
console.log(birdIndex);