function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}` testa se está imprimindo coretamente a idade
        var genero = ''
        var img = document.createElement('img') // cria uma tag img
        img.setAttribute('id', 'foto') // criou o id da img com #foto via JS
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute ('src', 'foto-bebe-m.png') // aparece foto de um homem de acordo com a idade
            } else if (idade <21) {
                //Jovem
                img.setAttribute ('src', 'foto-jovem-m.png') // aparece foto de um homem de acordo com a idade
            } else if (idade <50) {
                // Adulto
                img.setAttribute ('src', 'foto-adulto-m.png') // aparece foto de um homem de acordo com a idade
            } else {
                // Idoso
                img.setAttribute ('src', 'foto-idoso-m.png') // aparece foto de um homem de acordo com a idade
            }
 
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute ('src', 'foto-bebe-f.png') // aparece foto de uma mulher de acordo com a idade

            } else if (idade <21) {
                //Jovem
                img.setAttribute ('src', 'foto-jovem-f.png') // aparece foto de uma mulher de acordo com a idade
            } else if (idade <50) {
                // Adulto
                img.setAttribute ('src', 'foto-adulto-f.png') // aparece foto de uma mulher de acordo com a idade
            } else {
                // Idoso
                img.setAttribute ('src', 'foto-idoso-f.png') // aparece foto de uma mulher de acordo com a idade
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}