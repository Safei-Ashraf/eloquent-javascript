/*Flattening
Use the reduce method in combination with the concat method to “flatten” an array of arrays 
into a single array that has all the elements of the original arrays.
*/
// let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.

// → [1, 2, 3, 4, 5, 6]
// let arrays = [[1, 2, 3], [4, 5], [6]];
// let result = arrays.reduce(function (acc, current, index, arr) {
// 	return acc.concat(current);
// }, []);

// console.log(result);

// P2
/*Your own loop
Write a higher-order function loop that provides something like a for loop statement. 
It takes a value, a test function, an update function, and a body function. Each iteration, 
it first runs the test function on the current loop value and stops if that returns false. 
Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning.

When defining the function, you can use a regular loop to do the actual looping.
*/
// Your code here.

// the function takes 4 arguments
//1-number to loop from
//2-a test function with condition that return a boolean and stops if it return false [RUNS FIRST]
//3-an update function [RUNS THIRD] AND LOOPS ON FROM BEGINING...
//4-action to call (console.log) (body function) [RUNS SECOND]

function testValue(n) {
	let result = n > 0 ? true : false;
	return result;
}
function updateValue(n) {
	return n - 1;
}

function loop(n, test, update, action) {
	for (let i = n; test(i); i = update(i)) {
		action(i);
	}
}
loop(
	3,
	(n) => n > 0,
	(n) => n - 1,
	console.log
);
// → 3
// → 2
// → 1
