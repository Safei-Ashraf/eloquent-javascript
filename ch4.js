// Exercises
// The sum of a range
// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array.
// If no step is given, the elements go up by increments of one, corresponding to the old behavior.The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
//Make sure it also works with negative step values so that range(5, 2, -1) produces[5, 4, 3, 2].

//
// Your code here.
const range = (start, end) => {
	let resultArr = [];
	for (let i = start; i <= end; i++) {
		resultArr.push(i);
	}
	console.log(resultArr);
	return resultArr;
};

const sum = (arr) => {
	let sum = 0;
	for (const elem of arr) {
		sum += elem;
	}
	return sum;
};
//Bonus:

const bonusRange = (start, end, step = 1) => {
	const resultArr = [];
	//take steps count to check on arr length;
	if (start < end) {
		for (let i = start; i <= end; i += step) {
			resultArr.includes(i) ? null : resultArr.push(i);
		}
	} else if (end < start) {
		for (let i = start; i >= end; i -= Math.abs(step)) {
			resultArr.includes(i) ? null : resultArr.push(i);
		}
	}
	return resultArr;
};

//2
/*
Reversing an array
Arrays have a reverse method that changes the array by inverting the order in which its elements appear.
For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray,
takes an array as argument and produces a new array that has the same elements in the inverse order.
The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements.
Neither may use the standard reverse method.
Thinking back to the notes about side effects and pure functions in the previous chapter,
which variant do you expect to be useful in more situations? Which one runs faster?
*/
// Your code here.

const reverseArray = (arr) => {
	const resultArr = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		resultArr.push(arr[i]);
	}
	return resultArr;
};
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
//array.splice(start, deleteCount, itemToAdd)
//array.pop() => removes last element in array and returns that element.
const reverseArrayInPlace = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		arr.splice(i, 0, arr.pop());
	}
	return arr;
};
//Bonus Solution
const reverseArrayInPlace2 = (arr) => {
	let temp;
	for (let i = 0; i < Math.floor(arr.length / 2); i++) {
		temp = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp;
	}
	return arr;
};
