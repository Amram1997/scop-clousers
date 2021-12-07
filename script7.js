// 10.Check whether string is palindrome, or not.

function palindrom(str){
    let riversString = str.toString().split('').reverse().join('')
   
    if(riversString === str){
        return "yes palindrom"
    }
    else{
        return "no palindrom"
    }
}
console.log(palindrom("abccba"))