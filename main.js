import axios from "axios";

function adicionaDados(nome, dataNascimento, idade, email, telefone, celular) {
  axios
    .post(`https://www.selida.com.br/avaliacaotecnica/api/Pessoas/`, {
      nome: nome,
      dataNascimento: dataNascimento,
      idade: idade,
      email: email,
      telefone: telefone,
      celular: celular,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

console.log(adicionaDados("alan"));
