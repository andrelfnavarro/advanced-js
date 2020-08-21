let a = 4
console.log(a)

function bomDia() {
    console.log('Bom dia!')
}

bomDia()

const boaTarde = function () {
    console.log('Boa tarde!')
}

boaTarde()

function somar(a, b) {
    return a + b
}

let resultado = somar(3,4) 
console.log(resultado)

resultado = somar(3,4,5,6) //ignores all extra parameters
console.log(resultado)

resultado = somar(3) //automatically inputs 'b' as undefined, so 3 + undefined = Not A Number

    // function somar(a, b = 0) {
    //     return a + b
    // }
    //this would solve

console.log(resultado)