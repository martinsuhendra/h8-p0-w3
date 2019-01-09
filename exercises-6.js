function angkaPalindrome(num) {
    while(true){    //membuat sebuah kondisi dimana jika kondisi 'true' akan masuk ke dalam looping
        num++ // nilai num akan terus bertambah satu setelah masuk ke dalam kondisi
        var numString = num.toString(); //variabel harus bertipe data 'String' agar bisa di cek
        var reverseNum = '' //membuat variabel untuk menampung angka yang akan di cek

        for(i = numString.length - 1;i >= 0; i--){
            reverseNum += numString[i]
            if(reverseNum === numString[0]){
                return num
            }
        }
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001