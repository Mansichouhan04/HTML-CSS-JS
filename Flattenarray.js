//Flatten a Nested Array: Write a function flattenArray(arr) that takes a nested array and returns a flat array containing all the elements of the nested arrays.
function flattenArray(arr) {
    return arr.flat(2);
}

const arr = [1, [2, [3, 4], 5], [6, 7], 8];
const flatArr = flattenArray(arr);
console.log(flatArr);  
