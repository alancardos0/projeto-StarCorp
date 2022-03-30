const adicionaDados = require("./main.js");

function cadastrarPessoas() {
  const nome = document.getElementById("nome").value;
  const dataNascimento = document.getElementById("dataNascimento").value;
  const idade = document.getElementById("idade").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const celular = document.getElementById("celular").value;

  adicionaDados(nome, dataNascimento, idade, email, telefone, celular);
}
