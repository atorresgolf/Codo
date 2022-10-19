document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("form_contacto").addEventListener('submit', validarFormulario );
})  ; 

function validarFormulario(evento){
    evento.preventDefault();
    var nombre = document.getElementById('').value;
    if(nombre.length == 0){
        alert('No has escrito tu nombre');
        return;
    }
    var apellido = document.getElementById('apellido').value;
    if(apellido.length == 0){
        alert('No has escrito tu apellido');
        return;
    }
    var email = document.getElementById('email').value;
    if(email.length == 0){
        alert('No has escrito tu email');
        return;
    }
    this.submit();

}
/**Validar email**/
var email = document.getElementById('email').value;

function validarEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)){
     alert("La dirección de email " + email + " es correcta.");
    } else {
     alert("La dirección de email es incorrecta.");
    }
  }


  let valor = document.getElementById('email').value;
  function validarEmail(valor) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
     alert("La dirección de email " + valor + " es correcta.");
    } else {
     alert("La dirección de email es incorrecta.");
    }
  }

   