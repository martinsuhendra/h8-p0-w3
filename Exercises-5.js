function palindrome(kata) {
    
    var resultX = ''
    var resultY = ''
    for(var i = 0;i < Math.floor(kata.length / 2 + 1);i++){
        resultX += kata[i]
    }
    for(var j = kata.length - 1;j >= Math.floor(kata.length/2);j--){
        resultY += kata[j]
    }
    if(resultX === resultY){
        return true
    }else{
        return false
    }
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false