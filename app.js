/*for(var n1 = 0; n1 <= 10; n1++){
    console.log("N1: " + n1)
}*/

/*var n1 = 0
while(n1 <= 10){
    console.log("N1: " + n1)
    n1++
}*/

/*var n1 = 0
do{
    console.log("N1: " + n1)
    n1++
}while(n1 <= 10)
*/

var adicao = require('./adicao')
console.log(adicao(10, 2))

var subtracao = require('./subtracao')
console.log(subtracao(10, 2))

var multiplicacao = require('./multiplicacao')
console.log(multiplicacao(10,2))

var divisao = require('./divisao')
console.log(divisao(10,2))
