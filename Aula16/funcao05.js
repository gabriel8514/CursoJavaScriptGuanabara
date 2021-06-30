// RESCURSIVIDADE 
function fatorando (n) {
    if (n == 1) {
        return 1 
    } else {
        return n * fatorando (n-1) 
    }
}

console.log (fatorando (5))
 
/*
5! = 5 x 4 x 3 x 2 x 1 
ou 
5! = 5 x 4!

n! = n x (n-1)!
1! = 1
*/ 