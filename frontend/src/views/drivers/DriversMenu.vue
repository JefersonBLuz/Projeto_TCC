<template>
    <div>
      <h1>Cadastro de Pessoas</h1>
  
      <!-- Botão para adicionar nova pessoa -->
      <button @click="adicionarPessoa">Adicionar Pessoa</button>
  
      <!-- Formulários dinâmicos -->
      <form v-for="(pessoa, index) in pessoas" :key="index" @submit.prevent="enviarFormulario">
        <h3>Pessoa {{ index + 1 }}</h3>
        <label for="nome">Nome:</label>
        <input type="text" v-model="pessoa.nome" required /><br />
  
        <label for="idade">Idade:</label>
        <input type="number" v-model="pessoa.idade" required /><br />
  
        <label for="email">Email:</label>
        <input type="email" v-model="pessoa.email" required /><br />
  
        <hr />
      </form>
  
      <!-- Botão para enviar todos os dados -->
      <button @click="enviarFormulario">Enviar para Banco de Dados</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pessoas: [] // Lista de pessoas que serão cadastradas
      };
    },
    methods: {
      // Adiciona um novo objeto pessoa ao array
      adicionarPessoa() {
        if (this.pessoas.length < 10) {
          this.pessoas.push({
            nome: '',
            idade: '',
            email: ''
          });
        } else {
          alert("Você pode adicionar no máximo 10 pessoas.");
        }
      },
  
      // Envia os dados do formulário para o banco de dados
      enviarFormulario() {
        // Aqui você pode fazer a chamada para o backend
        // Exemplo com Fetch API (método POST para um endpoint)
        const dados = this.pessoas;
  
        fetch('http://seu-backend.com/api/cadastrar-pessoas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dados)
        })
          .then(response => response.json())
          .then(data => {
            alert("Pessoas cadastradas com sucesso!");
            console.log(data);
          })
          .catch(error => {
            alert("Erro ao cadastrar pessoas.");
            console.error(error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilo simples para melhorar a visualização do formulário */
  h1 {
    color: #333;
  }
  
  form {
    margin-bottom: 20px;
  }
  
  label {
    font-weight: bold;
  }
  
  input {
    margin-bottom: 10px;
  }
  
  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  