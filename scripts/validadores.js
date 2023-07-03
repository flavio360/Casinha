function validarUsuario(event){
    event.preventDefault();
    var formData = new formData(event.target);

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;


    console.log("Nome: " + usuario);
    console.log("Email: " + senha);
}