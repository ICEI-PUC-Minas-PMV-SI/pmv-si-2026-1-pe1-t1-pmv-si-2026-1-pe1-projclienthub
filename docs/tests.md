# Plano de Testes de Software

## Visão Geral

| Item | Valor |
|------|-------|
| Total de requisitos | 10 |
| Total de casos de teste | 10 |
| Responsáveis | Leorges, Davi, Giovanna, Pietro |
| Abordagem | Caixa preta |

---

## RF-001 — Login e autenticação

**Responsável:** Leorges  
**Arquivos:** `login.html`, `esqueceuSenha.html`  
**Descrição:** Exibir tela de login com campos de usuário e senha, validar credenciais e exibir mensagem de erro em caso de falha.

---

**Caso de Teste** | **CT-01 — Login com credenciais válidas**
:--------------: | ------------
**Procedimento** | 1) Acesse a página `login.html` <br> 2) Insira usuário e senha válidos <br> 3) Clique em "Entrar"
**Requisito associado** | RF-001
**Arquivos** | `login.html`
**Dados de entrada** | Usuário e senha cadastrados e ativos no sistema (localStorage)
**Resultado esperado** | Usuário autenticado e redirecionado para a tela de Dashboard
**Resultado obtido** | Autenticado e redirecionado para página de Dashboard

---

**Caso de Teste** | **CT-02 — Login com credenciais inválidas**
:--------------: | ------------
**Procedimento** | 1) Acesse a página `login.html` <br> 2) Insira usuário ou senha incorretos <br> 3) Clique em "Entrar"
**Requisito associado** | RF-001
**Arquivos** | `login.html`
**Dados de entrada** | Usuário inexistente ou senha incorreta
**Resultado esperado** | Exibição de mensagem de erro informando credenciais inválidas
**Resultado obtido** | Alerta de falha no login e senha

---

## RF-004 — Gestão de usuários

**Responsável:** Davi  
**Arquivos:** `userPermissions.js`, `criarConta.html`  
**Descrição:** Listar, cadastrar com nome, e-mail, perfil de acesso e status.

---

**Caso de Teste** | **CT-03 — Cadastrar novo usuário com dados válidos**
:--------------: | ------------
**Procedimento** | 1) Acesse `criarConta.html` <br> 2) Preencha nome, e-mail, perfil de acesso e status <br> 3) Clique em "Salvar"
**Requisito associado** | RF-004
**Arquivos** | `criarConta.html`, `userPermissions.js`
**Dados de entrada** | Nome, e-mail único, perfil e status válidos
**Resultado esperado** | Usuário cadastrado e exibido na listagem
**Resultado obtido** | Usuário cadastrado como objeto em localStorage

---

## RF-006 — Pesquisa por CPF/CNPJ ou ID interno

**Responsável:** Giovanna  
**Arquivos:** `pesquisa.html`, `pesquisa.js`  
**Descrição:** Pesquisar cliente por CPF/CNPJ ou ID interno exibindo nome completo e identificação para confirmação.

---

**Caso de Teste** | **CT-04 — Busca por CPF válido**
:--------------: | ------------
**Procedimento** | 1) Acesse `pesquisa.html` <br> 2) Informe um CPF válido no campo de busca <br> 3) Confirme a pesquisa
**Requisito associado** | RF-006
**Arquivos** | `pesquisa.html`, `pesquisa.js`
**Dados de entrada** | CPF de um cliente ativo no sistema
**Resultado esperado** | Nome completo e identificação do cliente exibidos para confirmação
**Resultado obtido** | 

---

**Caso de Teste** | **CT-05 — Busca por CNPJ válido**
:--------------: | ------------
**Procedimento** | 1) Acesse `pesquisa.html` <br> 2) Informe um CNPJ válido no campo de busca <br> 3) Confirme a pesquisa
**Requisito associado** | RF-006
**Arquivos** | `pesquisa.html`, `pesquisa.js`
**Dados de entrada** | CNPJ de um cliente ativo no sistema
**Resultado esperado** | Razão social e identificação do cliente exibidos para confirmação
**Resultado obtido** | Pendente

---

## RF-007 — Pesquisa por nome com autocompletar

**Responsável:** Giovanna  
**Arquivos:** `pesquisa.html`, `pesquisa.js`  
**Descrição:** Pesquisar cliente por nome com autocompletar a partir do 2º caractere.

---

**Caso de Teste** | **CT-06 — Autocompletar ativado a partir do 2º caractere**
:--------------: | ------------
**Procedimento** | 1) Acesse `pesquisa.html` <br> 2) Digite 1 caractere no campo de nome e verifique que o autocompletar NÃO é ativado <br> 3) Digite o 2º caractere e verifique que as sugestões aparecem
**Requisito associado** | RF-007
**Arquivos** | `pesquisa.html`, `pesquisa.js`
**Dados de entrada** | Clientes com nomes iniciados com os caracteres inseridos
**Resultado esperado** | Sugestões de nomes exibidas a partir do 2º caractere digitado
**Resultado obtido** | Pendente

---

## RF-008 — Listagem de clientes com paginação e ordenação

**Responsável:** Giovanna  
**Arquivos:** `perfilCliente.html`, `perfilCliente.js`  
**Descrição:** Listar clientes com paginação, total de registros e ordenação ascendente/descendente por qualquer coluna.

---

**Caso de Teste** | **CT-07 — Exibição da listagem paginada com total de registros**
:--------------: | ------------
**Procedimento** | 1) Acesse `perfilCliente.html` <br> 2) Observe a listagem de clientes <br> 3) Verifique o total de registros exibido e os controles de paginação
**Requisito associado** | RF-008
**Arquivos** | `perfilCliente.html`, `perfilCliente.js`
**Dados de entrada** | Base de clientes com mais registros do que o limite por página
**Resultado esperado** | Lista de clientes exibida com paginação funcional e total de registros correto
**Resultado obtido** | Pendente

---

**Caso de Teste** | **CT-08 — Ordenação por coluna (ascendente e descendente)**
:--------------: | ------------
**Procedimento** | 1) Acesse `perfilCliente.html` <br> 2) Clique no cabeçalho de uma coluna e verifique ordenação ascendente <br> 3) Clique novamente e verifique ordenação descendente
**Requisito associado** | RF-008
**Arquivos** | `perfilCliente.html`, `perfilCliente.js`
**Dados de entrada** | Lista de clientes com valores distintos nas colunas
**Resultado esperado** | Dados reordenados corretamente em ambos os sentidos para qualquer coluna
**Resultado obtido** | Pendente

---

## RF-013 — Cards de resumo no dashboard

**Responsável:** Pietro  
**Arquivos:** `dashboard.html`, `dashboard.js`  
**Descrição:** Exibir cards com total de clientes ativos e percentual/quantidade de inadimplentes.

---

**Caso de Teste** | **CT-09 — Cards do dashboard com métricas de clientes**
:--------------: | ------------
**Procedimento** | 1) Acesse `dashboard.html` <br> 2) Observe os cards de resumo <br> 3) Verifique total de clientes ativos, quantidade e percentual de inadimplentes
**Requisito associado** | RF-013
**Arquivos** | `dashboard.html`, `dashboard.js`
**Dados de entrada** | Base com clientes ativos e ao menos um inadimplente
**Resultado esperado** | Cards exibindo valores corretos e consistentes com a base de dados
**Resultado obtido** | Dashboard com total de clientes, clientes ativos e clientes inadimplentes.




https://github.com/user-attachments/assets/18f15766-5109-489e-ab14-3b462112ad9e





---

## RF-014 — Gráficos do dashboard

**Responsável:** Pietro  
**Arquivos:** `dashboard.html`, `dashboard.js`  
**Descrição:** Exibir gráfico de distribuição de clientes por faixa de score e volume de produtos contratados por tipo.

---

**Caso de Teste** | **CT-10 — Gráfico de distribuição por faixa de score**
:--------------: | ------------
**Procedimento** | 1) Acesse `dashboard.html` <br> 2) Localize o gráfico de score <br> 3) Verifique se as faixas estão corretas e os valores batem com os dados
**Requisito associado** | RF-014
**Arquivos** | `dashboard.html`, `dashboard.js`
**Dados de entrada** | Clientes cadastrados com scores variados
**Resultado esperado** | Gráfico exibido com faixas de score e quantidades corretas
**Resultado obtido** | Gráfico de pizza com descrição das faixas de score

https://github.com/user-attachments/assets/bdce6776-3d52-4102-89ea-068457d80be8
---

# Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Analista deseja acessar determinado cliente do banco e saber qual as informações dele para realizar um empréstimo para ele. |
| 2             | Gerente precisa avaliar como está o perfil de adimplência de 10 clientes para realizar a cobrança. |
| 3             | Analista precisa ver e reunir todos os clientes de medio risco na base de dados. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja acessar determinado cliente do banco e saber qual as informações dele para realizar um empréstimo para ele.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 33.54 segundos                  |
| 2       | SIM             | 5                    | 36.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 36.24 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 22.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.


Cenário 2: Gerente precisa avaliar como está o perfil de adimplência de 10 clientes para realizar a cobrança. 

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 1:41.54 segundos                          |
| 2       | SIM             | 5                    | 1:31.42 segundos                          |
| 3       | SIM             | 4                    | 1:36.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 1:36.39 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 1:13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.

Cenário 3: Analista precisa ver e reunir todos os clientes de medio risco na base de dados. 

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 20.08 segundos                  |
| 2       | SIM             | 5                    | 22.11 segundos                  |
| 3       | SIM             | 5                    | 19.09 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 20.42 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 17.66 segundos |


    Comentários dos usuários: Achei o site muito bom mas tive dificuladade de entender como fazeria essa busca. 
    Mas poderia ter filtros melhores indicados


## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.
