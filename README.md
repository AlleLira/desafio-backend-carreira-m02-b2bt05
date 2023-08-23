<img loading="lazy" src="/img/CUBOS BANK.png" width="100%" height="250">
<h1 align="center"> Projeto Cubos Bank </h1>
<p align="center">
<img loading="lazy" src="http://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=GREEN&style=for-the-badge"/>
</p>

# Índice 
* [Descrição](#descrição)
* [Funcionalidades do Projeto](#funcionalidades-do-projeto)
* [Organização do código](#organização-do-código)
* [Tecnologia utilizada](#tecnologia-utilizada)


<hr>

## Descrição
Projeto desenvolvifo para segundo desafio da Cubos Academy + IFood.
Desenvolvimento de uma API para o banco digital "Cubos Bank", que te permite ter funções de administrador como criar contas bancarias, atualiza e excluir essas contas. Além de funcionalidades comuns como depoísitos, saque, e transferências entre contas e também vizualizar saldo e gerar extratos de transações bancárias.

<hr>

## Funcionalidades do Projeto
- `Vizualizar todas as contas existentes`: È acessada através de senha do administrador para poder verificar todas as contas existentes no banco de dados.

    -`Resultasdos e Erros:`

    <img loading="lazy" src="/img/listar-contas.jpg" width="250" height="250"> <img loading="lazy" src="/img/listar-contas-erro.jpg" width="250" height="250"> <img loading="lazy" src="/img/listar-contas-erro.jpg" width="250" height="250">

    <img loading="lazy" src="/img/listar-contas.jpg" width="250" height="250"> <img loading="lazy" src="/img/listar-contas -erro.jpg" width="250" height="250">


- `Cria nova conta`: Te permite criar uma nova conta par aum usuário não existente no banco de dados, caso ele já tenha uma outra conta não será possível criar uma nova, cpf e e-mail são chaves únicas.

    -`Resultasdos e Erros:`
  
    <img loading="lazy" src="/img/add-conta.jpg" width="250" height="250"> <img loading="lazy" src="/img/add-conta-erro.jpg" width="250" height="250">
    
- `Atualizar dados de usuários`: Te permite altera informações de cara usuário pelo número da conta fornecida.
 
     -`Resultasdos e Erros:`
  
    <img loading="lazy" src="/img/atualizar-conta.jpg" width="250" height="250"> <img loading="lazy" src="/img/atualizar-conta-erro.jpg" width="250" height="250">
    
- `Excluir conta`: Te permite excluir uma conta de usuário existente contando que o saldo da conta seja 0.
  
     -`Resultasdos e Erros:`
  
    <img loading="lazy" src="/img/remover-conta.jpg" width="250" height="250"> <img loading="lazy" src="/img/remover-conta-erro.jpg" width="250" height="250">
- `Depositar`: Te permite fazer depósitos na conta informada.
  
     -`Resultasdos e Erros:`
  
    <img loading="lazy" src="/img/deposito.jpg" width="250" height="250"> <img loading="lazy" src="/img/deposito-erro-1.jpg" width="250" height="250"> <img loading="lazy" src="/img/deposito-erro.jpg" width="250" height="250">
- `Saque`: Efetua saques do saldo da conta informada, necessário possúir senha da conta informada.
  
     -`Resultasdos e Erros:`
  
    <img loading="lazy" src="/img/sacar.jpg" width="250" height="250"> <img loading="lazy" src="/img/sacar-erro.jpg" width="250" height="250"> <img loading="lazy" src="/img/sacar-erro-1.jpg" width="250" height="250"> <img loading="lazy" src="/img/sacar-erro-2.jpg" width="250" height="250">
    
- `Transferências`: Efetua transferências entre contas, necessário possúir o número e senha da conta de origem e o número da conta de destino.
  
     -`Resultasdos e Erros:`
  
    <img loading="lazy" src="/img/transferir.jpg" width="250" height="250"> <img loading="lazy" src="/img/transferir-erro.jpg" width="250" height="250"> <img loading="lazy" src="/img/transferir-erro-1.jpg" width="250" height="250"> <img loading="lazy" src="/img/transferir-erro-2.jpg" width="250" height="250">
    
- `Saldo`: Informa o saldo existente na conta informada, necessário pussúir número e senha da conta.
  
     -`Resultasdos e Erros:`
  
    <img loading="lazy" src="/img/saldo.jpg" width="250" height="250"> <img loading="lazy" src="/img/saldo-erro.jpg" width="250" height="250"> <img loading="lazy" src="/img/saldo-erro-1.jpg" width="250" height="250"> <img loading="lazy" src="/img/saldo-erro-2.jpg" width="250" height="250">


- `Extrato bancário`: Exibe extrato de transações bancárias existente em uma conta, necessário possúir número e senha da conta.
  
     -`Resultasdos e Erros:`
  
    <img loading="lazy" src="/img/extrato.jpg" width="250" height="250"> <img loading="lazy" src="/img/extrato-erro.jpg" width="250" height="250"> <img loading="lazy" src="/img/extrato-erro1.jpg" width="250" height="250"> <img loading="lazy" src="/img/extrato-erro2.jpg" width="250" height="250">

<hr>

## Organização do código
- `Arquivo index para iniciar a plicação;`

    <img loading="lazy" src="/img/index.jpg" width="250" height="250">

- `Arquivo de banco de dados para a persistencia dos dados;`

    <img loading="lazy" src="/img/dados.jpg" width="250" height="250">

- `Arquivo de rotas, Endpoints;`

<img loading="lazy" src="/img/rotas.jpg" width="250" height="250">

- `Pasta para controladores contendo:`
    - `Conta - Funções relacionadas a conta, como listar contas, criar contas, atualizar dados, excluir contas, saldos.`

    <img loading="lazy" src="/img/contas 1.jpg" width="250" height="250"> <img loading="lazy" src="/img/contas 2.jpg" width="250" height="250"> <img loading="lazy" src="/img/contas 3.jpg" width="250" height="250">

    - `Transacoes - Funções relacionadas a transações de conta, como depositos, saques, transferências e extrato de transações.`

    <img loading="lazy" src="/img/trans 1.jpg" width="250" height="250"> <img loading="lazy" src="/img/trans 2.jpg" width="250" height="250"> <img loading="lazy" src="/img/trans 3.jpg" width="250" height="250"> <img loading="lazy" src="/img/trans 4.jpg" width="250" height="250">

    - `Validações - Funções para auxiliar validações de dados obrigatórios nas fuções de conta e transações.`

    <img loading="lazy" src="/img/val 1.jpg" width="250" height="250"> <img loading="lazy" src="/img/val 2.jpg" width="250" height="250">
 
<hr>

## Tecnologia utilizada

 - `JavaScript` <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40" />
