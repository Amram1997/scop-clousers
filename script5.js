//6.Write a function which remove elements with length <= 3
 function filterByLength(arr){
    return arr.filter(elm => elm.length <= 3)
 }
 console.log(filterByLength(["kia","tesla","mersedes","bmw"]))