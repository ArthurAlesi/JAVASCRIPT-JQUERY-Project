

snake = {
    "vertebra2": [14, 20],
    "vertebra1": [14, 19],
    "head": [14, 18]
}

// for (var i in snake){
//     console.log(i)
// }

var teste = Object.entries(snake)
console.log(Object.entries(snake))
console.log(teste)
console.log(snake)


// console.log(Object.keys(snake).length)
// sizeTeste = Object.keys(snake).length
console.log("o tamanho é " + teste.length)
teste.push(teste[teste.length - 1])
console.log("o tamanho é " + teste.length)
for (var i = 0; i < teste.length; i++){
    if(i < teste.length - 1){
        teste[i][1] = teste[i+1][1]
    }
}
// teste = 
teste.pop()
console.log(teste)

newObject = Object.fromEntries(teste)
console.log(">>>>>>> newobject é " + newObject)
console.log(newObject)

console.log()
console.log()
console.log()
console.log()
console.log()
for ( var i in newObject){
    console.log(i)
}