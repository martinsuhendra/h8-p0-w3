function balikString(kata){
    var result = ''
    for(i=kata.length;i > 0;i--){
        result += kata[i-1]
    }
    return result
}

console.log(balikString('Hello World!'))