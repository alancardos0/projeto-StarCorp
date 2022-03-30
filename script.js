import axios from "axios";
let btn = document.getElementById("btn");
btn.addEventListener("click", cadastrarPessoas());

function cadastrarPessoas() {
  const nome = document.getElementById("nome").value;
  const dataNascimento = document.getElementById("dataNascimento").value;
  const idade = document.getElementById("idade").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const celular = document.getElementById("celular").value;
  const url = `https://www.selida.com.br/avaliacaotecnica/api/Pessoas`;

  alert("salve");
}
