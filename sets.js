const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function returnSet(meuArray){
    const meuSet = new Set(meuArray)
    var novoArray = [...meuSet]

    //for (const item of meuSet.values()){
    //    novoArray.push(item)
    //}
    

    return novoArray

}



console.log(returnSet(meuArray))