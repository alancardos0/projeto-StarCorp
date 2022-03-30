import axios from "axios";

axios
  .get("https://www.selida.com.br/avaliacaotecnica/api/Pessoas/GetAll", {
    headers: {
      chave: "AED57B57-F588-4AB7-AD02-DD99B49D44AF",
    },
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.error(error);
  });

/*const adicionaDados = axios
    .post(`${url}`, {
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

  console.log(adicionaDados);*/
