//String Manipulation: Write a function reverseString(str) that takes a string and returns the string reversed.
 function reversestring(str)
 {
    return str.split('').reverse().join('');
 }
 console.log("The reverse string is::"+reversestring("hello"));

