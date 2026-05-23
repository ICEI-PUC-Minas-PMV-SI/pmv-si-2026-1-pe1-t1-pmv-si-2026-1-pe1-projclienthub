# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

| ID     | Descrição do Requisito                                                                                                               | Responsável   | Artefato Criado                                            |
|--------|--------------------------------------------------------------------------------------------------------------------------------------|---------------|------------------------------------------------------------|
| RF-001 | Exibir tela de login com campos de usuário e senha, validar credenciais e exibir mensagem de erro em caso de falha                   | Leorges          | login.html, esqueceuSenha.html              |
| RF-002 | Bloquear acesso após tentativas inválidas consecutivas e encerrar sessão automaticamente por inatividade                             | Leorges          | login.html, esqueceuSenha.html                |
| RF-004 | Listar, cadastrar e editar usuários com nome, e-mail, perfil de acesso e status                                                      | Davi          | userPermissions.js, criarConta.html              |
| RF-005 | Definir e restringir perfis de acesso (Administrador, Analista, Gerente, Operador), bloqueando áreas não autorizadas                 | Davi          | confirmacaoContaCriada.html, userPermissions.js |
| RF-006 | Pesquisar cliente por CPF/CNPJ ou ID interno exibindo nome completo e identificação para confirmação                                 | Giovanna      | pesquisa.html, pesquisa.js                         |
| RF-007 | Pesquisar cliente por nome com autocompletar a partir do 2º caractere                                                                | Giovanna      | pesquisa.html, pesquisa.js                         |
| RF-008 | Listar clientes com paginação, total de registros e ordenação ascendente/descendente por qualquer coluna                             | Giovanna      | perfilCliente.html, perfilCliente.js                         |
| RF-013 | Exibir cards com total de clientes ativos e percentual/quantidade de inadimplentes                                                   | Pietro        | dashboard.html, dashboard.js                       |
| RF-014 | Exibir gráfico de distribuição de clientes por faixa de score e volume de produtos contratados por tipo                              | Pietro        | dashboard.html, dashboard.js                       |
| RF-016 | Gerar relatório com base nos filtros ativos e exibir prévia dos dados antes de confirmar a exportação                                | Rodrigo       | perfilCliente.html, buscaCliente.js                         |
| RF-017 | Exportar relatório em Excel (.xlsx) com colunas tipadas e em CSV compatível com Power BI                                             | Rodrigo       | perfilCliente.html, buscaCliente.js                         |
| RF-018 | Registrar em log cada exportação realizada com usuário, data e filtros aplicados                                                     | Rodrigo       | perfilCliente.html, buscaCliente.js                         |

---

## Descrição das Estruturas de Dados

---

# Requisitos 01 e 02 - Leorges

- Usuario acessa login.html para acesso ao sistema;
- Preenche os campos com login e senha cadastrados;
- Caso tenta esquecido a senha usuario acessa esqueceuSenha.html;
- Preenche os campos para envio de redefinicao de senha;

Exemplo:

<img width="1207" height="729" alt="image" src="https://github.com/user-attachments/assets/ba3dd288-49fa-4b14-95b3-60113c3c6bd3" />




# Requisitos 04 e 05 - Davi

- Usuario acessa pagina criarConta.html e preenche os campos com seus dados;
- Estrutura HTML "form" para JSON e armazenada em localStorage;
- Concatenando os formularios de dados e senha em um unico objeto;
- Redirecionamento para confirmacaoContaCriada.html;

|  **Nome**      | **Tipo**          | **Descrição**                                           | **Exemplo**                        |
|--------------|---------------------|---------------------------------------------------------|------------------------------------|
| Id           | Numero (Inteiro)    | Identificador único do ClientHub                        | 0001                               |
| Nome         | Texto               | Nome para acessar o sistema                             | Joao Silva                         |
| Email        | Texto               | Email coorporativo do usuario para acesso               | joaosilva@chub.com                 |
| Senha        | Texto               | Senha de acesso à conta da ONG                          | 23Abc!@#                           |

Exemplo:

<img width="1200" height="459" alt="image" src="https://github.com/user-attachments/assets/9651a9ed-374a-4609-834f-f790dab0f866" />


# Requisitos 06, 07, 08 - Giovanna

- Usuario acessa pesquisa.html e preenche com o nome, cpf ou id do cliente;
- Fetch com base em database_CH.json, checa os objetos para o dado fornecido;
- Retorna o objeto formatado e em elemento HTML na pagina;
- Pagina de pesquisa mostra ate 10 clientes por paginação;


|  **Nome**      | **Tipo**          | **Descrição**                                           | **Exemplo**                        |
|--------------|---------------------|---------------------------------------------------------|------------------------------------|
| Id           | Numero (Inteiro)    | Identificador único do ClientHub                        | 0001                               |
| Nome         | Texto               | Nome para acessar o sistema                             | Joao Silva                         |
| CPF          | Texto               | CPF do cliente para busca                               | 123.456.789-10                     |
| Cidade       | Texto               | Cidade do usuario                                       | Curitiba                           |
| Perfil       | Texto               | Perfil investidor                                       | Alto risco                         |
| Score        | Numero (Inteiro)    | Score de credito do usuario                             | 450                                |
| Status       | Texto               | Status de atividade do usuario                          | adimplente                         |

Exemplo:

<img width="1200" height="944" alt="image" src="https://github.com/user-attachments/assets/7152a7f2-0fe9-42d9-8f37-a56b4f32dee6" />


# Requisitos 13,14 - Pietro

- Usuario acessa dashboard.html;
- Fetch nos dados de database_CH.json e checa objetos pelos campos filtrados;
- Retorna elemento HTML chart com grafico de adimplentes/inadimplentes e score;
- Em perfilCliente.html, grafico de clientes ativos e inativos;

  
|  **Nome**                   | **Tipo**          | **Descrição**                             | **Exemplo**                        |
|-----------------------------|-------------------|-------------------------------------------|------------------------------------|
| Total de clientes           | Numero (Inteiro)  | Total de clientes cadastrados             | 100                                |
| Contas Inadimplentes        | Numero (Inteiro)  | Numero de contas inadimplentes            | 20                                 |
| Percentual de inadimplencia | Numero (double)   | Percentual de contas inadimplentes        | 20.00%                             |
| Grafico clientes por score  | Imagem            | Grafico de score baixo, medio e alto      | Baixo                              |

Exemplo:

<img width="1255" height="802" alt="image" src="https://github.com/user-attachments/assets/9ea83c3d-cbf0-43b2-8a09-37abbf487edd" />


# Requisitos 16,17,18 - Rodrigo



