A fragment of code that produces value is called an expression.

Every value that is written litteraly is an Expression e.g. "22"

A JS statement is composed of expression(s), and a program is a list of statements.

Side Effect: when a statement could change the state of the machine in a way that will affect the statements that come after it

Bindings:
To capture a value, it needs to be stored somewhere, usually in a variable/binding.

After a binding has been defined, its name could be used as an expression
E.g. let ten = 10; let x = ten \* ten;

A binding would not point to the same value forever, you can change it using the assignment operator, either to assign it a new value or assign it to a different binding.
X = 200;

Binding are more like tentacles not boxes, they refer to values but they do not contain them, 2 bindings could refer to the same value. A program can only access the value it still has a reference to

When you want to remember a value, you either grow a tentacle to hold on to it, or you re-attach one of your old tentacles to it.

A single let statement could define multiple bindings, separated by a comma.
Let x = 1, z=2, y=3;

If a binding is declared without a value, it will hold "undefined" till it gets a value assigned to it.

The word "const" refers to a constant binding, which points at the same value for as long as it lives.

The Environment

The collection of bindings and their values that exist at a given time is called the environment. When a program starts up the environment is not empty, it always contains the bindings that are part of the language standard, and most of the time it has bindings that provide ways to interact with the surrounding system
E.g. on a browser there already tools to interact with mouse, keyboard and loaded website.

Functions:
A lot of values are provided in the default env have type function.
Is a piece of program wrapped in a value, such values can be applied in order to run the wrapped program.

Executing a function is called invoking, calling or applying it.
Values given to the function are called "Arguments"

Return values
Showing a text box, or writing text to the screen is called "side effect"
Functions might produce side effects, or values in which case they do not need to have a side effect to be useful

Values produced by a function are called return values.

Control Flow
When a program contains multiple statements, it would run top to bottom

Conditional Execution
When we want the program to take a certain branch of the road based on the situation at hand, this is called conditional execution.
You can have multiple paths and to control this you can chain multiple if/else statements to customize your output based on the situation/input.

While and DO Loops

Loop : is a way to run a piece of code multiple times

While loop

While(expression/condition)
{
Code to execute
}

Every time it runs, it would evaluate the condition and if it fits, it would execute the code below, until the condition is no longer met.

Do while loop

Would execute its code at least once before evaluating its condition to see if it needs to run again.

For loop

Could be used as a shorter version for other loops, using the keyword "for" followed by ().
Has 2 semicolons, the first one after the loop initialization, usually by defining a binding I, the 2nd part checks the expression for if the loop must continue, the last part updates the state of the loop on every iteration.
For(let I = 0; I <=10; i++)
{
//do stuff
}

Breaking out of a loop

Having the loop condition produce false is one way, bu there is another way; the special statement "break;" that has the effect of immediately jumping out of the enclosing loop.
`For(let I = 0; I <=10; i++) { If(I % 7 == 0) { //do stuff Break; } }`

The "continue" keyword would have the opposite effect, when found in the body of the loop, the control jumps out of the body and continue to the next iteration.

Comments

A comment is a piece of text that's part of your program, yet it's completely ignored by the computer.
Single line => //
Multiple lines => /_ bla bla _/

Summary

Program == consists of ==> Statements == consists of ==> expressions == consists of ==> smaller expressions

Programs are like a story, they would execute from top to bottom, and you can alter the flow of a program using conditional execution (if, else and switch) and looping statements (while, do while, for).

Bindings can be used to file pieces of data under a name, and they are useful for tracking a state in a program.
The environment is a set of bindings that are defined, JS system allows to put a number of useful standard bindings into your environment.

Functions are special values that encapsulate a piece of your program, you can invoke them by writing their name followed by () and providing arguments if needed => this is called and expression and it might produce value or cause side effects based on the return value of your function.
