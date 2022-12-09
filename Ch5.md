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

### Summarizing with reduce

Common thing to do with arrays is to compute a single value from them.

The higher-order operation that represents this pattern is called reduce (sometimes also called fold). It builds a value by repeatedly taking a single element from the array and combining it with the current value. When summing numbers, you’d start with the number zero and, for each element, add that to the sum.

### Composability

Higher-order functions start to shine when you need to compose operations.

At work you would usually go for the more readable approach when coding, however if you are processing large amounts of data using a reptitive processing methods, going for abstract might be a better options and it should refelct on better speed/performance.

### Strings and character codes

In JS strings are encoded as a sequence of 16-bit numbers. These are called code units. A Unicode character code was initially supposed to fit within such a unit (which gives you a little over 65,000 characters). When it became clear that wasn’t going to be enough, many people balked at the need to use more memory per character. To address these concerns, UTF-16, the format used by JavaScript strings, was invented. It describes most common characters using a single 16-bit code unit but uses a pair of two such units for others.

    // Two emoji characters, horse and shoe
    let horseShoe = "🐴👟";
    console.log(horseShoe.length);
    // → 4
    console.log(horseShoe[0]);
    // → (Invalid half-character)
    console.log(horseShoe.charCodeAt(0));
    // → 55357 (Code of the half-character)
    console.log(horseShoe.codePointAt(0));
    // → 128052 (Actual code for horse emoji)

###### findIndex.

This method is somewhat like indexOf, but instead of looking for a specific value, it finds the first value for which the given function returns true. Like indexOf, it returns -1 when no such element is found.

## Summary

Being able to pass function values to other functions is a deeply useful aspect of JavaScript. It allows us to write functions that model computations with “gaps” in them. The code that calls these functions can fill in the gaps by providing function values.

Arrays provide a number of useful higher-order methods. You can use forEach to loop over the elements in an array. The filter method returns a new array containing only the elements that pass the predicate function. Transforming an array by putting each element through a function is done with map. You can use reduce to combine all the elements in an array into a single value. The some method tests whether any element matches a given predicate function. And findIndex finds the position of the first element that matches a predicate.
