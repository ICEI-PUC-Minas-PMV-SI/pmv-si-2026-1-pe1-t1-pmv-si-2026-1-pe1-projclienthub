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
| RF-013 | Exibir cards com total de clientes ativos e percentual/quantidade de inadimplentes                                                   | Pietro        | perfilCliente.html, perfilCliente.js                       |
| RF-014 | Exibir gráfico de distribuição de clientes por faixa de score e volume de produtos contratados por tipo                              | Pietro        | perfilCliente.html, perfilCliente.js                       |
| RF-016 | Gerar relatório com base nos filtros ativos e exibir prévia dos dados antes de confirmar a exportação                                | Rodrigo       | buscaCliente.html, buscaCliente.js                         |
| RF-017 | Exportar relatório em Excel (.xlsx) com colunas tipadas e em CSV compatível com Power BI                                             | Rodrigo       | buscaCliente.html, buscaCliente.js                         |
| RF-018 | Registrar em log cada exportação realizada com usuário, data e filtros aplicados                                                     | Rodrigo       | buscaCliente.html, buscaCliente.js                         |

---

## Descrição das Estruturas de Dados

---

