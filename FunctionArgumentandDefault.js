//Function Arguments and Defaults: Write a function multiply(a, b) that returns the product of two numbers. If only one argument is provided, return a function that expects another argument and returns the product.
function multiply(a, b) {
    if (b === undefined) {
        return function(c) {
            return a * c;
        };
    } else {
        return a * b;
    }
}

console.log(multiply(5, 4)); //with 2  parameters
console.log(multiply(5)(3)); //with function


