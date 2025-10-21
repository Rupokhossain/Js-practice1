// problem - 01

/* function oddNumber(numbers) {
    let odds = []
    for(const number of numbers) {
        if(number % 2 === 1) {
            odds.push(number);
        }
    }

    let sum = 0;
    for(const number of odds) {
        sum = sum + number;
    }
    
    const count = odds.length;
    const avg = sum / count;
    return avg;
}
const number = [10, 15, 20, 25];
// const number = [ 7];
const result = oddNumber(number);
console.log(result); */

//problem - 02

/* function evenNumber(numbers) {

    let evens = [];

    for(const number of numbers) {
        if(number % 2 === 0) {
           evens.push(number);
        }
    }

    let sum = 0;
    for(number of evens) {
        sum = sum + number;
    }

   const count = evens.length;
   const avg = sum / count;
   return avg;

}

const even = [10, 15, 20, 25, 30, 35, 40, 45];
// const even = [6];
const result = evenNumber(even);
console.log(result); */

//problem - 03

// function oddNumber(numbers) {
//     let newArr = [];
//     for(const number of numbers) {
//         if(number % 2 == 1) {
//             newArr.push(number * 2);
//         }
//     }
//     return newArr;
// }
// const number = [10, 15, 20, 25, 30, 35, 40];
// const result = oddNumber(number);
// console.log(result);

//problem -04

/* function oddNumber(numbers) {
    for(const number of numbers) {
        if(number % 2 == 1) {
            return "Odd number found";
        }
    }
    return "No odd number found";
     
}
// const number = [10, 20, 30];
// const result = oddNumber(number);
// console.log(result);

const number2 = [10, 13, 20];
const result = oddNumber(number2);
console.log(result); */



    // problem - 05

//     function oddNumber(numbers) {

//     let newArr = [];

//     for(const number of numbers) {
//         if (number % 2 == 1) {
//         newArr.push(number);
//         }
//     }

//     let sum = 0;
//     for(const number of newArr) {
//         sum = sum + number;
//     }
//    const count = newArr.length;
//    const avg = sum / count;
//    return parseInt(avg.toFixed(2));
//     }
//     const number = [10, 15, 20, 25, 30, 35, 40];
//     const result = oddNumber(number);
//     console.log(result);


        //problem - 06

        function oddNumber(numbers) {

          let newArr = [];

         for(const number of numbers) {
                if (number % 2 == 1) {
                newArr.push(number - 1);
                }
            }
            return newArr;

            }
                const number = [10, 15, 20, 25, 30, 35, 40];
                const result = oddNumber(number);
                console.log(result);