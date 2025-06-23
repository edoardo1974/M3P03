function pedirVoto() {
    let voto = prompt(`Classifique de 0 a 10`);
    return voto;
}
function categoria(votos) {
    
        switch (true) {
        case (voto >=0 && voto <= 2):
            console.log(`Muito fraco`);
            // codice da eseguire se espressione === valore1
            break
        case (voto >=3 && voto <= 4):
            console.log(`Insuficiente`);
            // codice da eseguire se espressione === valore1
            break
        case (voto >=5 && voto <= 6):
            console.log(`Suficiente`);
            // codice da eseguire se espressione === valore1
            break
        case (voto >=7 && voto <= 8):
            console.log(`Bom`);
            // codice da eseguire se espressione === valore1
            break
        case (voto >=9 && voto <= 10):
            console.log(`Excelente`);
            // codice da eseguire se espressione === valore1
            break
        default:
            console.log(`Valor fora do intervalo permitido.`);
            // codice da eseguire se espressione === valore1
            break
    }

}

let voto = pedirVoto();
console.log(`Você votou: ${voto}`);
categoria(voto);