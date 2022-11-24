# Data structures

Numbers, Booleans and strings are the atoms that data structures are built from. -> (simple data types)
Many types of info require more than one atom to be represented.

## Properties 


These are expressions that's used to access a property of some value. E.g.: myString.length.

Almost all JS values have properties except for NULL and UNDEFINED



How access properties in JS?
 2 ways 
1- dot Notation 
	 this must use the exact name of the property
	Would not work if the property name is a number or a string that has space in it, use #2
	E.g. objectName.color
	Dot notation works with names only that look like valid binding names.

	
2- bracket Notation 
	the expression between the brackets is evaluated to get the property                                                                                name 
	E.g: object[2+2] -> gets object.4
		Object['space name'] -> object.name space
		Var name = 'ding'
		Object[name] -> object.ding
		


## Methods



Properties that hold a function value
E.g. let doh = "Doh"   ----> typeof doh.toUpperCase();  ===> function

Properties that contain functions are generally called methods of the value they belong to as "toUpperCase" is a method of string. Which is a function that returns a copy of the original string whose letters are all in upper case.

Same on arrays, push and pop methods -> functions that allow you to add or remove elements from the array.




##  OBJECTS

Values of type object are arbitrary collections of properties separated by commas

The `delete` operator would remove a property entirely from an object
Between setting an object prop to `undefined` or using the `delete` operator, difference is with the first one, the prop is removed and no longer exist on that object, on the 2nd case, the prop remains however it does not hold any value (other than `undefined`).


The "binary"  `in`  operator when applied to a string and a object, tells you whether a property with that name exists on this object or NOT.

`object.assign` copies all props from one object to another new object. Both new and old object would still refer to the same place in memory, so any change in one, will reflect on the other. (value by reference)



Arrays
Are then just a special type of objects used to store a sequence of values, typeof [] -> object.
In JS everything is an object! 



## Array Methods:

Push : adds items to the end of the array, return value is the length of updated array
Pop:  removes the last element of an array, returns the removed element
Shift:  removes the first element of an array, returns the shifted element
Unshift: add an element to the beginning of the array, returns length of updated array
indexOf:   returns the first index (position) of a specified value,  returns -1 if the value is not                                        
		found. Could take string to look for, and index to start at ,goes left to right.
Lastindexof: method returns the last index (position) of a specified value. method returns -1 if 
		the value is not found.
Slice: returns selected area from old array as a new array, takes (indext to start, index to stop [
	not included in new array]), default start at 0 if no value was provided, default end is last element if no end value was provided. Could negative values and would start counting right to left
Concat:  method concatenates (joins) two or more arrays. returns a new array, containing the joined arrays.  Does NOT change the original arrays!



## MUTABILITY

Primative  data types (numbers, strings, Booleans) are immutable, it is impossible to change the value of these types. You can mix them and derive a new value of them, but the original values will always remain the same.

When we have 2 bindings storing the numbers 120 and 120, we can consider them to be the same and equals. Even if they do not refer to the same physical bit (memory location).

Objects are different
You can change/mutate objects, you can change a prop value, add or remove props from the same object.

But there is a difference between having 2 object with similar props and having to refernces to the same object!
The first will not evaluate to true when compared as equals, since they don't refer to the same memory location/refernces even if they hold same values/props.

While on the 2nd case, a change to an object would refelct on the other, since both of them refer to the same memory location.


<italic>Correlation is a measure of dependence between statistical variables. </italic>





##  STRINGS AND THEIR PROPERTIES

Strings by default have props like `toUpperCase` and `length` but if you try to add custom props by yourself, it won't stick, since strings (and Booleans) are not of type object, so it won't store any custom props you might try to add on them (will not generate error while adding)
As mentioned before, such values are immutable and can not be changed.

Some built-in methods (properties that store a func) on strings

Note that `length` is a property


Slice: extracts a section of a string and returns it as a new string, without modifying the original 
		string.
		
IndexOf:  given one argument: a substring to search for, searches the entire calling string, and 
		returns the index of the first occurrence of the specified substring. Given a second argument: a number, the method returns the first occurrence of the specified substring at an index greater than or equal to the specified number.
		
Split: takes a pattern and divides a String into an ordered list of substrings by searching for the 
	   pattern, puts these substrings into an array, and returns the array.

Repeat:  Returns a string consisting of the elements of the object repeated count times.

`trim`: this method removes white space (spaces, new lines, tabs and similar chars)
`padStart`: method takes desired length and padding chars as argument



##  REST PARAMETERS

Allows a function to accept an indefinite number of arguments as an array
E.g.
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

A function definition's last parameter can be prefixed with `…`  which will cause all remaining (user supplied) parameters to be placed within a standard JavaScript array. Only the last parameter in a function definition can be a rest parameter.


##  THE MATH OBJECT

Math is a built-in object that has properties and methods for mathematical constants and functions. It's not a function object.

Unlike many other global objects, Math is not a constructor. All properties and methods of Math are static. You refer to the constant pi as Math.PI and you call the sine function as Math.sin(x), where x is the method's argument. Constants are defined with the full precision of real numbers in JavaScript.

` Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself.`

So to call any of the Math Object properties or methods you have to use Math.`property name`

