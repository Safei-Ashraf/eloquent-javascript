Functions

The concept of wrapping a piece of program in a value has many uses:
	- Reduce repetition
	- Gives us a way to structure larger programs of sub-programs
	- Isolate these subprograms from one another.


Functions consists of :
	-  head => name of the function that's used to call it (could take arguments  one or more or even none)
	- Body => always wrapped between braces {} and used to hold the function logic, this is the code that will be executed whenever the function is called by name.



Return values

Some function might not return a value or have a return statement, in this case they cause maybe a side effect, and by default they will return `undefined`

Functions with no return statement, or empty return; will also return `undefined`

When the control comes through a return statement, it would immediately jump out the current functions and pass the return value to the code that called it.
` const x = add(2,3) => would store value of 5 in x.

Parameters to a function, behave like bindings, but their initial value is giving by the function caller not the code inside the function itself.

Bindings and Scopes

Scope: is the part of the program where the binding is visible. For bindings defined outside any function or block, the scope is the whole program (global scope)
But bindings declared inside a function can be references as local bindings. This provides some isolation between functions; each act as its own little world.

Bindings declared via let and const are scoped to the block they are in, if you declare a const inside a loop that's inside a function, the const will only be visible inside that loop block, and it will not be accessible through the function itself.

In older version pre-2015 bindings created with the `var` keyword were visible thorough the whole function they were declared in, or to the global env if they were not declared inside a function.


Declaration Notation:


1-You can use a function before declaring it using the syntax function name (){/* do something*/} or 
2-Anonymous functions e.g; let result = function (){/* do something again*/}


Because function declarations are not part of the regular top to bottom flow of control, they are all conceptually moved to the top of their scope and can be used by the code in that scope.

Unlike a language like C where you have to declare the function then use it or at least declare it's name and arguments, return value at the top of your file  in order to be able to use it.

3-Arrow Functions e.g: const power = (base, exponent) => {/* do calculation*/}
When there is only 1 params you can omit the () so it be like  const double = x => return x*2;


The Call Stack


