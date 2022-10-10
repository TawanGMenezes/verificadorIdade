function verificar(){
    var ano = document.getElementById('ano')
    var data = new Date()
    var anoatt = data.getFullYear()
    var res = document.getElementById('res')
    

    if(ano.value.length == 0 || Number(ano.value) > anoatt){
        alert("ERRO ! Verifique os dados e tente novamente")

    }else{
        var idade = anoatt - Number(ano.value)
        var sx = document.getElementsByName('sx')
        var img = document.createElement('img')
        var genero = ''
        if(sx[0].checked){
            var genero = 'Homem'
            if(idade >= 0 && idade < 2){
                img.setAttribute('src','imagens/bebe_masc.png')
                //bebe
            }else if(idade < 10){
                img.setAttribute('src','imagens/crianca_masc.png')
                //criança
            }else if(idade < 21){
                img.setAttribute('src','imagens/adoles_masc.png')
                //adoles
            }else if( idade < 50){
                img.setAttribute('src','imagens/homen.png')
                //adulto
            }else{
                img.setAttribute('src','imagens/idoso.png')
                //idoso
            }


        }else if(sx[1].checked){
            var genero = 'Mulher'
            if(idade >= 0 && idade < 2){
                img.setAttribute('src','imagens/bebe_fem.png')
                //bebe
            }else if(idade < 10){
                img.setAttribute('src','imagens/crianca_fem.png')
                //criança
            }else if(idade < 21){
                img.setAttribute('src','imagens/adoles_fem.png')
                //adoles
            }else if( idade < 50){
                img.setAttribute('src','imagens/mulher.png')
                //adulto
            }else{
                img.setAttribute('src','imagens/idosa.png')
                //idoso
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um ${genero} de ${idade} anos.`
        res.appendChild(img)
        
    }

}
    