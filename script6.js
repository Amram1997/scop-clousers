// 9. Given an array of numbers. Find the sum of numbersʼ quadratic which are even.
function sum1(arr){
      let quadratic = 1;
      let sum = 0;
    for(let i = 0; i <= arr.length; i++){
       if( arr[i] % 2 ===0 ){
         quadratic = arr[i] * arr[i]
          sum +=quadratic
        
       }
       
    }
       return sum
    }
   console.log(sum1([6,4,5,9,2])) 


