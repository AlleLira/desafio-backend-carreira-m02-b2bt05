<img loading="lazy" src="/img/CUBOS BANK.png" width="750%" height="250">

<h1 align="center"> Projeto Cubos Bank </h1>

<p align="center">
<img loading="lazy" src="http://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=GREEN&style=for-the-badge"/>
</p>

# Índice 
* [Descrição](#descrição)
* [Funcionalidades do Projeto](#funcionalidades-do-projeto)
* [Organização do código](#organização-do-código)
* [Tecnologia utilizada](#tecnologia-utilizada)


## Descrição
Projeto desenvolvifo para segundo desafio da Cubos Academy + IFood.

Desenvolvimento de uma API para o banco digital "Cubos Bank", que te permite ter funções de administrador como criar contas bancarias, atualiza e excluir essas contas. Além de funcionalidades comuns como depoísitos, saque, e transferências entre contas e também vizualizar saldo e gerar extratos de transações bancárias.

<hr>

# 🔨 Funcionalidades do Projeto

- `Vizualizar todas as contas existentes`: È acessada através de senha do administrador para poder verificar todas as contas existentes no banco de dados.
- `Cria nova conta`: Te permite criar uma nova conta par aum usuário não existente no banco de dados, caso ele já tenha uma outra conta não será possível criar uma nova, cpf e e-mail são chaves únicas.
- `Atualizar dados de usuários`: Te permite altera informações de cara usuário pelo número da conta fornecida.
- `Excluir conta`: Te permite excluir uma conta de usuário existente contando que o saldo da conta seja 0.
- `Depositar`: Te permite fazer depósitos na conta informada.
- `Saque`: Efetua saques do saldo da conta informada, necessário possúir senha da conta informada.
- `Transferências`: Efetua transferências entre contas, necessário possúir o número e senha da conta de origem e o número da conta de destino.
- `Saldo`: Informa o saldo existente na conta informada, necessário pussúir número e senha da conta.
- `Extrato bancário`: Exibe extrato de transações bancárias existente em uma conta, necessário possúir número e senha da conta.

<hr>

# 📑 Organização do código

- `Arquivo index para iniciar a plicação;`
- `Arquivo de banco de dados para a persistencia dos dados;`
- `Arquivo de rotas, Endpoints;`
- `Pasta para controladores contendo:`
    - `Passwaords - Verificas as senhas solicitadas.`
    - `Conta - Funções relacionadas a conta, como listar contas, criar contas, atualizar dados, excluir contas, saldos.`
    - `Transacoes - Funções relacionadas a transações de conta, como depositos, saques, transferências e extrato de transações.`
    - `Facilits - Funções para auxiliar validações de dados obrigatórios nas fuções de conta e transações, além da escrita da persistencia de dados.`
 
<hr>

# 💻 Tecnologia utilizada
 - `JavaScript` <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="20" height="20" />

