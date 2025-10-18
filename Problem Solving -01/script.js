//problem 1

/* function inchToFeet(inch) {
    const feet = inch / 12;
    // console.log(feet);    // console korle print kore..value return kore nah

    return feet;
}
const Height = inchToFeet(75);
console.log(Height); */



// problem - 02
/* function inchToFeet(inch) {
    const feet = parseInt(inch / 12);  // feet koto ase ber kore

    const inchRemaining = inch % 12;  // koto inch baki ase ta ber kore

    const result = feet + " ft " + inchRemaining + " inch. ";

    return result;
}

const Height = inchToFeet(75);
console.log(Height); */


// problem - 03

// function mileToKilometer(mile) {
//     const kilo = mile * 1.60934;
//     return kilo;
// }

// const result = mileToKilometer(2);
// console.log(result);


// problem - 04
 
function mileToGauge(mile) {
    const gauge = mile * 1760;
    return gauge;
}
const result = mileToGauge(13);
console.log(result);