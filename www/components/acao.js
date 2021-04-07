// This is a JavaScript file
var textoDisplay = "";

//Valor 1 das operações
var valor1 = 0;
var valor2 = 0;
var resultado = 0;

//identificar operador do calculo
var operador = "";

//função para zerar o display
function zerarDisplay(){
  textoDisplay = "";
  $(".display").val("");
}

//Programação dos numeros
$(document).on("click",".botao",function(){
  textoDisplay += $(this).val();
  $(".display").val(textoDisplay);
})

//Programação dos operadores
$(document).on("click", ".OP", function(){
  operador = $(this).html();
  valor1 = textoDisplay;
  zerarDisplay();
})

//Programação do Botão CE (tentando fazer sozinho)
$(document).on("click", ".ce", function(){
  zerarDisplay();
  $(".display").val("0");
  valor1 = 0;
})  //Consegui :))))

$(document).on("click","#igual", function(){
   valor2 =  textoDisplay;
   zerarDisplay();

   if(operador == "+"){
        textoDisplay = parseFloat(valor1) + parseFloat(valor2); 
        }

   if(operador == "-"){
        textoDisplay = parseFloat(valor1) - parseFloat(valor2); 
        }

   if(operador == "/"){
        textoDisplay = parseFloat(valor1) / parseFloat(valor2); 
        }

   if(operador == "*"){
        textoDisplay = parseFloat(valor1) * parseFloat(valor2); 
        }
   $(".display").val(textoDisplay);
})