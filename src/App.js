import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';
import { Field } from './components/Field';

export default function App() {
  const [id, setId] = useState(0);
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numeroCasa, setNumeroCasa] = useState(0);
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [email, setEmail] = useState("");
  const [profissao, setProfissao] = useState("");
  const [numeroCelular, SetNumeroCelular] = useState("");

  function enviarFormulario() {
    Axios.post("http://localhost:3001/api/insert", {
      id_middle: id,
      nome_middle: nome,
      data_nascimento_middle: dataNascimento,
      cep_middle: cep,
      logradouro_middle: logradouro,
      numero_casa_middle: numeroCasa,
      bairro_middle: bairro,
      cidade_middle: cidade,
      email_middle: email,
      profissao_middle: profissao,
      numero_celular_middle: numeroCelular
    });
  }

  return (
    <div className="container">
      <div className="form">
        <Field title="Digite seu ID:" type="numeric" action={(e)=>{setId(e.target.value)}}></Field>
        <Field title="Digite seu NOME:" type="text" action={(e)=>{setNome(e.target.value)}}></Field>
        <Field title="Digite sua DATA DE NASCIMENTO:" type="text" action={(e)=>{setDataNascimento(e.target.value)}}></Field>
        <Field title="Digite seu CEP:" type="text" action={(e)=>{setCep(e.target.value)}}></Field>
        <Field title="Digite seu LOGRADOURO:" type="text" action={(e)=>{setLogradouro(e.target.value)}}></Field>
        <Field title="Digite o NÚMERO da casa:" type="numeric" action={(e)=>{setNumeroCasa(e.target.value)}}></Field>
        <Field title="Digite seu BAIRRO:" type="text" action={(e)=>{setBairro(e.target.value)}}></Field>
        <Field title="Digite sua CIDADE:" type="text" action={(e)=>{setCidade(e.target.value)}}></Field>
        <Field title="Digite seu EMAIL:" type="text" action={(e)=>{setEmail(e.target.value)}}></Field>
        <Field title="Digite sua PROFISSÃO:" type="text" action={(e)=>{setProfissao(e.target.value)}}></Field>
        <Field title="Digite seu NÚMERO-CELULAR:" type="text" action={(e)=>{SetNumeroCelular(e.target.value)}}></Field>
      </div>

      <button onClick={enviarFormulario}>Cadastrar!</button>
    </div>
  );
}