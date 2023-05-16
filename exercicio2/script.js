const arrayNumber = [2, 3, 5, 7, 11, 13, 17, 19]

const arrayString = ["gato", "cachorro", "rato", "coelho", "coruja"]

const arrayMix = [10, "carros", 3===2]

// console.log(`Array de Números: ${arrayNumber}`)
// console.log(`Array de Strings: ${arrayString}`)
// console.log(`Array de diversos tipos: ${arrayMix}`)

console.log(`Tamanho do arrayNumber: ${arrayNumber.length}`)
console.log(`Tamanho do arrayString: ${arrayString.length}`)
console.log(`Tamanho do arrayMix: ${arrayMix.length}`)

console.log(`O primeiro item do primeiro array é ${arrayNumber[0]}`)
console.log(`O segundo item do segundo array é ${arrayString[1]}`)
console.log(`O terceiro item do terceiro array é ${arrayMix[2]}`)

const verificaNumber = arrayNumber.includes(2)
const verificaString = arrayString.includes("Pato")

console.log(`O número 2 está presente no primeiro array? ${verificaNumber}`)
console.log(`Existe "pato" no segundo array? ${verificaString} `)