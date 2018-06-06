var minhaVar = 'minha variavel';

function minhaFunc(x, y){
    return x + y;
}
//let no lugar do var (2015)
//ES 6 ou ES 2015
let num = 2;
const PI = 3.14;

var numeros = [1, 2, 3];
numeros.map(function(valor){
    return valor * 2;
});
numeros.map(valor => valor * 2); //ES 2015

class Matematica{
    soma(x, y){
        return x + y;
    }
}

//var n1: String = 'sdfgio';
//n1 = 4;