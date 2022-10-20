const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const submit = document.getElementById("btn-enviar");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

/*function submitform()
{
     var elForm = document.forms['form'];
     if (!elForm) {
         elForm = document.form;
     }
     elForm.submit();
}*/

form.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
    if(nombre.value.length < 3){
        warnings += `El nombre no es válido <br>`;
        entrar = true;
    }
    if(apellido.value.length < 3){
        warnings += `El apellido no es válido <br>`;
        entrar = true;
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es válido <br>`;
        entrar = true;
    }
    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "Enviado";
        entrar = false
        form.submit();
    }
    
})
