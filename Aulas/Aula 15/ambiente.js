var num = [5, 8, 2, 9, 3]
num.push(1)

//num[5] = 10 //Adiciona um valor na posição [X] da array 
//num.push(2) //Adiciona um valor na ultima possiçao do array
//num.length //Mostra o numero de casas da array
//num.sort() //Ordena a array em ordem crescente

console.log(`${num}`)
console.log(`O nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é: ${num[0]}`)
console.log(`Organizando o vetor em ordem crescente: ${num.sort()}`)

var pos = num.indexOf(8) // Se tiver retorno de valor -1, quer dizer que nao tem o valor no array
console.log(`O valor 8 está na posição ${pos}`)