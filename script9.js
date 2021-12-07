// 7. Given an array. Determine whether it consists only from uniques or not.

function uniques(arr){
    let array = [];
    for(let i = 0; i < arr.length;i++){
        if(array.indexOf(arr[i]) === -1){
            array.push(arr[i])   
        }
       
    }
     if(array.length === arr.length){
            return "uniques"
        }else{
            return "not uniques"
        }
}
console.log(uniques([1,2,3,4,2]))