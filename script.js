import axios from "axios";

function cadastroDeEndereco() {
  const logradouro = document.getElementById("logradouro");
  const numero = document.getElementById("numero");
  const bairro = document.getElementById("bairro");
  const cidade = document.getElementById("cidade");
  const uf = document.getElementById("uf");
}

const url = `https://www.selida.com.br/avaliacaotecnica/api/`;

class Api {
  static async getAdress() {
    const dados = axios
      .get(`${url}endereco`)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

Api.getAdress();
