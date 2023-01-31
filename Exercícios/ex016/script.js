function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] - Verifique os dados e tente novamente!')
    } else{ 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'fotocriancahomem.png')
            } else if(idade < 21){
                img.setAttribute('src', 'fotojovemhomem.png')
            } else if(idade < 50){
                img.setAttribute('src', 'fotoadultohomem.png')
            } else{
                img.setAttribute('src', 'fotovelhohomem.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'fotocriancamulher.png')
            } else if(idade < 21){
                img.setAttribute('src', 'fotojovemmulher.png')
            } else if(idade < 50){
                img.setAttribute('src', 'fotoadultomulher.png')
            } else{
                img.setAttribute('src', 'fotovelhomulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}