let elementoInputUm = document.getElementById("inputUm")
let elementoInputDois = document.getElementById("inputDois")
let totalgit

function somar(){
    
    total =  Number(elementoInputUm.value) + Number(elementoInputDois.value)

    alert(`O total da soma é de ${total}`)
}


function subtrair(){
    
    total =  Number(elementoInputUm.value) - Number(elementoInputDois.value)

    alert(`O total da subtração é de ${total}`)
}


function divisao(){
    
    total =  Number(elementoInputUm.value) / Number(elementoInputDois.value)

    alert(`O total da divisão é de ${total}`)
}


function multiplica(){
    
    total =  Number(elementoInputUm.value) * Number(elementoInputDois.value)

    alert(`O total da multiplicação é de ${total}`)
}