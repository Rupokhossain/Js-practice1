const person = {
    name: "siam ahmed",
    age: 20,
    profession: "developer",
    salary: 25000,
    married: true
};
console.log(person.profession);

const cricketer = {
    position: 4,
    specialty: "batter",
    age: 22,
    runs: 8000
};

console.log(cricketer.position);
console.log(cricketer["runs"]);

cricketer.position = 1;
cricketer["runs"] = 9000;

console.log(cricketer["position"]);
console.log(cricketer.runs);


const college = {
    name: "vnc",
    class: ["11", "12"],
    events: ["science fair", "bijoy dibos", "21 feb"],
    unique: {
        color: "blue",
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
};

console.log(college.unique.color);
console.log(college.unique.result.gpa);
console.log(college.events[2]);


const computer = {
    brand: "lenovo",
    price: 35000,
    processor: "intel",
    ssd: "512gb"
};

const keys = Object.keys(computer);
console.log(keys);

const values = Object.values(computer);
console.log(values);

const profile = {
    name: "Rahim",
    age: 22,
    city: "Dhaka",
    email: "rh.siam999@gmail.com"
};

const profileKeys = Object.keys(profile);
const hasName = profileKeys.includes("name");
console.log(hasName);

if("email" in profile) {
    console.log("email exists");
} else {
    console.log("No email. No Spam.");
}


const person1 = {
    name: "siam",
    age: 22,
    country: "Bangladesh"
};
const entries = Object.entries(person1);
console.log(entries);