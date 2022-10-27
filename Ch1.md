### In computer worlds there is only DATA, modify, create, delete, copy, ..etc. DATA

All this data is stored as a long sequence of bits => bit is the smallest unite of memory and data stored in it in the form of 0's and 1's (binary)

We separate data into chunks of memory that represent certain pieces of information to be able to deal with them ( values => variables)

JS uses a fixed number of bits to store a single numerical values, 64 bits If you try to store more, it would overflow => goes back to initial value

-   Bits are also used to store the negative sign and the position of the decimal point

Calculations with integers are guaranteed to be correct, however handling smaller numbers (floats,..etc) are not guaranteed to be precise or accurate. Because only 64 bits are available to store them so they could be expressed by a finite number of decimal digits.

    • Special Numbers in JS

Infinity
• -Infinity
• NaN (not a number, special value when calculations are odd and won't give a number back, 0/0, "A"\*3,..etc
○ NaN is the only value in JS that is not equal to itself!

String

escape sequence to add a specials character using the "\" before whatever special character you would be using.

Strings are also modeled as a sequence of bits in JS, this is done using Unicode Standard, where we assign a numeric value for each character you would ever need.

String could be described as a sequence of numbers, or characters. Or even letters.

JS uses 16 bits representation per string character/element.

Strings could be glued together (concatenated) with the + operator.

Unary operators

Some operators are written as words, e.g (type of X), while many operators would take 2 arguments "binary operators" (2 + 2) Unary operators would take only one argument.

Binary operators

> , < => when used for comparison it would return TRUE or FALSE.

Logical Operators

    • And => &&
    • Or => ||
    • Not => !  (it's a unary operators that flips the value of given to it, e.g.( !true == false)
    • Ternary operator => condition? If true : if false

Empty Values

Null => is the absence of value => The value null represents the absence of any object value
Undefined => if an operation does not produce meaningful value, The undefined property indicates that a variable has not been declared at all.

JS does some automatic type coercion, which means if you mix up different data types, JS would mostly convert one of them to get a result, which probably won't be what you expect, be careful with types of data you use!

null == undefined => true
null == 0 => false

Also any extra operations on a NaN would always result NaN.

To avoid this behavior we probably want to use the strict comparison operator
null === undefined => false

Short circuiting of Logical operators

Or Operator => using the || would return the value on it's LEFT side if it evaluates to true, other wise it returns the value on it's right ( very helpful to set default data in case of absence of one element)
E.g.: console.log(null || 1) => prints back 1 as null = false
Console.log( 1 || 2) => print back 1, as 1 = value.

And Operator => && is the opposite, it returns the value on it's right if the value on left side exist
E.g.: console.log( "yes" && 2) => prints back to 2.
console.log(null && 1) => prints back null.
console.log(false && 1) => prints back false.
