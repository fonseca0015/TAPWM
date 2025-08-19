function validar() {

  const els = document.formulario.elements;

  const nome = els["nome"].value.trim();
  const email = els["email"].value.trim();
  const comentario = els["comentario"].value.trim();
  const pesquisaMarcada = document.querySelector('input[name="pesquisa"]:checked');


  if (nome.length < 10) {
    alert("O nome deve ter pelo menos 10 caracteres.");
    els["nome"].focus();
    return false;
  }


  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    alert("Digite um email válido.");
    els["email"].focus();
    return false;
  }


  if (comentario.length < 20) {
    alert("O comentário deve ter no mínimo 20 caracteres.");
    els["comentario"].focus();
    return false;
  }


  if (!pesquisaMarcada) {
    alert("Selecione uma opção na pesquisa (Sim ou Não).");
    return false;
  }

  if (pesquisaMarcada.value === "sim") {
    alert("Que bom que você voltou a visitar esta página!");
  } else {
    alert("Volte sempre a esta página!");
  }

  return true;
}
