let amigo = { nome: "João",
sexo: "M",
peso: 80, //números não vao entre ""
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}
}

amigo.engordar(2)
console.log(`${amigo.nome} tem ${amigo.peso}Kg`)
/*
console.log(amigo); // imrpime todo o objeto
console.log(typeof amigo); //imprime o tipo da variável
*/