let amigo = {nome:"José",
sexo: "M",
peso: 93,
engordar (p=0){
    console.log("Engordou")
    this.peso += p 
}}

//console.log (amigo.nome, amigo.peso)

amigo.engordar(10)
console.log(amigo.peso)

let num = 8 
num **= 2
console.log (num)