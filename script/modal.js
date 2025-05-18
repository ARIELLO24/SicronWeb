function abrirModal() {
    document.getElementById("modalDoacao").style.display = "block";
  }

  function fecharModal() {
    document.getElementById("modalDoacao").style.display = "none";
  }

  // Fecha o modal se clicar fora dele
  window.onclick = function (event) {
    const modal = document.getElementById("modalDoacao");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };