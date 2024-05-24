// Você pode apresentar o resultado tanto no **console** quanto em um **alerta** no navegador.

// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

//     💡 Para saber o tipo de dado você pode usar o operador `typeof`

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

/* PERGUNTA 1
alert ("Hello World!")
*/

/* PERGUNTA 2
let varOne = 1
let varTwo = 2

console.log(`A variável um é ${varOne} e a variável dois é ${varTwo} e a soma delas é: ${varOne + varTwo}`)
*/

/* PERGUNTA 3
let varThree = "banana"
if (typeof(varThree) == "number") {
    console.log (`A variável três de valor ${varThree} é um número`)
} else {
    console.log (`A variável três de valor ${varThree} não é um número`)
}

let varFour = "banana"
if(isNaN(varFour)) {
    console.log (`A variável quatro de valor ${varFour} não é um número`)
} else {
    console.log (`A variável quatro de valor ${varFour} é um número`)
}
*/

/* PERGUNTA 4
let varFive = true
if (typeof(varFive) == "string") {
    console.log (`A variável três de valor ${varFive} é uma string`)
} else {
    console.log (`A variável três de valor ${varFive} não é uma string`)
}
*/

/* PERGUNTA 5
let varSix = 3
if (typeof(varSix) == "boolean") {
    console.log (`A variável três de valor ${varSix} é um boolean`)
} else {
    console.log (`A variável três de valor ${varSix} não é um boolean`)
}
*/

/* PERGUNTA 6
let varSeven = 8
let varEight = 5
console.log(`A variável sete tem valor ${varSeven} e a variável oito tem valor ${varEight} e a subtração delas é ${varSeven - varEight}`)
*/

/* PERGUNTA 7
let varNine = 4
let varTen = 3
console.log(`A variável nove tem valor ${varNine} e a variável dez tem valor ${varTen} e a multiplicação delas é ${varNine * varTen}`)
*/

/* PERGUNTA 8
let varEleven = 12
let varTwelve = 4
console.log(`A variável onze tem valor ${varEleven} e a variável doze tem valor ${varTwelve} e a divisão delas é ${varEleven / varTwelve}`)
*/

/* PERGUNTA 9
let varThirteen = 11
if (varThirteen % 2 == 0) {
    console.log(`A variável treze de valor ${varThirteen} é um número par`)
}  else {
    console.log(`A variável treze de valor ${varThirteen} não é um número par`)
}
*/

/* PERGUNTA 10
let varFourteen = 10
if (varFourteen % 2 != 0) {
    console.log(`A variável quatorze de valor ${varFourteen} é um número ímpar`)
} else {
    console.log(`A variável quatorze de valor ${varFourteen} não é um número impar`)
}
*/
