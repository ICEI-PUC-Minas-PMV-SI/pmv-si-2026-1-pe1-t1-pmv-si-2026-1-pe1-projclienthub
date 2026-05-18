// RF-013 Exibir cards com total de clientes ativos e percentual/quantidade de inadimplentes

fetch('./js/database_CH.json')
   .then(res => res.json())
   .then(dados => {

    function totalClientes(){

    let x =0;

    for(x in dados[x].nome){
       x+=1;
    }
    return x;
   
}

let total = totalClientes();
window.total = totalClientes();

// document.getElementById('total').innerText= total;

    function inadimplentes(){
      let quant =0;

      for(x in dados){
       if(dados[x].adimplencia === 'adimplente'){
         quant+=1;
       }
      }
      return x;
    }

let Ina = inadimplentes();

window.Ina = inadimplentes();

let ativos = total - Ina;

window.ativos = ativos;

// document.getElementById('inadimplente').innerHTML = Ina;    -   Pega elemento do HTML pelo id para colocar uma funcionalidade, variavel do JS

let percentual = (Ina *100) / total;

let percentualT = parseFloat(percentual.toFixed(2));

window.percentualT = percentualT;

let perRestante = 100 - percentual;

let perRestanteT = parseFloat(perRestante.toFixed(2));

window.perRestanteT = perRestanteT;

// document.getElementById('percentual').innerHTML= percentual.toFixed(2)+'%';




// RF-014 Exibir gráfico de distribuição de clientes por faixa de score e volume de produtos contratados por tipo

function clScore(){

   let contBaixo = 0;
   let contMedio = 0;
   let contAlto = 0;

   for(let x in dados){

      let valorScore = dados[x].score;

      if(valorScore <= 150){
         contBaixo++;
      }
      else if(valorScore <= 450){
         contMedio++;
      }
      else{
         contAlto++;
      }

   }

   return {
      baixo: contBaixo,
      medio: contMedio,
      alto: contAlto
   };

}

  let score = clScore();

 window.score = score;
 



   })









// RF-015 Permitir seleção de período de análise e atualizar todas as métricas do dashboard ao alterá-lo 	