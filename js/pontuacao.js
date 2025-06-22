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
        // codice da eseguire se espressione === valore1
        return "Insuficiente";
    default:
        // codice da eseguire se nessun caso corrisponde
        return "Valor inválido";
}
    

}

let voto = pedirVoto();
console.log(`Você votou: ${voto}`);
categoria(voto);