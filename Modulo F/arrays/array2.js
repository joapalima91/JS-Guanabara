let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
/*
console.log(valores)
console.log(valores[0]) imprime o primeiro elemento
console.log(valores[1]) imprime o 2ª
console.log(valores[2]) 3ª
console.log(valores[3]) 4ª
console.log(valores[4]) 5ª
console.log(valores[5]) 6ª

// percurso para exibir o vetor
for (let i = 0; i < valores.length; i++) {
    console.log(`A posição ${i} tem o valor ${valores[i]}`)    
}
*/


for (let i in valores) {
    console.log(`A posição ${i} tem o valor ${valores[i]}`)    
}

let posicao = valores.indexOf(7) // verifica posição do valor "7"
console.log(posicao)
console.log(valores.indexOf(9))


