# Especificação do Projeto — ClientHub

> Esta seção apresenta a definição do problema e a ideia de solução a partir da perspectiva do usuário, compreendendo a definição das personas, histórias de usuários, requisitos funcionais e não funcionais, além das restrições do projeto. As técnicas utilizadas incluem a construção de personas baseadas nos perfis de usuários identificados no documento de contexto, histórias de usuários no formato ágil e tabelas de requisitos priorizados.

---

## Personas

### Persona 1 — Ana Souza (Vendedora de Produtos)

![Ana Souza](<img/"ana.jpeg">)


Ana tem 32 anos, é colaboradora de uma instituição financeira de médio porte e atua na área de vendas de produtos financeiros, como cartões de crédito, seguros e investimentos. Formada em Administração, é comunicativa e orientada a metas. Utiliza sistemas bancários diariamente e sente dificuldade em acessar rapidamente o histórico financeiro dos clientes para identificar oportunidades de oferta. Precisa de uma plataforma que centralize as informações de perfil financeiro e produtos já contratados para agilizar seu trabalho e aumentar suas conversões.

---

### Persona 2 — Carlos Mendes (Setor de Cobrança)

![Carlos Mendes](<img width="512" height="512" alt="Carlos Mendes" src="https://github.com/user-attachments/assets/d8ee0d25-1363-4a2f-8cb2-43fd11d8d1a4" />)

Carlos tem 40 anos e trabalha há 10 anos no setor de cobrança de um banco. É analítico, metódico e precisa lidar diariamente com clientes inadimplentes. Seu maior desafio é obter rapidamente as informações sobre débitos vencidos e histórico financeiro para propor renegociações adequadas ao perfil de cada cliente. Sente que as informações estão dispersas em diferentes sistemas, o que torna o atendimento mais lento e menos efetivo.

---

### Persona 3 — Fernanda Lima (Gerente de Conta)

![Fernanda Lima](<img width="512" height="512" alt="Fernanda Lima" src="https://github.com/user-attachments/assets/95f08a93-cacb-448c-a61d-7d354c684493" />)

Fernanda tem 45 anos, é gerente de contas de alta renda em uma agência bancária. Possui MBA em Finanças e acompanha de perto o mercado de investimentos. Precisa acessar dados pessoais e financeiros de seus clientes vinculados à agência de forma prática e segura, indicando as melhores opções de carteira conforme o perfil de risco de cada cliente. Valoriza dashboards claros e relatórios exportáveis para embasar suas decisões.

---

### Persona 4 — Roberto Alves (Analista de Dados)

![Roberto Alves](<img width="512" height="512" alt="Roberto Alves" src="https://github.com/user-attachments/assets/b7bc7cd5-810f-42bc-aca9-39a0d19eaa03" />)

Roberto tem 28 anos, é cientista de dados júnior na área de inteligência do banco. Graduado em Ciência da Computação, domina ferramentas como Power BI e Excel. Seu objetivo é transformar grandes volumes de dados bancários em informações estratégicas, identificar padrões em transações e detectar possíveis comportamentos suspeitos. Precisa de uma base de dados organizada, filtros avançados e capacidade de exportação para ferramentas externas.

---

### Persona 5 — Juliana Costa (Operadora de Caixa)

![Juliana Costa](<img width="512" height="512" alt="Juliana Costa" src="https://github.com/user-attachments/assets/6cb6c579-adbe-43df-ae0a-26afa510cb71" />)

Juliana tem 24 anos e trabalha como operadora de caixa em uma agência bancária. Atende dezenas de clientes por dia realizando depósitos, saques e pagamentos. Precisa consultar rapidamente o cadastro do cliente durante o atendimento, com acesso a informações básicas da conta e produtos disponíveis. Valoriza uma interface simples e rápida, pois o tempo de atendimento é um fator crítico em sua rotina.

---

### Persona 6 — Marcos Vieira (Administrador de Sistemas)

![Marcos Vieira](<img width="512" height="512" alt="Marcos Vieira" src="https://github.com/user-attachments/assets/38b2ef07-ac08-42df-ad78-ab3b52402938" />)


Marcos tem 38 anos e é responsável pela gestão técnica do sistema de informação do banco. Possui graduação em Sistemas de Informação e certificações em segurança da informação. É o responsável por criar usuários, definir níveis de acesso por setor e garantir a integridade dos dados. Precisa de uma interface administrativa eficiente que permita monitorar o funcionamento da plataforma e restringir o acesso a informações sensíveis conforme a hierarquia da instituição.

---

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
| RF-001 | A aplicação deve permitir pesquisar clientes pelo nome ou código de identificação | ALTA |
| RF-002 | A aplicação deve permitir filtrar clientes por atribuições diferentes (perfil, adimplência, score) | ALTA |
| RF-003 | A aplicação deve exibir o nome completo e o número de identificação do cliente após a pesquisa | ALTA |
| RF-004 | A aplicação deve permitir o cadastro de usuários com restrição de acesso a dados sensíveis, restringindo a edição de dados apenas a administradores | MÉDIA |
| RF-005 | A aplicação deve disponibilizar um dashboard com métricas para visualização e análise de dados | MÉDIA |

### Requisitos Não Funcionais

| ID | Descrição do Requisito | Prioridade |
|---|---|---|
| RNF-001 | A aplicação deve permitir filtrar e ordenar registros em ordem ascendente ou descendente conforme cada característica | ALTA |
| RNF-002 | A aplicação deve exibir uma página de perfil do cliente reunindo os dados relevantes de forma consolidada | ALTA |
| RNF-003 | A aplicação deve manter o histórico do cliente (produtos contratados, adimplência, etc.) | MÉDIA |
| RNF-004 | A aplicação deve permitir adicionar tags para clientes com alguma inadequação (score baixo, inadimplência, etc.) | MÉDIA |
| RNF-005 | A aplicação deve emitir relatórios para impressão ou integração com outras ferramentas (Power BI, Excel, etc.) | BAIXA |
| RNF-006 | A aplicação deve oferecer autocompletar ao pesquisar pelo nome do cliente | BAIXA |

---

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir:

| ID | Restrição |
|---|---|
| 01 | O projeto deverá ser entregue até o final do semestre letivo |
| 02 | Não pode ser desenvolvido um módulo de backend — a aplicação é exclusivamente Web Frontend |
| 03 | O sistema deve ser desenvolvido como uma aplicação web, acessível via navegador |
| 04 | O acesso a dados sensíveis deve ser controlado hierarquicamente por perfil de usuário |
