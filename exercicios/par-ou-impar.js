const escolhaParOuImpar = process-argv[2]
const escolherNumero = process-argv[3]

function verificaParouImpar (numero) {
    if (numero %2 === 0){
        return "par"
    }else {
        return 'impar'
    }
}

if (escolhaParOuImpar === 'par'){
    
}