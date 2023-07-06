function validarLogin(event) {
  event.preventDefault();

  const loginElement = document.getElementById("usuario");
  const senhaElement = document.getElementById("senha");

  const login = loginElement.value;
  const senha = senhaElement.value;

  const xmlString = `<usuarios>
    <usuario>
      <login>login1</login>
      <senha>senha1</senha>
      <ativo>true</ativo>
    </usuario>
    <usuario>
      <login>login2</login>
      <senha>senha2</senha>
      <ativo>true</ativo>
    </usuario>
  </usuarios>`;

  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");
  const usuarios = xmlDoc.getElementsByTagName("usuario");

  let usuarioEncontrado = null;

  for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i];
    const loginUsuario = usuario.getElementsByTagName("login")[0].textContent;
    const senhaUsuario = usuario.getElementsByTagName("senha")[0].textContent;

    if (login === loginUsuario && senha === senhaUsuario) {
      usuarioEncontrado = usuario;
      break;
    }
  }

  if (usuarioEncontrado) {
    const ativo = usuarioEncontrado.getElementsByTagName("ativo")[0].textContent;
    if (ativo === "true") {
      // Redirecionar para outra página
      window.location.href = "gestao.html";
    } else {
      // Retornar mensagem de usuário inativo
      document.getElementById("mensagem").innerHTML = "Usuário inativo.";
    }
  } else {
    // Retornar mensagem de usuário/senha inválidos
    document.getElementById("mensagem").innerHTML = "Usuário ou senha inválidos.";
  }
}



function redirecionar() {
  window.location.href = "pages/longin_gestao.html#principal";
}




function abrirJanela() {
  var largura = 1080;
  var altura = 960;
  
  var x = (screen.width - largura) / 2;
  var y = (screen.height - altura) / 2;
  
  var janela = window.open("pages/longin_gestao.html", "JanelaGestao", "width=" + largura + ", height=" + altura + ", left=" + x + ", top=" + y);
  
  // Verificar as credenciais de login
  var loginCorreto = true; // Defina como false se o login não estiver correto
  
  // Redirecionar para a página longin_gestao.html somente se o login estiver correto
  if (loginCorreto) {
    janela.onload = function() {
      window.location.href = window.location.href; // Redirecionar para a página anterior
      janela.close(); // Fechar a janela aberta
    };
  } else {
    janela.close(); // Fechar a janela se o login não estiver correto
  }
}




