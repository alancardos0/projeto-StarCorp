import axios from "axios";

async function entrarEmContatoComApi() {
  axios
    .get("https://www.selida.com.br/avaliacaotecnica/api/Pessoas/GetAll", {
      headers: {
        chave: "AED57B57-F588-4AB7-AD02-DD99B49D44AF",
      },
    })
    .then((res) => {
      console.log(res.data);
    });
}

function adicionaDados(nome, dataNascimento, idade, email, telefone, celular) {
  const dadosDaPessoa = {
    nome: nome,
    dataNascimento: dataNascimento,
    idade: idade,
    email: email,
    telefone: telefone,
    celular: celular,
  };

  axios
    .post(
      "https://www.selida.com.br/avaliacaotecnica/api/Pessoas",
      dadosDaPessoa,
      {
        headers: {
          chave: "AED57B57-F588-4AB7-AD02-DD99B49D44AF",
        },
      }
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

adicionaDados();
