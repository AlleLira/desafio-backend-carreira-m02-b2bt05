const {banco, contas} = require('../bancodedados');


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

module.exports = {
    passwordContas,
    passwordInfo
};
