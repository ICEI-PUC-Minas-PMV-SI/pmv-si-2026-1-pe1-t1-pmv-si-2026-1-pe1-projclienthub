# Especificação do Projeto — ClientHub

> Esta seção apresenta a definição do problema e a ideia de solução a partir da perspectiva do usuário, compreendendo a definição das personas, histórias de usuários, requisitos funcionais e não funcionais, além das restrições do projeto. As técnicas utilizadas incluem a construção de personas baseadas nos perfis de usuários identificados no documento de contexto, histórias de usuários no formato ágil e tabelas de requisitos priorizados.

---

## Personas

  
### Persona 1 — Ana Souza (Vendedora de Produtos)
  
<img width= "220" alt= "Ana Souza" src="img/ana.jpeg" align= "left"> 
Ana tem 32 anos, é colaboradora de uma instituição financeira de médio porte e atua na área de vendas de produtos financeiros, como cartões de crédito, seguros e     investimentos. Formada em Administração, é comunicativa e orientada a metas. Utiliza sistemas bancários diariamente e sente dificuldade em acessar rapidamente o histórico financeiro dos clientes para identificar oportunidades de oferta. Precisa de uma plataforma que centralize as informações de perfil financeiro e produtos já contratados para agilizar seu trabalho e aumentar suas conversões.
<br><br><br><br>

---

### Persona 2 — Carlos Mendes (Setor de Cobrança)

<img width="220" alt="Carlos Mendes" src="img/carlos.jpeg" align="left">
Carlos tem 40 anos e trabalha há 10 anos no setor de cobrança de um banco. É analítico, metódico e precisa lidar diariamente com clientes inadimplentes. Seu maior desafio é obter rapidamente as informações sobre débitos vencidos e histórico financeiro para propor renegociações adequadas ao perfil de cada cliente. Sente que as informações estão dispersas em diferentes sistemas, o que torna o atendimento mais lento e menos efetivo.
<br><br><br><br><br>

---

### Persona 3 — Fernanda Lima (Gerente de Conta)

<img width="220" alt="Fernanda Lima" src="img/fernanda.jpeg" align="left">

Fernanda tem 45 anos, é gerente de contas de alta renda em uma agência bancária. Possui MBA em Finanças e acompanha de perto o mercado de investimentos. Precisa acessar dados pessoais e financeiros de seus clientes vinculados à agência de forma prática e segura, indicando as melhores opções de carteira conforme o perfil de risco de cada cliente. Valoriza dashboards claros e relatórios exportáveis para embasar suas decisões.
<br><br><br><br><br>

---

### Persona 4 — Roberto Alves (Analista de Dados)

<img width="220" alt="Roberto Alves" src="img/roberto.jpeg" align="left">

Roberto tem 28 anos, é cientista de dados júnior na área de inteligência do banco. Graduado em Ciência da Computação, domina ferramentas como Power BI e Excel. Seu objetivo é transformar grandes volumes de dados bancários em informações estratégicas, identificar padrões em transações e detectar possíveis comportamentos suspeitos. Precisa de uma base de dados organizada, filtros avançados e capacidade de exportação para ferramentas externas.
<br><br><br><br><br>

---

### Persona 5 — Juliana Costa (Operadora de Caixa)

<img width="220" alt="Juliana Costa" src="img/juliana.jpeg" align="left">

Juliana tem 24 anos e trabalha como operadora de caixa em uma agência bancária. Atende dezenas de clientes por dia realizando depósitos, saques e pagamentos. Precisa consultar rapidamente o cadastro do cliente durante o atendimento, com acesso a informações básicas da conta e produtos disponíveis. Valoriza uma interface simples e rápida, pois o tempo de atendimento é um fator crítico em sua rotina.
<br><br><br><br><br><br>

---

### Persona 6 — Marcos Vieira (Administrador de Sistemas)

<img width="220" alt="Marcos Vieira" src="img/marcos.jpeg" align="left">


Marcos tem 38 anos e é responsável pela gestão técnica do sistema de informação do banco. Possui graduação em Sistemas de Informação e certificações em segurança da informação. É o responsável por criar usuários, definir níveis de acesso por setor e garantir a integridade dos dados. Precisa de uma interface administrativa eficiente que permita monitorar o funcionamento da plataforma e restringir o acesso a informações sensíveis conforme a hierarquia da instituição.
<br><br><br><br><br>

---
<br>

## Histórias de Usuários

Com base na análise das personas, foram identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA` | QUERO/PRECISO... `FUNCIONALIDADE` | PARA... `MOTIVO/VALOR` |
|---|---|---|
| Administrador do sistema | Cadastrar usuários com diferentes níveis de acesso | Controlar quem pode acessar os dados sensíveis |
| Administrador do sistema | Restringir a edição de dados apenas a administradores | Garantir segurança e integridade das informações |
| Analista de Dados | Filtrar clientes por atributos (perfil, inadimplência, score) | Encontrar grupos de clientes com características específicas |
| Analista de Dados | Visualizar histórico do cliente incluindo produtos contratados e registros de inadimplência | Avaliar o relacionamento e o risco do cliente |
| Analista de Dados | Visualizar uma página de perfil do cliente com dados relevantes | Ter uma visão consolidada das informações do cliente |
| Analista de Dados | Identificar clientes que estejam com pendências no banco | Negociar dívidas e sugerir produtos |
| Operador de Caixa / Atendente | Pesquisar clientes pelo número de identificação | Localizar rapidamente um cliente específico no sistema |
| Operador de Caixa / Atendente | Visualizar o nome completo e o número de identificação do cliente após a pesquisa | Confirmar que o cliente encontrado é o correto |
| Funcionário do banco (geral) | Ordenar e filtrar clientes de forma ascendente ou descendente por características | Organizar melhor a visualização dos dados |
| Funcionário do banco (geral) | Utilizar autocompletar ao pesquisar o nome de um cliente | Acelerar e facilitar a busca no sistema |
| Gerente de Conta | Visualizar um dashboard com métricas e análises | Acompanhar indicadores e tomar decisões baseadas em dados |
| Gerente de Conta | Exportar relatórios para impressão ou integração com ferramentas externas (Excel ou Power BI) | Permitir análise externa e compartilhamento dos dados |

---

## Requisitos

### Requisitos Funcionais

| ID | Descrição do Requisito | Prioridade |
|---|---|---|
| RF-001 | Exibir tela de login com campos de usuário e senha, validar credenciais e exibir mensagem de erro em caso de falha | ALTA |
| RF-002 | Bloquear acesso após tentativas inválidas consecutivas e encerrar sessão automaticamente por inatividade | ALTA |
| RF-003 | Permitir logout manual e redirecionar o usuário para a tela adequada ao seu perfil após login | ALTA |
| RF-004 | Listar, cadastrar e editar usuários com nome, e-mail, perfil de acesso e status | MÉDIA |
| RF-005 | Definir e restringir perfis de acesso (Administrador, Analista, Gerente, Operador), bloqueando áreas não autorizadas | MÉDIA |
| RF-006 | Pesquisar cliente por CPF/CNPJ ou ID interno exibindo nome completo e identificação para confirmação | ALTA |
| RF-007 | Pesquisar cliente por nome com autocompletar a partir do 2º caractere | MÉDIA |
| RF-008 | Listar clientes com paginação, total de registros e ordenação ascendente/descendente por qualquer coluna | ALTA |
| RF-009 | Filtrar clientes por perfil de risco, situação de inadimplência e faixa de score, permitindo combinação simultânea de filtros | ALTA |
| RF-010 | Exibir página de perfil consolidado com dados cadastrais, produtos contratados (status e data) e score com indicação visual de risco | ALTA |
| RF-011 | Exibir histórico de inadimplência com data e valor, e pendências financeiras ativas com valor e vencimento | ALTA |
| RF-012 | Restringir exibição de dados sensíveis (score, inadimplência) conforme perfil de acesso do usuário | ALTA |
| RF-013 | Exibir cards com total de clientes ativos e percentual/quantidade de inadimplentes | ALTA |
| RF-014 | Exibir gráfico de distribuição de clientes por faixa de score e volume de produtos contratados por tipo | ALTA |
| RF-015 | Permitir seleção de período de análise e atualizar todas as métricas do dashboard ao alterá-lo | MÉDIA |
| RF-016 | Gerar relatório com base nos filtros ativos e exibir prévia dos dados antes de confirmar a exportação | MÉDIA |
| RF-017 | Exportar relatório em Excel (.xlsx) com colunas tipadas e em CSV compatível com Power BI | MÉDIA |
| RF-018 | Registrar em log cada exportação realizada com usuário, data e filtros aplicados | MÉDIA |

### Requisitos Não Funcionais

| ID | Descrição do Requisito | Prioridade |
|---|---|---|
| RNF-001 |	Controle de acesso baseado em perfis (RBAC) cada rota e ação verifica o perfil antes de executar | MÉDIA |
| RNF-002 |	Mascarar campos sensíveis (ex.: CPF, score) na exibição para perfis sem permissão explícita | ALTA |
| RNF-003 |	Tratar dados pessoais conforme LGPD: minimização, finalidade e rastreabilidade de acesso | ALTA |
| RNF-004 |	Busca por ID deve retornar resultado em até 2 segundos em condições normais de carga | BAIXA |
| RNF-005 |	Página de perfil completo deve carregar em até 2 segundos | BAIXA |
| RNF-006 |	Dashboard deve renderizar com dados atualizados em até 3 segundos | BAIXA |
| RNF-007 |	Interface responsiva funcional em resoluções de 1024px a 1920px | MÉDIA |
| RNF-008 |	Mensagens de erro e sucesso visíveis e descritivas ao usuário | MÉDIA |
| RNF-009 |	Falhas em exportação devem exibir mensagem de erro sem perder os filtros selecionados | MÉDIA |



---

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir:

| ID | Restrição |
|---|---|
| 01 | O projeto deverá ser entregue até o final do semestre letivo |
| 02 | Não pode ser desenvolvido um módulo de backend — a aplicação é exclusivamente Web Frontend |
| 03 | O sistema deve ser desenvolvido como uma aplicação web, acessível via navegador |
| 04 | O acesso a dados sensíveis deve ser controlado hierarquicamente por perfil de usuário |
