import axios from "axios";
import "dotenv/config";
const api_key = process.env.api_key;

function entrarEmContatoComApi() {
  axios
    .get("https://www.selida.com.br/avaliacaotecnica/api/Pessoas/GetAll", {
      headers: {
        chave: api_key,
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

//entrarEmContatoComApi();

function adicionaDadosDoUsuarioNaApi() {
  axios
    .post(
      "https://www.selida.com.br/avaliacaotecnica/api/Pessoas",
      {
        nome: "Alan Matheus Cardoso do Amaral",
        dataNascimento: "2003-04-01T03:12:11.054Z",
        idade: 18,
        email: "alammateus077@gmail.com",
        telefone: "string",
        celular: "string",
      },
      {
        headers: {
          Chave: api_key,
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

//adicionaDadosDoUsuarioNaApi();

function fazerAtualizacaoEmDadosDeUsuario(idUsuario) {
  axios
    .put(
      `https://www.selida.com.br/avaliacaotecnica/api/Pessoas/${idUsuario}`,
      {
        nome: "Alan Cardoso",
        dataNascimento: "2022-03-31T21:01:56.686Z",
        idade: 18,
        email: "alammateus077@gmail.com",
        telefone: "string",
        celular: "string",
      },
      {
        headers: {
          chave: api_key,
        },
      }
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => console.log(error));
}

//metodo Put, não está funcionando, o codigo em sí funciona porém a API não está recebendo.
//fazerAtualizacaoEmDadosDeUsuario(9);

function deletarDadosDoUsuario() {
  axios
    .delete(`https://www.selida.com.br/avaliacaotecnica/api/Pessoas/8`, {
      headers: {
        Chave: api_key,
      },
    })
    .then((resposta) => {
      console.log(resposta.data);
    })
    .catch((error) => {
      console.error(error);
    });
}
//Api não está recebendo o metodo Delete.
//deletarDadosDoUsuario();
