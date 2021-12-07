// 8 Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a
// word or phrase without a repeating letter.
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