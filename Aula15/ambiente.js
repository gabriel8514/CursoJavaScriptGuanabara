let num = [4,5,6,7,8]

console.log(num)

/*let num = [4,5,6,7,8]
for (var c = 0 ; c < num.length ; c++){
    console.log(`O valor da posição ${c} é ${num[c]}`)
}
*/
/*for (let c in num) {
    console.log(`O valor da posição ${c} é ${num[c]}`)
}
*/

let pos = num.indexOf(12)
if (pos == -1){
    console.log ("Valor não encontrado")
} else {
    console.log (`O valor 8 está na ${pos}`)
}

console.log (num.length) // retorna o total de elementos dentro da array 
console.log (num.sort()) // coloca valos em ordem crescente, importante colocar () 
console.log (num[3]) // chama a posição o valor do elemento colocando entre as chaves []
