function somaImpares() {
    let soma = 0;

    for (let i = 1; i <= 500; i++) {
        if (i % 2 !== 0 && i % 3 === 0) {
            soma += i;
        }
        console.log("A soma dos impares e mutiplos de 3 é: " + soma)
    }
}

function menorEMaiorAltura() {
    let alturas = [
        1.80, 1.75, 1.77, 1.82, 1.71, 1.56, 1.88, 1.49, 1.55, 1.73, 1.76, 1.65, 1.62, 1.43, 1.66
    ];

    const maior = Math.max(...alturas);
    const menor = Math.min(...alturas);

    alert(maior)
    alert(menor)
    console.log(alturas)
}

/*function mediaAritmetica() {
    let valores = [-8, -3, 2, 5, 9, 10, 13];
    let positivos = [];
    let negativos = [];
    let mediaArit = (valores / 7)
    for (valor of valores) {
        if (valor < 0) {
            negativos.push(valor);
        } else if (valor === 0) {
            console.log(valor);
        } else if (valor > 0) {
            positivos.push(valor);
        }
    }
}*/

/*function quantidadeNosIntervalos() {

}*/

function algoritmoEstruturado() {
    let valores = {
        primeiro: 3,
        segundo: 5,
        terceiro: 9,
        quarto: 6,
        quinto: 10,
        encerramento: 0
    }
    let pares = 0;
    let impares = 0;
    let somaPares = 0;
    let somaImpares = 0;
    let quantidade = 0;
    let soma = 0;

    for (chave in valores) {
        const valor = valores[chave];
        console.log(`Chaves do objeto ${valor}`);

        if (valor === 0) {
            break;
        }

        quantidade ++
        soma += valor

        if (valor % 2 === 0) {
            pares++
        } else {
            impares++
        }

        let mediaPares = somaPares / pares;
        let mediaGeral = soma / quantidade;
        
        console.log(`Quantidade de pares ${pares}`)
        console.log(`Quantidade de impares ${impares}`)
        console.log(`Media dos Pares ${mediaPares}`)
        console.log(`Media Geral ${mediaGeral}`)
    }
}