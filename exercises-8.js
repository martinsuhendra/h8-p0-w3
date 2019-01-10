function pasanganTerbesar(num) {

    var numString = num.toString();
    var splitNum = numString.split('')
    var tampung = '0'

    for(var i=0;i<=splitNum.length - 1;i++){
        var pembanding = splitNum.slice(i,i+2)
        if(pembanding > tampung){
            tampung = pembanding
        }
    }
     return tampung[0] + tampung[1];
    
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99 
  