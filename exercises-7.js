function hitungJumlahKata(kalimat) {
    var arrKalimat = kalimat.split(' ') //membagi kalimat menjadi kata dan dimasukkan ke dalam array
    var totalKata = arrKalimat.length

    return totalKata
   
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5