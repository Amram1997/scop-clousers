// 8
function isIsogram(word) {
    let array = word.toLowerCase().split('');
    
    let newArray = [];
    
    array.forEach(function(item, i, arr) {
     
      if (newArray.indexOf(item) === -1) {
        newArray.push(item);
      }
    })
        if (newArray.length === array.length) {
        return "isogram";
      } else {
        return "no isogram";
      }
  }
  
  console.log(isIsogram('Dermatoglyphics'));
  console.log(isIsogram('adam'))