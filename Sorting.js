//Sorting an Array: Write a function sortArray(arr) that sorts an array of numbers in ascending order without using the built-in sort method.
function sortArray(arr)
{
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j])
            {
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }

        }
       
    }
      for(let i=0;i<arr.length;i++){
     console.log(arr[i]);
    }
}
arr=[4,8,4,2,3,9,6];
console.log(sortArray(arr));
