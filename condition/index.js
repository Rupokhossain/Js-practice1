const rainingOutside = true;
if(rainingOutside == true) {
    console.log("You and me - under the tree");
} else {
    console.log("No rain, no romance");
}

const weight = 40;
if(weight > 20) {
    console.log("Rickshaw mama cholo jai");
} else {
    console.log("Walking is Exercising");
}


// const salary = 75000;
// const isBCS = true;

// if(salary > 50000) {
//     console.log("Shundor patro");
// } else {
//     console.log("Next 5 years single thako");
// }

// if(salary > 50000 && isBCS == false) {
//     console.log("Sheii level er patro.");
// } else {
//     console.log("Dure giye moro");
// }


const salary = 25000;
const height = 68;

if(salary > 25000 || height > 72) {
    console.log("Bolo baba kobul");
} else {
    console.log("vaag tui mokbul");
}


const price = 4000;
if(price >= 5000) {
    const discount = price / 100 * 10;
    const pay = price - discount;
    console.log(pay);
}
else if (price >= 2500){
    const discount = price / 100 * 5;
    const pay = price - discount;
    console.log(pay);
}
else {
    console.log(price);
}



const money = 300;
const popcornPrice = 40;
if(money >= 300) {
    console.log("Going to watch a movie");


    if(popcornPrice <= 50) {
        console.log("Buying PopCorn");
    } else {
        console.log("PopCorn is Expensive");
    }
} else{
    console.log("Home Alone");
}