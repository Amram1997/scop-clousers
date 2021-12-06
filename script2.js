// 3. Write a function that returns an anonymous function, which transforms its input by adding a
//particular suffix at the end.

function add_suffix(string){
    return function(str){
        return  str + "" +string
    }
}
const add_ly = add_suffix("ly")
console.log(add_ly("total"))