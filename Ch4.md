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

