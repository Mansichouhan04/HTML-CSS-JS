//Remove Duplicates from an Array: Write a function removeDuplicates(arr) that takes an array and returns a new array with duplicate elements removed.

function removeDuplicates(arr) {
    const uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
    
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
}
const arr = [1, 2, 3, 4, 4, 5, 5, 6];
const result = removeDuplicates(arr);
console.log(result);
