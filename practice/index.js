// Array এর প্রথম ও শেষ এলিমেন্ট Console Log এ দেখাও।

const numbers = [20, 30, 40, 50, 60];

console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

//যদি বয়স ১৮ বা তার বেশি হয় এবং ভোটার আইডি কার্ড থাকে, তাহলে ভোট দিতে পারবে — না হলে পারবে না।

const age = 20;
const VoterIdCard = true;

if (age >= 18 && VoterIdCard) {
  console.log("Vote dite parbo");
} else {
  console.log("vote dite parbo nah");
}

//১ থেকে ১০ পর্যন্ত সংখ্যা Console Log এ দেখাও।
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//২০ থেকে ৩০ পর্যন্ত সংখ্যার যোগফল বের করো।
let sum = 0;
for (let i = 20; i <= 30; i++) {
  sum = sum + i;
  console.log(sum);
}

//Array এর মধ্যে যত জোড় সংখ্যা আছে, তাদের যোগফল বের করো।
let num = [1, 2, 3, 4, 5, 6];
let sum1 = 0;

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    sum1 = sum1 + num[i];
  }
}
console.log(sum1);

// Array এর মধ্যে সবচেয়ে বড় সংখ্যাটি বের করো।
const newArray = [15, 8, 23, 4, 42, 10];
let max = newArray[0];

for(let i = 1; i< newArray.length; i++) {
    if(newArray[i] > max) {
        max = newArray[i];
    }
}
console.log(max);