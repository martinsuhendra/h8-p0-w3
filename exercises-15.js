function groupAnimals(animals) {

    var result = [];
    var count = 0;
    animals.sort();

    for(var i = 0; i < animals.length;i++){
        if(result.length === 0){
            result.push([animals[i]]);
        }else if(result[count][0][0] === animals[i][0]){
            result[count].push(animals[i])
        }else{
            result.push([animals[i]]);
            count++
        }
    }
    return result
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]