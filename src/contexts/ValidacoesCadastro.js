import React, { createContext } from "react";
import { validarCpf, validarNome, validarSenha } from "../models/cadastro";

const ValidacoesCadastro = React.createContext({
  cpf: semValidacao,
  senha: semValidacao,
  nome: semValidacao,
});

function semValidacao(dados) {
  console.log(dados);
  return { valido: true, texto: "" };
}
export default ValidacoesCadastro;
