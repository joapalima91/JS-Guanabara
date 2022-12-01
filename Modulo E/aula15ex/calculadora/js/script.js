function tabuada() {
    let num = document.getElementById("txtn")
    let tab = document.querySelector('#seltab')
    if (num.value.length == 0){
        window.alert("Por favor, digite um número!") // se deixar vazio mostra msg de erro
    } else {
        let n = Number(num.value)
        let c = 1 //iniciando o contador
        tab.innerHTML = '' // antes de receber tabuada, vai limpar e receber a tabuada
        while (c <= 10) {
            let item = document.createElement('option') //criando elementos "option" dentro do select
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}` // faz selecionar item no option
            tab.appendChild(item) // adiciona cada item a uma linha
            c++
        }
    }

    
}