function pedirVoto() {
    let voto = prompt(`Classifique de 0 a 10`);
    return voto;
}
function categoria(votos) {
    
        switch (true) {
        case (voto >=0 && voto <= 2):
            console.log(`Muito fraco`);
            break
        case (voto >=3 && voto <= 4):
            console.log(`Insuficiente`);
            break
        case (voto >=5 && voto <= 6):
            console.log(`Suficiente`);
            break
        case (voto >=7 && voto <= 8):
            console.log(`Bom`);
            break
        case (voto >=9 && voto <= 10):
            console.log(`Excelente`);
            break
        default:
            console.log(`Valor fora do intervalo permitido.`);
            break
    }

}

let voto = pedirVoto();
console.log(`Você votou: ${voto}`);
categoria(voto);