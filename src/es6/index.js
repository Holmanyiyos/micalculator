var resultado = document.getElementById('resultado')
var b1 = document.getElementById('b1')
b1.addEventListener('click', numero)
var b2 = document.getElementById('b2')
b2.addEventListener('click', numero)
var b3 = document.getElementById('b3')
b3.addEventListener('click', numero)
var b4 = document.getElementById('b4')
b4.addEventListener('click', numero)
var b5 = document.getElementById('b5')
b5.addEventListener('click', numero)
var b6 = document.getElementById('b6')
b6.addEventListener('click', numero)
var b7 = document.getElementById('b7')
b7.addEventListener('click', numero)
var b8 = document.getElementById('b8')
b8.addEventListener('click', numero)
var b9 = document.getElementById('b9')
b9.addEventListener('click', numero)
var bpunto = document.getElementById('b.')
bpunto.addEventListener('click', numero)
var b0 = document.getElementById('b0')
b0.addEventListener('click', numero)
var bC = document.getElementById('bC')
bC.addEventListener('click', borrar)
var suma = document.getElementById('suma')
suma.addEventListener('click', paso2)
var resta = document.getElementById('resta')
resta.addEventListener('click', paso2)
var mult = document.getElementById('mult')
mult.addEventListener('click', paso2)
var div = document.getElementById('div')
div.addEventListener('click', paso2)
var igual = document.getElementById('igual')
igual.addEventListener('click', igualResp)


var num1 = 0
var num2 = 0
var total = 0 
var valor = ""
var op = 0

function paso2(){
        op = this.value
        valor = ""
}

function numero(){ 
        if(op == 0){
            if(this.value == "." && valor == ""){
                valor = "0"+this.value;
                resultado.innerHTML = valor;
                num1 = parseFloat(valor)
            } else{
                valor =  String(valor+this.value)
                resultado.innerHTML = valor;
                num1 = parseFloat(valor)
            } 
        } else{
            if(this.value == "." && valor == ""){
                valor = "0"+this.value;
                resultado.innerHTML = valor;
                num2 = parseFloat(valor)
            } else{
                valor =  String(valor+this.value)
                resultado.innerHTML = valor;
                num2 = parseFloat(valor)
        }  
    }   
}
function igualResp(){
    switch (op){
        case 'suma':
            total = num1 + num2
            break
        case 'resta':
            total = num1 - num2
            break
        case 'div':
            total = num1 / num2
            break
        case 'mult':
            total = num1 * num2
            break
    }
    resultado.innerHTML = total
    num1 = total
}
function borrar(){
    num1 = 0;
    num2 = 0;
    valor = "";
    op = 0;
    resultado.innerHTML = ""
    total = "";
}