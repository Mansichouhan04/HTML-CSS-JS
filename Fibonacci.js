//Fibonacci Sequence: Write a function fibonacci(n) that returns the n-th Fibonacci number.
function fibonacci(n)
 {
    if (n <= 1) 
        return n; 
    return fibonacci(n - 1) + fibonacci(n - 2); 
  }
  
console.log(fibonacci(5));  