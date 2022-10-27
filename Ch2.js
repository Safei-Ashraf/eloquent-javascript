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

// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)

// // Your code here.

const fizzBuzz = (number = 100) => {
	for (let i = 1; i <= number; i++) {
		if (i % 3 === 0 && i % 5 !== 0) {
			console.log("Fizz");
		} else if (i % 5 === 0 && i % 3 !== 0) {
			console.log("Buzz");
		} else if (i % 3 === 0 && i % 5 === 0) {
			console.log("FizzBuzz");
		} else {
			console.log(i);
		}
	}
};
fizzBuzz();

// Chessboard
// Write a program that creates a string that represents an 8×8 grid,
//using newline characters to separate lines.At each position of the grid there is either a space or a "#" character.The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

// // Your code here.

const drawGrid = (size = 8) => {
	let cell;
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			cell = cell + " #";
		}
		console.log(cell);
		cell = ""; //reset cell
	}
};
drawGrid();
