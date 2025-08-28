function abrirModalP() {
    document.getElementById("modalP").style.display = "block";
  }

  function fecharModalP() {
    document.getElementById("modalP").style.display = "none";
  }

  // Fecha o modal se clicar fora dele
  window.onclick = function (event) {
    const modalP = document.getElementById("modalPerfil");
    if (event.target === modalP) {
      modalP.style.display = "none";
    }
  };
