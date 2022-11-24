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
