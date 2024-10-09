/*Lista de exercícios Arrays
1. Crie uma função que adicione um número ao final de um array de números e
exiba o array atualizado.*/

function adicionarNúmero(){
    let numeros = [20,22,25];
    numeros.push(30);
    console.log(numeros)
}
adicionarNúmero()

/*2. Crie uma função que remova o último número de um array e exiba o número
removido e o array atualizado.*/

function removerUltimo(){
    let numeros = [3,4,5];
    console.log(numeros[numeros.length-1]) /*O comando numeros.length-1 é 
    para achaar o ultimo numero do array , pois quando o .length conta ele começa a contagem 
    a partir do 1 e nos arrays a contagem começa com 0 , por exemplo um arrey com o tamanho de
     3 numeros  , o ultimo numero esta na posição 2 do array*/
    numeros.pop();
    console.log(numeros)
    
}
removerUltimo()

/*3. Crie uma função que adicione uma fruta ao início de um array de frutas e exiba o
array atualizado. */

function adicionarFrutas(){
    let frutas = ["maca", "banana", "laranja"];
    frutas.unshift("pera")
    console.log(frutas)
}
adicionarFrutas()

/*4. Crie uma função que remova o primeiro número de um array e exiba o número
removido e o array atualizado.*/

function removerNumero(){
    let numeros = [10,11,12];
    console.log(numeros[0])
    numeros.shift();
    console.log(numeros)
}
removerNumero()

//5. Crie uma função que exiba a quantidade de frutas em um array de frutas.

function frutas(){
    let frutas = ["maca", "banana", "laranja "];
    console.log(frutas.length);
}
frutas()

/*6. Crie uma função que receba um número. Se o número for maior que 50, remova
o último número do array. Caso contrário, adicione o número ao final do array.*/

function receberNumeros(numero){
    let numeros = [7,5,10]
if (numero>50)
    numeros.pop()
else 
    numeros.push(numero)
console.log(numeros)
   
}
receberNumeros(59)

/*
7. Crie uma função que adicione três frutas ao final de um array de frutas e exiba o
array atualizado.*/

function frutas(){
    let frutas = ["pera", "acerola", "jaca"];
    frutas.push("mamao", "melao", "abacate");
    console.log(frutas);
}
frutas()

/*
8. Crie uma função que remova o último número de um array se houver mais de 3
números, caso contrário, remova o primeiro número.*/

function ultimoNúmero (){
    let numeros = [9,10,34,54,39];
   console.log(numeros.length)
if (numeros.length>3){
    numeros.pop()
}else {
    numeros.shift()
    
}console.log("array autorizado",numeros)
}
ultimoNúmero()


/*
9. Crie uma função que exiba uma mensagem indicando se o array de números tem
mais ou menos de 5 elementos.*/

function exibirMensagem(){
    let números = [3,9,54]
if (números.length>5) {
    console.log("O array tem mais que cinco elementos")
}else {
    console.log("O array tem menos que cinco elementos")
}


}exibirMensagem()

/* 10. Crie uma função que receba o nome de uma fruta. Se a fruta for "Morango",
remova o primeiro item do array. Caso contrário, adicione essa fruta ao final do
array.*/

function receberFrutas(fruta){
    let frutas = ["morango", "pera", "maca", "banana"]
if (fruta === "morango"){
    frutas.shift()
}else {
    frutas.push(fruta)
    console.log("Array adicionado " + frutas)
}
}receberFrutas("morango")
