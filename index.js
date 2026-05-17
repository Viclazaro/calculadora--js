console.log('Bem vindo a calculadora')
console.log('Por favor, selecione a operação:');
console.log('1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão');

let operador = 1;

switch(operador){
    case 1:
       let resultadoSoma = somar(2,2);
        console.log('Resultado da soma: ', resultadoSoma);
        break;
    
    case 2:
        let resultadoSubtracao = subtracao(10,1)
        console.log('Resultado da subtração: ', resultadoSubtracao);
        break;

    case 3:
        let resultadoMultiplicacao = multiplicacao(2,2);
        console.log('Resultado da multiplicação: ', resultadoMultiplicacao);
        break;

    case 4:
        let resultadoDivisao = divisao(10,2);
        console.log('Resultado da divisão: ', resultadoDivisao);
        break;
}

function somar(numX,numY){
    return numX + numY;
    
}

function subtracao(numX,numY){
    return numX - numY;
}

function multiplicacao(numX,numY){
    return numX * numY;
}

function divisao(numX,numY){
    return numX/numY;
}