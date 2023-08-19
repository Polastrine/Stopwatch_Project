//var

let display = document.getElementById("display");

let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");

let comecar = document.getElementById("comecar");

let cronometroSeg; 
let minutoAtual;
let segundoAtual;

let interval;


// inicio


 for(let i = 0; i <= 59; i++) {
    minutos.innerHTML+=`<option value="${i}">${i}</option>`;
 }

 for(let i = 0; i <= 59; i++) {
   segundos.innerHTML+=`<option value="${i}">${i}</option>`;  
 }

comecar.addEventListener("click", function(){
   minutoAtual = minutos.value;
   segundoAtual = segundos.value;

   // Formatação dos minutos e segundos com dois dígitos
   const minutosFormatado = minutoAtual < 10 ? "0" + minutoAtual : minutoAtual;
   const segundosFormatados = segundoAtual < 10 ? "0" + segundoAtual : segundoAtual;

   display.childNodes[1].innerHTML = minutosFormatado + ":" + segundosFormatados;

   interval = setInterval(function(){
      segundoAtual--;

      if(segundoAtual < 0){
         if(minutoAtual > 0){
            minutoAtual--;
            segundoAtual = 59;

         } else {
           
            document.getElementById("sound").play();
            clearInterval(interval);
            segundosFormatados = "00";
            minutosFormatado = "00";
         }
      }

      // Formatação dos minutos e segundos com dois dígitos
      const minutosFormatado = minutoAtual < 10 ? "0" + minutoAtual : minutoAtual;
      const segundosFormatados = segundoAtual < 10 ? "0" + segundoAtual : segundoAtual;

      display.childNodes[1].innerHTML = minutosFormatado + ":" + segundosFormatados;
   }, 1000);
});
 