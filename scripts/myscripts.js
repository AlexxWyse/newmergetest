// for (let i = 2; i <= 1024; i = i*2) {
//     console.log(i);
// }

// let one = 1
// while(one <= 10) {
//     console.log(2**one);
//     one++;
// }

// do {
//     input = prompt("what is your Name: ")
//     console.log(Number(input));
// } while (!isNaN(Number(input)));

// alert(`Hello ${input}`)

// const arr = ["a","b","c"]

// arr.push("d")
// console.log(arr.length)
// console.log(arr[3])
// arr.pop()
// console.log(arr.length)
// arr.unshift("1")
// console.log(arr[0])


// const person = {
// name: ["Bob", "Smith"], 
// age:32,
// gender: "male",
// interests: ["Music", "Skiing"]
// }

// console.log(`My name is ${person.name[0]} ${person.name[1]}. I am interested in ${person.interests[0]} and ${person.interests[1]}`);

// for (let key in person) {
//     console.log(person[key])
// }
let counter = 0;
let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
};

let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
};

let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
};
let students = [student1, student2, student3];

for (student in students) {
    if (student.program === "CIT" && student.GPA > 3)  {counter; console.log(student)
    }
}
console.log(counter);