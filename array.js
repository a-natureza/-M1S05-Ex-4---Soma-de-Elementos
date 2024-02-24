// Requerendo a biblioteca prompt-sync
const prompt = require('prompt-sync')({sigint: true});

// Criando o array numeros inicialmente vazio
const numeros = [];

// Solicitando ao usuário para inserir cinco números
console.log("Por favor, insira 5 números inteiros.");

for (let i = 0; i < 5; i++){
    const numero = parseInt(prompt(`Número ${i + 1}: `));
    numeros.push(numero);
}
    
// exercicio 04
    // Convertendo a entrada para inteiro e adicionando ao array
    numeros.push(parseInt(numeros, 10));

// Utilizando um loop for para imprimir cada número do array no console
console.log("Os números inseridos são:");
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
// fim exercicio 3

// inicio exercicio 4

// Calculando a soma dos elementos do array usando reduce
let soma = numeros.reduce((acumulador, valorAtual) => {return acumulador + valorAtual}, 0);

// Imprimindo a soma no console
console.log(`A soma de todos os números é: ${soma}`);
// Suponha que o array numeros já foi preenchido com cinco números inteiros
// Exemplo: let numeros = [5, 3, 1, 4, 2];

//fim exercicio 4

// inicio exercicio 5

// Criando um novo array numerosOrdenados com os mesmos elementos de numeros
let numerosOrdenados = [...numeros];

// Ordenando o array numerosOrdenados em ordem crescente
numerosOrdenados.sort((a, b) => a - b);

// Imprimindo o array ordenado no console
console.log("Números ordenados em ordem crescente:");
console.log(numerosOrdenados);

//fim do exercicio 5