<img loading="lazy" src="/img/CUBOS BANK.png" width="750%" height="250">

<h1 align="center"> Projeto Cubos Bank </h1>
![Finalizado](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)
## Descrição

Desenvolvimento de uma API para o banco digital "Cubos Bank".

Está API te permite:
- Criar contas bancárias;
- Listar as contas existentes;
- Atualizar os dado dos usuários das contas;
- Exclui uma conta;
- Fazer depósitos em uma conta;
- Fazer saques de valores em uma conta;
- Fazer transfrências entre as contas;
- Consultar o saldo da conta;
- Emitir extrato bancário.

## Organização do código

- Arquivo index para iniciar a plicação;
- Arquivo de banco de dados para a persistencia dos dados;
- Arquivo de rotas, Endpoints;
- Pasta para controladores contendo:
    - Passwaords - Verificas as senhas solicitadas.
    - Conta - Funções relacionadas a conta, como listar contas, criar contas, 
    - Transacoes - Funções relacionadas a transações de conta, como depositos,
    - Facilits - Funções para auxiliar validações de dados obrigatórios nas fu


### EndPoints

Arquivo rotas possui os EndPoints utilizados.
Deve-se utilizar esses endpoints para conversar com a API e fazer suas lateraç

<img loading="lazy" src="/img/endpoints.jpg" width="450" height="350">

### Verificar senhas

-  Para listar contas existente no Banco como adm utilize:

   GET "/contas?senha_banco=Cubos123Bank"  --> Verifica se está utilizando uma

-  Para solicitar saldos e extratos de contas utilize:

   GET "/contas/saldo?numero_conta=123&senha=123" --> Verifica se o número e a

    GET "/contas/extrato?numero_conta=123&senha=123" --> Verifica se o número 

<img loading="lazy" src="/img/passwords.jpg" width="450" height="350">


### Contas e alterações

-Criação de conta:

    POST "/contas"

    Irá cria uma nova conta com um número único, será verificado se o cpf ou e

    Campos de preenchimento obrigatórios para a requisição: 

 ```javascript
// POST /contas
{
    "nome": " ",
    "cpf": " ",
    "data_nascimento": " ",
    "telefone": " ",
    "email": " ",
    "senha": " "
}
```
