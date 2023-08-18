const bancoDeDados = require("../bancodedados");
const { contas } = require("../bancodedados")
const facilits = require('./facilits');


// Estrtura para listar contas bancárias existente.
const listarContas = (req,res) =>{
    return res.status(200).json(contas);
};

//Estrtura para criação de novas contas bancárias.
const addConta = (req, res) =>{
    const {nome, cpf, data_nascimento, telefone, email, senha} = req.body;

    if(facilits.verificarContaExistente(cpf, email)){
        return res.status(400).json({ mensagem: 'Já existe uma conta com o cpf ou e-mail informado!'});
    }

    const novaConta = {
        numero: (contas.length + 1).toString(),
        saldo: 0,
        usuario:{
            nome,
            cpf,
            data_nascimento,
            telefone,
            email,
            senha
        }    
    }

    contas.push(novaConta);

    facilits.escrita(contas);

    res.status(201).send();
   
};

//Estrutura alterar informações de uma conta já existente.
const editarConta = (req, res) =>{
   const numeroConta = req.params.numeroConta;
   const {nome, cpf, data_nascimento, telefone, email, senha} = req.body;

    if(facilits.verificarContaExistente(cpf, email)){
        return res.status(400).json({ mensagem: 'Já existe uma conta com o cpf ou e-mail informado!'});
    }

    const atualizacaoConta = contas.find( conta => conta.numero === numeroConta);
    atualizacaoConta.usuario.nome = nome;
    atualizacaoConta.usuario.cpf = cpf;
    atualizacaoConta.usuario.data_nascimento = data_nascimento;
    atualizacaoConta.usuario.telefone = telefone;
    atualizacaoConta.usuario.email = email;
    atualizacaoConta.usuario.senha = senha;

    facilits.escrita(contas);

    return res.status(204).send();

};

//Estrtura para deletar contas existents.
const deletarConta = (req, res) =>{
    const numeroConta = req.params.numeroConta;

    const contaLocalizada = contas.find( conta => conta.numero === numeroConta);

    if (contaLocalizada.saldo !== 0){
       return res.status(400).json({ mensagem: 'A conta só pode ser removida se o saldo for zero!'})
    }

    const index = contas.indexOf(facilits.verificarContaExistente);
    contas.splice(index, 1);

    facilits.escrita(contas);

    return res.status(204).send();
};

//Estrtura para exibir o saldo da conta solicitada.
const saldo = (req,res) =>{
    const numero_conta = req.query.numero_conta;

    const contaLocalizada = contas.find( conta => conta.numero === numero_conta);
    const formato = {
        saldo: contaLocalizada.saldo
    };

    return res.status(200).json(formato);
};

module.exports = {
    listarContas,
    addConta,
    editarConta,
    deletarConta,
    saldo
}