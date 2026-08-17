let number = [10, 20, 30, 40];

// 1. Get the first element of an array
let first = number[0];
console.log('First element:', first);

// 2. Get the last element of an array
let last = number[number.length - 1];
console.log('Last element:', last);

// 3. Add an element at the beginning of an array
number.unshift(5);
console.log('After unshift(5):', number);

// 4. Add an element at the end of an array
number.push(50);
console.log('After push(50):', number);

// 5. Remove the first element from an array
number.shift();
console.log('After shift():', number);

// 6. Remove the last element from an array
number.pop();
console.log('After pop():', number);

// 7. Join all array elements into a string separated by commas
let joined = number.join(',');
console.log('Joined string:', joined);

// 8. Convert a string into an array
let arrFromString = joined.split(',');
console.log('Array from string:', arrFromString);

// 9. Merge two arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = arr1.concat(arr2);
console.log('Merged array:', merged);

// 10. Reverse an array using built-in methods
let reversedArr = [...number].reverse();
console.log('Reversed array:', reversedArr);

// 11. Sort an array in ascending order using built-in methods
let sortedArr = [...number].sort((a, b) => a - b);
console.log('Sorted array:', sortedArr);

// 12. Reverse a string 'Hello world'
let str = 'Hello world';
let reversedStr = str.split('').reverse().join('');
console.log('Reversed string:', reversedStr);