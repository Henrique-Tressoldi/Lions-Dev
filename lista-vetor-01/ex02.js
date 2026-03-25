let vetor = [1, 2, 3, 4, 5, 6];

for(i = 0; i< vetor.length; i++){
    console.log("indice "+i +" = "+vetor[i]);
}


console.log("====================================")


const soma = vetor.reduce((acumulador, numeroAtual)=> acumulador + numeroAtual, 0);

console.log("soma = "+soma);


console.log("====================================")



media = soma / vetor.length;

console.log("media = "+ media)

console.log("====================================")

vetor.sort
maior = vetor[vetor.length-1]

console.log("maior = "+ maior)

menor = vetor[0]

console.log("menor = "+ menor)

console.log("====================================") 


let vetor8 = [1,2,3,4,5,6,7,8];

quantosPares = vetor8.filter((numero)=> numero % 2 === 0).length

console.log("quantos pares = "+ quantosPares)

somaPares = vetor8.filter((numero)=> numero % 2 === 0).reduce((acumulador, numero)=> acumulador + numero, 0)

console.log("soma de pares = "+ somaPares)


quantosMaior10 = vetor8.filter((numero)=> numero > 10).length

console.log("quantos maiores q 10 = " + quantosMaior10)


console.log("====================================") 


base = [1,2,3,4,5]


dobro = []

base.forEach(element => {
    dobro.push(element *2)
});

console.log("vetor base = ")

base.forEach(element => {
    console.log(element)
})


console.log("vetor dobro = " )

dobro.forEach(element => {
    console.log(element)
})


console.log("====================================") 

inverso = []
base.forEach((numero, index)=> {
    indexInverso = base.length - index - 1
    inverso[indexInverso] = numero
} )


console.log(inverso)

console.log("====================================") 


contador = 0

vetor8.forEach(numero => {
    if(numero === 5){
        contador++
    }
})

console.log(contador)

console.log("====================================") 



console.log(vetor8.indexOf(3))

console.log("====================================") 

baralhado = [8,2,4,6,7,1,9,3,5]

crescente = null

for(i = 0; i< baralhado.length -1; i++){
    if(baralhado[i]<baralhado[i+1]){
        crescente = true
    } else {
        crescente = false
        break
    }
}

console.log((crescente) ? "Crescente" : "Nao crescente")
