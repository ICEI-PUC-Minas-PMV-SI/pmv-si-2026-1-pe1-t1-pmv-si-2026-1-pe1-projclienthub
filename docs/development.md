# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

| ID     | Descrição do Requisito                                                                                                               | Responsável   | Artefato Criado                                            |
|--------|--------------------------------------------------------------------------------------------------------------------------------------|---------------|------------------------------------------------------------|
| RF-004 | Listar, cadastrar e editar usuários com nome, e-mail, perfil de acesso e status                                                      | Davi          | userPermissions.js, criarConta.html              |
| RF-005 | Definir e restringir perfis de acesso (Administrador, Analista, Gerente, Operador), bloqueando áreas não autorizadas                 | Davi          | confirmacaoContaCriada.html, gerenciarUsuarios.js |
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

# Requisitos 04 e 05 - Davi

- Usuario acessa pagina criarConta.html e preenche os campos com seus dados;
- Estrutura HTML "form" para JSON e armazenada em localStorage;
- Concatenando os formularios de dados e senha em um unico objeto;
- Redirecionamento para confirmacaoContaCriada.html;

# Requisitos 06, 07, 08 - Giovanna

- Usuario acessa pesquisa.html e preenche com o nome, cpf ou id do cliente;
- Fetch com base em database_CH.json, checa os objetos para o dado fornecido;
- Retorna o objeto formatado e em elemento HTML na pagina;
- Pagina de pesquisa mostra ate 10 clientes por paginação;

# Requisitos 13,14 - Pietro

- Usuario acessa dashboard.html;
- Fetch nos dados de database_CH.json e checa objetos pelos campos filtrados;
- Retorna elemento HTML chart com grafico de adimplentes/inadimplentes e score;
- Em perfilCliente.html, grafico de clientes ativos e inativos;

# 16,17,18 - Rodrigo



