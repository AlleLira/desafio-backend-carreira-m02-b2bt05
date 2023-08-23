const { contas, depositos, saques, transferencias } = require("../bancodedados")


// Estrutura para a realização de depósitos nas contas bancárias.
const deposito = (req, res) => {
    const { numero_conta, valor} = req.body;
    
    if(!numero_conta || valor === undefined){
        return res.status(400).json({ mensagem: 'O número da conta e o valor são obrigatórios!'});
    }
  
    if( valor <= 0){
        return res.status(400).json({ mensagem: 'O valor do depósito deve ser mais que zero.'});
    }

    const depositoConta = contas.find( conta => conta.numero === numero_conta);
 
    depositoConta.saldo += valor;

    const transacao = {
        data: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        numero_conta: numero_conta,
        valor: valor
    };

    depositos.push(transacao);
    
    return res.status(200).send();

};

//Estrutura para a realização de saque nas contas bancárias.
const saque = (req, res) => {
    const { numero_conta, valor, senha} = req.body;

    if(!numero_conta || valor === undefined || !senha){
        return res.status(400).json({ mensagem: 'O número da conta, valor e senha são obrigatórios'});
    }
    const contaLocalizada = contas.find( conta => conta.numero === numero_conta);

    if(senha !== contaLocalizada.usuario.senha){
        return res.status(401).json({ mensagem: 'A senha informa é inválida!'})
    }

    if( valor <= 0){
        return res.status(400).json({ mensagem: 'O valor do saque deve ser mais que zero.'});
    }

    if( valor > contaLocalizada.saldo){
        return res.status(400).json({ mensagem: 'Saldo insuficiente.'});
    }
 
    contaLocalizada.saldo -= valor;

    const transacao = {
        data: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        numero_conta: numero_conta,
        valor: valor 
    };

    saques.push(transacao);

    return res.status(200).send();

};

//Estrutura para efetuar transferências entre contas.
const transferencia = (req, res) => {
    const { numero_conta_origem, numero_conta_destino, valor, senha} = req.body;

    if(!numero_conta_origem || !numero_conta_destino || valor === undefined || !senha){
        return res.status(400).json({ mensagem: 'O número da conta e o valor são obrigatórios'});
    }
    const contaOrigemLocalizada = contas.find( conta => conta.numero === numero_conta_origem);
            if(!contaOrigemLocalizada){
                return res.status(404).json({ mensagem: 'Número de conta não encontrado!'});
            }

    const contaDestinoLocalizada = contas.find( conta => conta.numero === numero_conta_destino);
            if(!contaDestinoLocalizada){
                return res.status(404).json({ mensagem: 'Número de conta não encontrado!'});
            }

    if(senha !== contaOrigemLocalizada.usuario.senha){
        return res.status(401).json({ mensagem: 'A senha informa é inválida!'})
    }

    if( valor <= 0){
        return res.status(400).json({ mensagem: 'O valor da transferência deve ser maior que zero.'});
    }

    if( valor > contaOrigemLocalizada.saldo){
        return res.status(403).json({ mensagem: 'Saldo insuficiente.'});
    }
 
    contaOrigemLocalizada.saldo -= valor;

    contaDestinoLocalizada.saldo += valor;

    const transacao = {
        data: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        numero_conta_origem: numero_conta_origem,
        numero_conta_destino: numero_conta_destino,
        valor: valor
    };

    transferencias.push(transacao);


    return res.status(200).send();

};

//Estrutura para verificar extrato das contas.
const extrato = (req, res) => {
    const numero_conta = req.query.numero_conta;
    

    const transferenciasEnviadas = transferencias.filter(transferencia => transferencia.numero_conta_origem === numero_conta);
    const transferenciasRecebidas = transferencias.filter(transferencia => transferencia.numero_conta_destino === numero_conta);

    const formato = {
        depositos: depositos.filter(deposito => deposito.numero_conta === numero_conta),
        saques: saques.filter(saque => saque.numero_conta === numero_conta),
        transferenciasEnviadas: transferenciasEnviadas,
        transferenciasRecebidas: transferenciasRecebidas,
    };

    return res.status(200).json(formato);
}

module.exports = {
    deposito,
    saque,
    transferencia,
    extrato
}