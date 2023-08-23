
// const n1 = document.getElementById(n1);
// const n2 = document.getElementById(n2); 
// const  resultados = document.getElementById(resultados); 
// const resta = document.getElementById("Resta"); 

function suma(){

  

    var num1 = parseFloat(document.getElementById("n1").value);
    var num2 = parseFloat(document.getElementById("n2").value);


   var r1= num1 + num2; 

   document.getElementById("resultados").innerHTML = "La Suma es de: " + r1;

}


function resta(){

  

    var num1 = parseFloat(document.getElementById("n1").value);
    var num2 = parseFloat(document.getElementById("n2").value);


   var r1= num1 - num2; 

   document.getElementById("resultados").innerHTML = "La Resta es de: " + r1;
}


function Multiplicacion(){

  

    var num1 = parseFloat(document.getElementById("n1").value);
    var num2 = parseFloat(document.getElementById("n2").value);


   var r1= num1 * num2; 

   document.getElementById("resultados").innerHTML = "La multiplicacion es de: " + r1;
}


function Division(){

  

    var num1 = parseFloat(document.getElementById("n1").value);
    var num2 = parseFloat(document.getElementById("n2").value);


   var r1= num1 / num2; 

   document.getElementById("resultados").innerHTML = "La Divicion es de: " + r1;
}



function selecion() {

if('click', resta()){

    resta(); 
} if ('click', Multiplicacion()){

    Multiplicacion(); 
} if ('click',suma()){

    suma()

} if ('click', Division()){


    Division()
}



}; 

// animaciones para el Dom





  





