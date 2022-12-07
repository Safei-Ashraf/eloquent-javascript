A large program is a costly program, increaseing size of the program means it has increased complexity of both time to build and size of the program itself.

Thic could lead to further issues related to maintaining the program and performance.

### Abstraction

hide details and gives us the ability to talk about programs in a higher level context (more abstract)

it makes content shorter and easier to interpret, it is a useful skill in programming to be able to notice when you are working at a very low level of abstraction.

### Higher-order functions

Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
Higher-order functions allow us to abstract over actions, not just values.
They come in several forms. For example:

-   we can have functions that create new functions.

-   functions that change other functions.

-   We can even write functions that provide new types of control flow.

There is a built-in array method, forEach, that provides something like a for/of loop as a higher-order function.

    ["A", "B"].forEach(l => console.log(l));
    // → A
    // → B

### Filtering Arrays

    function filter(array, test) {
    let passed = [];
    for (let element of array) {
    if (test(element)) {
    passed.push(element);
    }
    }
    return passed;
    }

    console.log(filter(SCRIPTS, script => script.living));
    // → [{name: "Adlam", …}, …]

The function uses the argument named test, a function value, to fill a “gap” in the computation—the process of deciding which elements to collect.

Note how the filter function, rather than deleting elements from the existing array, builds up a new array with only the elements that pass the test. This function is pure. It does not modify the array it is given.

Like forEach, filter is a standard array method. The example defined the function only to show what it does internally.

#### Transforming with map

The map method transforms an array by applying a function to all of its elements and building a new array from the returned values. The new array will have the same length as the input array, but its content will have been `mapped` to a new form by the function.


