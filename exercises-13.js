function targetTerdekat(arr) {
    var indeksX = []
    var indeksO = []

    for(var i = 0; i < arr.length;i++){
        if(arr[i] === 'x'){
            indeksX.push(i)
        }else if(arr[i] === 'o'){
            indeksO.push(i)
        }
    }

    if(indeksX.length === 0){
        return 0;
    }
    if(indeksX[0] < indeksO[0]){
        return Math.abs(indeksX[indeksX.length - 1] - indeksO[0] )
    }else{
        return Math.abs(indeksO[indeksO.length - 1] - indeksX[0])
    }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2