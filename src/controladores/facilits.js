const express = require('express');
const {contas}= require('../bancodedados');
const fs = require('fs');
const bancoDeDados = require("../bancodedados");
const caminhoArq = './bancodedados.js';




// Estrutura de validação de Campos para contas.
const validarCampo =(req, res, next) =>{
    const {nome, cpf, data_nascimento, telefone, email, senha} = req.body;

    const campos = [];

    if(!nome){
        campos.push("nome");
    }
    if(!cpf){
        campos.push("cpf");
    }
    if(!data_nascimento){
        campos.push("data_nascimento");
    }
    if(!telefone){
        campos.push("telefone");
    }
    if(!email){
        campos.push("email");
    }
    if(!senha){
        campos.push("senha");
    }

    if(campos.length > 0){
        return res.status(400).json({ mensagem: `Campos obrigatórios não preenchidos: ${campos}`});
    }

    next();
};

//Estrutura de verificação de número de conta existente.
const verificarNumConta = (req, res, next) => {
    const numeroConta = req.params.numeroConta;
    const contaVerificada = contas.find( conta => conta.numero === numeroConta);

    if(!contaVerificada){
        return res.status(404).json({ mensagem: 'Número de conta não encontrado!'});
    }

    next();
};

// Estrutura de verificação de número de conta existe para efeticar transações.
const verNumContaTrans = (req, res, next) => {
    const {numero_conta} = req.body;


    const contaVerificada = contas.find( conta => conta.numero === numero_conta);

    if(!contaVerificada){
        return res.status(404).json({ mensagem: 'Número de conta não encontrado!'});
    }

    next();
};

//Estrtura verifica se a conta já existe no banco de dados.
function verificarContaExistente (cpf, email){
    return contas.some(conta => conta.usuario.cpf === cpf || conta.usuario.email === email);
}

//Estrutura para escrita, persistencia de dados.
function escrita (depositos, saques, transferencia,contas) {
    fs.writeFile(caminhoArq , `module.exports = ${JSON.stringify(bancoDeDados, null, 4)}`, err =>{
        if(err){
            console.error('Erros ao salvar banco de dados: ', err);
            return res.status(500).json({ mensagem: 'Erro interno do servidor ao salvar os dados.'});
        }
    });
};


module.exports = {
    verificarNumConta,
    verNumContaTrans,
    validarCampo,
    verificarContaExistente,
    escrita
   
  }