var pesoElement   = document.querySelector('#peso input');
var alturaElement = document.querySelector('#altura input');
var buttonElement = document.querySelector('#calculadora button')

function calculoImc(){
    var peso = pesoElement.value;
    var altura = alturaElement.value;

    var resultadoImc = peso / (altura * altura);

    alert('o seu imc é de: ' + resultadoImc)
}

