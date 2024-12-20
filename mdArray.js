// PROBLEM 3

// Create a multi-dimensional array from user input
const SubArray1 = prompt("Enter names 'Genevieve, Juan, Luna, Gabriel, Elise' separated by commas: ").split(',');
const SubArray2 = prompt("Enter ages '24, 65, 21, 5, 9' separated by commas: ").split(',').map(Number);

// this empty array will stored a new dimensional array.
// this display restructed array with (name, age) pairs just like this [Genevieve,24]
const restructuredArray = [];
for (let i = 0; i < names.length; i++) { //this iterate the names
  restructuredArray.push([names[i], ages[i]]); // sub array containing the name and its correpond which is the age
}

// on this part this display the restructed array in the program
console.log("Restructured array:");
for (const [name, age] of restructuredArray) { //this will iterate each array in the format [name,age]
  console.log('[${name}, ${age}]'); // this logs each array on the format
}