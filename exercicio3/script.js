const arrayNumber = [2, 3, 5, 7, 11, 13, 17, 19]

const arrayString = ["gato", "cachorro", "rato", "coelho", "coruja"]

const arrayMix = [10, "carros", 3===2]

const copyArrayNumber = arrayNumber.slice()
const copyArrayString = arrayString.slice()
const copyArrayMix = arrayMix.slice()

copyArrayNumber.unshift(0)//Insere o item no primeiro indice[0]
copyArrayString.pop()
copyArrayMix.splice(1,1)

console.log(`Assim era o arrayNumber: ${arrayNumber} e assim ficou a cópia após adicionar um item ao início: ${copyArrayNumber}`)
console.log(`Assim era o arrayString: ${arrayString} e assim ficou a cópia após remover o último item: ${copyArrayString}`)
console.log(`Assim era o arrayMix: ${arrayMix} e assim ficou a cópia após remover o segundo elemento: ${copyArrayMix}`)