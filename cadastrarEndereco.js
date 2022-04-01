import axios from "axios";
import "dotenv/config";
const api_key = process.env.api_key;

function pegarEnderecoNaApi(enderecoId) {
  axios
    .get(
      `https://www.selida.com.br/avaliacaotecnica/api/Endereco/${enderecoId}`,
      {
        headers: {
          chave: api_key,
        },
      }
    )
    .then((resposta) => console.log(resposta))
    .catch((error) => console.error(error));
}
//pegarEnderecoNaApi();

function inserirEnderecoDoClienteNaApi() {
  axios
    .post(
      "https://www.selida.com.br/avaliacaotecnica/api/Endereco",
      {
        pessoaId: 1,
        logradouro: "string",
        numero: 68,
        bairro: "string",
        cidade: "string",
        uf: "sc",
      },
      {
        headers: {
          chave: api_key,
        },
      }
    )
    .then((resposta) => console.log(resposta.data))
    .catch((error) => console.error(error));
}

//inserirEnderecoDoClienteNaApi();

function atualizarEnderecoNaApi(enderecoId) {
  axios
    .put(
      `https://www.selida.com.br/avaliacaotecnica/api/Endereco/${enderecoId}`,
      {
        logradouro: "string",
        numero: 0,
        bairro: "string",
        cidade: "string",
        uf: "sc",
      },
      {
        headers: {
          chave: api_key,
        },
      }
    )
    .then((res) => console.log(res))
    .catch((error) => console.error(error));
}
//metodo put não está funcionando.
//atualizarUsuarioNaApi(1);

function deletarEnderecoDoCliente(enderecoId) {
  axios
    .delete(
      `https://www.selida.com.br/avaliacaotecnica/api/Endereco/${enderecoId}`,
      {
        headers: {
          Chave: api_key,
        },
      }
    )
    .then((resposta) => console.log(resposta))
    .catch((error) => console.error(error));
}
//metodo Delete não está funcionando.
//deletarEnderecoDoCliente(Numero do Id do cliente aqui);

function consultarEnderecoDaPessoaPeloId(enderecoId) {
  axios
    .get(
      `https://www.selida.com.br/avaliacaotecnica/api/Endereco/GetAll/${enderecoId}`,
      {
        headers: {
          chave: api_key,
        },
      }
    )
    .then((resposta) => console.log(resposta.data))
    .catch((error) => console.error(error));
}

//consultarEnderecoDaPessoaPeloId( Numero do usuario aqui);
