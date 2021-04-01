var valor;
var resultado;
function button(num){
  valor = document.calculadora.visor.value + num;
}

function reset(){
  document.calculadora.visor.value = '';
}

function calcular(){
  resultado = eval(valor);
  document.calculadora.visor.value = resultado;
}