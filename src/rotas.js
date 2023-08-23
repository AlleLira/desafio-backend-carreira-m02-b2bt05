const express = require('express');
const conta = require('./controladores/conta');

const transacoes = require('./controladores/transacoes');
const validar = require('./controladores/validacoes');

const rotas = express();


rotas.get('/contas',validar.passwordContas, conta.listarContas);
rotas.post('/contas',validar.validarCampo, conta.addConta);
rotas.put('/contas/:numeroConta/usuario', validar.verificarNumConta, validar.validarCampo, conta.editarConta);
rotas.delete('/contas/:numeroConta', validar.verificarNumConta,conta.deletarConta);
rotas.post('/transacoes/depositar', validar.verNumContaTrans,transacoes.deposito);
rotas.post('/transacoes/sacar', validar.verNumContaTrans,transacoes.saque);
rotas.post('/transacoes/transferir', transacoes.transferencia);
rotas.get('/contas/saldo',validar.passwordInfo, conta.saldo);
rotas.get('/contas/extrato',validar.passwordInfo, transacoes.extrato);

module.exports = rotas;
