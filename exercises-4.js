var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

var checkDate = input[3].split('/')

var x = [checkDate[0],checkDate[1],checkDate[2]]
var y = parseInt(checkDate[1]);


function dataHandling2(input){
    input.splice(0,3,"0001","Roman Alamsyah Elsharawy","Provinsi Bandar Lampung");
    input.splice(4,1,"Pria","SMA International Metro")
    console.log(input)

    switch(y){

        case 1:
        console.log('Januari')
        break;
        case 2:
        console.log('Februari')
        break;
        case 3:
        console.log('Maret')
        break;
        case 4:
        console.log('April')
        break;
        case 5:
        console.log('Mei')
        break;
        case 6:
        console.log('Juni')
        break;
        case 7:
        console.log('Juli')
        break;
        case 8:
        console.log('Agustus')
        break;
        case 9:
        console.log('September')
        break;
        case 10:
        console.log('Oktober')
        break;
        case 11:
        console.log('November')
        break;
        case 12:
        console.log('Desember')
        break;

    }

    console.log(checkDate.sort(function(a,b){return b - a}))
    console.log(x.join('-'))
    console.log(input[1].slice(0,15))
}

dataHandling2(input);
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */