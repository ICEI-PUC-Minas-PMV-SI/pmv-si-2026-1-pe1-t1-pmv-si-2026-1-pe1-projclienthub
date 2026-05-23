// RF-013 Exibir cards com total de clientes ativos e percentual/quantidade de inadimplentes

fetch("./js/database_CH.json")
  .then((res) => res.json())
  .then((dados) => {
    const total = dados.length;
    const inadimplentes = dados.filter((cliente) => cliente.adimplencia === "inadimplente").length;
    const ativos = total - inadimplentes;
    const percentual = total ? (inadimplentes * 100) / total : 0;

    window.total = total;
    window.Ina = inadimplentes;
    window.ativos = ativos;
    window.percentualT = Number(percentual.toFixed(2));
    window.perRestanteT = Number((100 - percentual).toFixed(2));
    window.score = buildScoreRange(dados);

    updateMetric("total", `Total de clientes: ${total}`);
    updateMetric("inadimplente", `Contas inadimplentes: ${inadimplentes}`);
    updateMetric("percentual", `Percentual de inadimplencia: ${percentual.toFixed(2)}%`);
  })
  .catch(() => {
    window.total = 0;
    window.Ina = 0;
    window.ativos = 0;
    window.percentualT = 0;
    window.perRestanteT = 100;
    window.score = { baixo: 0, medio: 0, alto: 0 };
  });

function buildScoreRange(dados) {
  let contBaixo = 0;
  let contMedio = 0;
  let contAlto = 0;

  dados.forEach((cliente) => {
    const valorScore = Number(cliente.score) || 0;

    if (valorScore <= 150) {
      contBaixo += 1;
    } else if (valorScore <= 450) {
      contMedio += 1;
    } else {
      contAlto += 1;
    }
  });

  return {
    baixo: contBaixo,
    medio: contMedio,
    alto: contAlto,
  };
}

function updateMetric(elementId, text) {
  const element = document.getElementById(elementId);

  if (element) {
    element.innerText = text;
  }
}
