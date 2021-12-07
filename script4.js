// 5. Write a function that implements filtering in array
const values = [null,true,{},{name:'Elon'},NaN,0]

 function filterFalsyValues(arr){
     return arr.filter(elm => elm)
    
 }
 console.log(filterFalsyValues(values))