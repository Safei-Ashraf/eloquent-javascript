// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// It may be useful to know that you can find the length of a string by writing .length after it.

// let abc = "abc";
// console.log(abc.length);
// // → 3

//Solution:
// 7 is a default value, yet you can use the same function to draw on any height
const drawTriangle = (height = 7) => {
	//prints 7 lines
	let output = "";
	for (let i = 1; i <= height; i++) {
		for (let j = i; j <= i; j++) {
			output += "#";
		}
		console.log(output);
	}
};
drawTriangle();
