import axios from "axios";
import { cadastroDeEndereco } from "./main.js";

const url = `https://www.selida.com.br/avaliacaotecnica/`;

class Api {
  static getAdress() {
    const inserirCliente = axios
      .get(`${url}api/Endereco`, {
        Authorization: "AED57B57-F588-4AB7-AD02-DD99B49D44AF",
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

Api.getAdress();

/*
function addNewUser() {
  axios
    .post(`${url}api/Endereco`, {
      Authorization: "AED57B57-F588-4AB7-AD02-DD99B49D44AF",
      logradouro: "Alan",
      numero: "Matheus",
      bairro: "cardoso",
      cidade: "do",
      uf: "Amaral",
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

addNewUser();
*/
