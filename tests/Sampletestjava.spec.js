// // 1.let str = "Hello JavaScript World";
// //   *Check if the string includes "JavaScript"
// //   *Find the index of "World"
// //   *Find the last index of letter "o"
// // 2.let str = "FrontendDeveloper";
// // Extract "Frontend"
// // Extract "Developer"
// // Extract first 5 characters
// // Extract last 5 characters
// // 3.let str = "apple,banana,orange";
// // Convert string into array
// // Count how many items are there
// // Convert back to string using join()

// let str ='Hello JavaScript World';
// console.log(str.indexOf("World"));
// console.log(str.includes("JavaScript"));
// console.log(str.lastIndexOf("o"));

// let str ='FrontendDeveloper';
// console.log(str.slice(0,8));
// console.log(str.slice(8,17));
// console.log(str.substring(0,6));
// console.log(str.substring(17,12));

// let str ='apple,banana,orange';
// console.log(str.split(","));
// console.log(str.length);

//Reverse stars
for (let i = 5; i >=1; i--)
{let star = '';
for (let j = 1; j <= i; j++)
{star +='*';}
console.log(star);
}

//Downside pyramid
let n=5
for (let i = n - 1; i >= 1; i--) {
    let row = '';
    for (let k = 1; k <= n - i; k++) {
        row += ' ';
    }
    for (let j = 1; j <= (2 * i - 1); j++) {
        row += '*';
    }
    console.log(row);
}