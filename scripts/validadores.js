function validarUsuario(event){

    event.preventDefault();
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;


    //console.log("Nome: " + usuario);
    //console.log("Email: " + senha);

    var xml = carregarXML("usuarioGestao");

    // Percorrendo os elementos do XML
    for (var i = 0; i < dados.length; i++) {
        valor1 = dados[i].getElementsByTagName("valor1")[0].textContent;
        valor2 = dados[i].getElementsByTagName("valor2")[0].textContent;
        valor3 = dados[i].getElementsByTagName("valor3")[0].textContent;

        // Exibindo os valores no console
        console.log("Valor 1: " + valor1);
        console.log("Valor 2: " + valor2);
        console.log("Valor 3: " + valor3);
    }
}

function carregarXML(nome) {
    fetch('../arquivos/xml' + nome)
    .then(response => response.text())
    .then(data => {
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(data, 'application/xml');

      // Acessar e manipular o XML como necessário
    })

    return xmlDoc;
};

