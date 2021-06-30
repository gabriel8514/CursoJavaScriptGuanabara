function tabuada(){
    var num = document.getElementById("numero")
    var tab = document.getElementById("seltab")
    var quantMult = document.getElementById("quantMult")
    if (num.value.length == 0 || quantMult.value.length == 0){ // importante colocar value para pegar o valaor, se não da erro. 
        alert ("Por favor digite um numero!")
    } else { 
        var n = Number(num.value)
        var qm = Number(quantMult.value)
        tab.innerHTML = ""
        for (var c = 1 ; c <= qm ; c++){
            var item = document.createElement("option")
            item.text = `${n} X ${c} = ${n * c}`
            tab.appendChild(item)
        }
    }    
}