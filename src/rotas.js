const express = require('express');
const conta = require('./controladores/conta');
const password = require('./controladores/passwords');
const transacoes = require('./controladores/transacoes');
const facilits = require('./controladores/facilits');

const rotas = express();


rotas.get('/contas',password.passwordContas, conta.listarContas);
rotas.post('/contas',facilits.validarCampo, conta.addConta);
rotas.put('/contas/:numeroConta/usuario', facilits.verificarNumConta, facilits.validarCampo, conta.editarConta);
rotas.delete('/contas/:numeroConta', facilits.verificarNumConta,conta.deletarConta);
rotas.post('/transacoes/depositar', facilits.verNumContaTrans,transacoes.deposito);
rotas.post('/transacoes/sacar', facilits.verNumContaTrans,transacoes.saque);
rotas.post('/transacoes/transferir', transacoes.transferencia);
rotas.get('/contas/saldo',password.passwordInfo, conta.saldo);
rotas.get('/contas/extrato',password.passwordInfo, transacoes.extrato);

module.exports = rotas;
