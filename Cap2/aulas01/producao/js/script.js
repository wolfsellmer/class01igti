var a = 7;
var b = 7;

if (a > b){
    console.log (a + ' é maior que ' + b);
}else {
    if(a < b){
        console.log(a + ' é menor que ' + b );
    } else{
        console.log(a + ' é igual a ' +b)
    }
}

var r = '';
switch(r){
    case 1: r = 'Domingo'; break;
    case 2: r = 'Segunda'; break;
    case 3: r = 'Terça'; break;
    case 4: r = 'Quarta'; break;
    case 5: r = 'Quinta'; break;
    case 6: r = 'Sexta'; break;
    case 7: r = 'Sábado'; break;
    default: r = 'Dia invalido'
}
console.log(r);

a = 6;
b = 7;

var resposta = a > b ? 'maior' : a < b ? 'menor' : 'igual';
console.log(resposta);

// somatório con while 

var numeroAtual = 1
var somatorio = 0; 

while (numeroAtual <= 10){
    // somatório = somatório + numeroAtual;
    somatorio += numeroAtual;
    numeroAtual++;
}

console.log('A soma é ' + somatorio)

var numeroAtual = 1
var somatorio = 0; 
do{
    somatorio += numeroAtual;
    numeroAtual ++;
} while (numeroAtual <= 10);

console.log('A soma é ' + somatorio)

var numeroAtual = 1
var somatorio = 0; 
for(numeroAtual = 1; numeroAtual <= 10; numeroAtual++){
    somatorio += numeroAtual;
}
console.log('A soma é ' + somatorio)