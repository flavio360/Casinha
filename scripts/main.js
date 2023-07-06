function carregarPagina(event, url) {
    event.preventDefault(); // Impede o comportamento padrão do link

    // Faz uma requisição AJAX para carregar a página desejada
    $.ajax({
      url: url,
      success: function(data) {
        $("#exibir-dados").html(data); // Insere o conteúdo da página na div
      },
      error: function() {
        alert("Ocorreu um erro ao carregar a página");
      }
    });
  }