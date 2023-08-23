const express = require('express');
const {banco, contas}= require('../bancodedados');


//Estrtura verifica senha do banco para exibir todas as contas bancárias.
const passwordContas = (req, res, next) =>{
    const senha = req.query.senha_banco;

    if(!senha){
        return res.status(400).json({ mensagem: 'A senha não foi informada!'});
    }

    
    if(senha !== banco.senha){
        return res.status(401).json({ mensagem: 'A senha do banco informada é inválida!'});
    }

    next();

}

// Estrtura verifica senha para solicitar informações das contas, saldo e extrato.
const passwordInfo = (req, res, next) =>{
    const numero_conta = req.query.numero_conta;
    const senha = req.query.senha;

    if(!senha || !numero_conta){
        return res.status(400).json({ mensagem: 'A senha e/ou número da conta não foram informados!'});
    }

    const contaLocalizada = contas.find( conta => conta.numero === numero_conta);
    
    if(!contaLocalizada){
        return res.status(401).json({ mensagem: 'Conta informada inválida'});
    }

    if(senha !== contaLocalizada.usuario.senha){
        return res.status(401).json({ mensagem: 'A senha informa é inválida!'})
    }

    next();

}

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


module.exports = {
    verificarNumConta,
    verNumContaTrans,
    validarCampo,
    passwordContas,
    passwordInfo
  }