let num = [5, 8, 2, 9, 3]
// num[3] = 5 adiciona item na última posição
num.push(1) // adiciona número na ultima posição automaticamente.
num.sort() // ordena do menor pro maior
console.log(`Nosso vetor é o ${num}`) //imprime vetor em forma crescente
//console.log(num.length) // imprime a quantidade de elementos no vetor
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let posicao = num.indexOf(8) // verifica posição do valor "7"
if (posicao == -1) {
    console.log(`O valor não foi encontrado`) // se posição fpr -1, não existe valor no vetor
} else {
    console.log(`O valor está na posição ${posicao}`) // imprime posição se existe número no vetor
}