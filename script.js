import axios from "axios";
import { cadastroDeEndereco } from "./main.js";

const url = `https://www.selida.com.br/avaliacaotecnica/`;

class Api {
  static async getAdress() {
    const inserirCliente = axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        axios.put(`${url}endereco`, cadastroDeEndereco);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

Api.getAdress();
