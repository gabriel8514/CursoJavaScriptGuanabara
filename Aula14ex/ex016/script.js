function contar(){
    var inicioCont = document.getElementById("inicioCont")
    var fimCont = document.getElementById("fimCont")
    var passoCont = document.getElementById("passoCont")
    var result = document.getElementById("result")

    if (inicioCont.value.length == 0 || fimCont.value.length == 0 || passoCont.value.length == 0){
        result.innerHTML = "Impossível contar!"
    } else{
        result.innerHTML = "Contando: <br>"
        var i = Number(inicioCont.value) // sempre lembrar que os inputs vem como string e precisa converter em numero. 
        var f = Number(fimCont.value)
        var p = Number(passoCont.value)
        if (p <= 0){
            alert ("Passo inválido! Considere PASSO 1")
            p = 1
        }
        if (i < f ){
            // contagem crescente 
            for (var c = i; c <= f ; c += p) {
                result.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // contagem regresiva 
            for (var c = i; c >= f; c -= p) {
                result.innerHTML += `${c} \u{1F449}`
            }
        }  
        result.innerHTML += `\u{1F3C1}`
    }
}