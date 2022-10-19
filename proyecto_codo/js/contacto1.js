document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("form").addEventListener('submit', validarFormulario );
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