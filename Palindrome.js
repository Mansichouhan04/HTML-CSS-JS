//Palindrome Check: Write a function isPalindrome(str) that checks whether a given string is a palindrome.
function isPalindrome(str)
{
   let reverse=str.split("").reverse().join("");
   //console.log(reverse)
   if(reverse===str){
     return true;
   }
   return false;
}
console.log(isPalindrome("naman"));