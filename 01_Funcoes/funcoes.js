//Declaração de função 
//hoisting

falaOi()

function falaOi(){
    console.log('Oi!')
}

//Objetos de primeira classe
//Function expression
const souUmDado = function(){
    console.log('Sou um dado!')
}
souUmDado()

//Arrow funcition 
const funcaoArrow = () => {
    console.log('Função Arrow')
}
funcaoArrow()

//Dentro de um objeto
const obj = {
    falar(){
       console.log('Método do Objeto') 
    }
}
obj.falar()

function funcao01(){
    console.log('Oi - função 01')
    console.log(arguments[0])
}
funcao01('Valor',1,2,3,4,5,6,7,8,9,10)

function funcao02(){
    let total = 0;
    for (let argumento of arguments){
        total += argumento
    }
    console.log(total)
}
funcao02(1,2,3,4)

function funcao03(a, b, c, d, e, f){
   console.log(a, b, c, d, e, f)
}
funcao03(1,2,3)

function funcao04(a,b=0){
    console.log(a+b)
}
funcao04(2)

function funcao05(a, b = 2, c = 4){
    console.log(a+b+c)
}
funcao05(2, undefined, 20)

//Passando Objeto
function funcao06({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade)
}
funcao06({nome: 'Peterson', sobrenome: 'Lobato', idade: 30})

let obj01 = {nome: 'Peterson', sobrenome: 'Lobato', idade: 30}
funcao06(obj01)

//Passando Array
function funcao07([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3)
}
funcao07(['Peterson', 'Lobato', 30])

//função conta
//rest operator
function conta(operador, acumulador, ...numeros){
    console.log(operador, acumulador, numeros)
    for(let numero of numeros){
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '*') acumulador *= numero
        if (operador === '/') acumulador /= numero
    }
    console.log(acumulador)
}
conta('*', 1, 20, 30, 40, 50)

//Return
function soma(a,b){
    return a+b
}
console.log (soma(5,2))

// Retornando Objeto
function criaPessoa(nome, sobrenome){
   // return {nome, sobrenome}
    return {nome:nome, sobrenome:sobrenome}
}
const p1 = criaPessoa('Peterson', 'Lobato')
console.log(p1.nome, p1.sobrenome)



