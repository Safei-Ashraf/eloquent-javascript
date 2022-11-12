# Functions

The concept of wrapping a piece of program in a value has many uses:

    - Reduce repetition
    - Gives us a way to structure larger programs of sub-programs
    - Isolate these subprograms from one another.

## Functions consists of :

    -  head => name of the function that's used to call it (could take arguments  one or more or even none)
    - Body => always wrapped between braces {} and used to hold the function logic, this is the code that will be executed whenever the function is called by name.

## Return values

Some function might not return a value or have a return statement, in this case they cause maybe a side effect, and by default they will return `undefined`

Functions with no return statement, or empty return; will also return `undefined`

When the control comes through a return statement, it would immediately jump out the current functions and pass the return value to the code that called it.
` const x = add(2,3) => would store value of 5 in x.

Parameters to a function, behave like bindings, but their initial value is giving by the function caller not the code inside the function itself.

Bindings and Scopes

<strong>Scope </strong>: is the part of the program where the binding is visible. For bindings defined outside any function or block, the scope is the whole program (global scope)
But bindings declared inside a function can be references as local bindings. This provides some isolation between functions; each act as its own little world.

Bindings declared via let and const are scoped to the block they are in, if you declare a const inside a loop that's inside a function, the const will only be visible inside that loop block, and it will not be accessible through the function itself.

In older version pre-2015 bindings created with the `var` keyword were visible thorough the whole function they were declared in, or to the global env if they were not declared inside a function.

## Declaration Notation:

1-You can use a function before declaring it using the syntax function name (){/_ do something_/} or
2-Anonymous functions e.g; let result = function (){/_ do something again_/}

Because function declarations are not part of the regular top to bottom flow of control, they are all conceptually moved to the top of their scope and can be used by the code in that scope.

Unlike a language like C where you have to declare the function then use it or at least declare it's name and arguments, return value at the top of your file in order to be able to use it.

3-Arrow Functions e.g: const power = (base, exponent) => {/_ do calculation_/}
When there is only 1 params you can omit the () so it be like const double = x => return x\*2;

## The Call Stack

The place where the computer stores the context related to functions execution order is called the call stack.
Because a function has to jump back to the place that called it when it re-turns , the computer must remember the context from which the call happened.

Storing this stack requires some space in the computer memory, when the stack is too big, the computer will fail.

## Optional Arguments

In JS if you pass too many arguments , JS will ignore the extra arguments, if you pass too few then JS will fill the missing arguments for you with the value `undefined`.
If you use default value by assigning a value to your params using the `=` operator, this means if you don't provide an argument when calling the function it will fall back to the value you initially set as default.

## Closure

Being able to reference a specific instance of a local binding in an enclosing scope- is called closure.
A function that refernces bindings from local scopes around it is called a closure.

When called the function body sees the environment in which it was CREATED not the environment in which it was CALLED.

## Growing Functions

<strong>2 ways to introduce functions in code</strong>

    1. Writing similar code multiple times -> wanna bundle it in a function and re-use it.
    2. Find the need to a functionality that's not implemented yet

## Functions and Side Effects

##### Functions are called for

    1. return value
    2. Side effect
    3. Sometimes called for both

<strong>A pure function: </strong> is a specific kind of value producing function that not only has no side effects but also does not rely on side effects from other code (e.g. does not rely on global bindings whose value might change)

A pure function has the property that when called multiple times with the same argument(s)it always produce the same output(and does not do anything else)

A call to such function can be replaced with its return value and expecting no change to the code.

If a pure function calls another pure function, the main function remains pure e.g. if a pure function is calling Math.Max() inside of it.

## Summary

A key aspect in understanding functions is understanding scopes, each block created a new scope.
Params and bindings declared in a given scope are local and not visible to the outside.
Bindings declared with `var` behave differently
