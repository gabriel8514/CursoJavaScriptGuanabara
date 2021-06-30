function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fAno.value.length == 0 || Number(fAno.value) > ano){ // o fAno.value.length == 0 significa que o conteudo da caixa está zerado. 
        alert ("[ERRO] Verique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("redsex") // nesse caso o redsex tem duas posições [0] e [1] que são masculo e fenino respectivamente. 
        var idade = ano - Number(fAno.value)
        var genero = ""
        var img = document.createElement("img") // criou um tag 
        img.setAttribute("id", "foto") // mesma coisa que ir no HTML e inserir <img id="foto"> 
        if (fsex[0].checked) { // aqui eu faço um chack se a mosição [0] está flagada é masculo. 
            genero = "Homem"
            if (idade >=0 && idade <10) {
                //Crinça 
                img.setAttribute("src", "foto_Bebe_M_Edit.png")
            } else if (idade < 21) {
                //Jovem 
                img.setAttribute("src", "Foto_Jovem_M_Edit.png")
            } else if (idade < 50){
                //Adulto 
                img.setAttribute("src", "Foto_Adulto_M_Edit.png")
            } else {
                //idoso 
                img.setAttribute("src", "Foto_Idoso_M_Edit.png")
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >=0 && idade <10) {
                //Crinça
                img.setAttribute("src", "Foto_Bebe_F_Edit.png") 
            } else if (idade < 21) {
                //Jovem
                img.setAttribute("src", "Foto_Jovem_F_Edit.png")
            } else if (idade < 50){
                //Adulto 
                img.setAttribute("src", "Foto_Adulto_F_Edit.png")
            } else {
                //idoso 
                img.setAttribute("src", "Foto_Idosa_F_Edit.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com <strong>${idade} anos.</strong>`
        res.appendChild(img)
    }
}
