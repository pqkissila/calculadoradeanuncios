function calculaCliques() {
  var custo = document.getElementById("custo").value;

  var visualizacoes = custo * 30;
  var cliques = 0;

  for (var i = 1; i <= 4; i++) {
    cliques += visualizacoes * 0.12;
  }

  return cliques;
}

function calculaCompartilhamentos() {
  var custo = document.getElementById("custo").value;
  var visualizacoes = custo * 30;
  var cliques = 0;
  var compartilhamento = 0;

  for (var i = 1; i <= 4; i++) {
    cliques += visualizacoes * 0.12;
    compartilhamento += cliques * 0.15;
  }
  return compartilhamento;
}

function calculaVisualizacao() {
  var custo = document.getElementById("custo").value;
  var visualizacoes = custo * 30;
  var cliques = 0;
  var compartilhamento = 0;

  for (var i = 1; i <= 4; i++) {
    cliques += visualizacoes * 0.12;
    compartilhamento += cliques * 0.15;
    visualizacoes += compartilhamento * 40;
  }

  document.getElementById("visualizacao").value = Math.trunc(visualizacoes);
}

function calculaInvestimento() {
  var dataInicio = document.getElementById("dataInicio").value;
  var dataTermino = document.getElementById("dataTermino").value;
  var investimentoPorDia = document.getElementById("investimento").value;

  const now = new Date(dataInicio); // Data de hoje
  const past = new Date(dataTermino); // Outra data no passado
  const diff = Math.abs(now.getTime() - past.getTime()); // Subtrai uma data pela outra
  var days = Math.ceil(diff / (1000 * 60 * 60 * 24));

  document.getElementById("custo").value = days * investimentoPorDia;

  calculaVisualizacao();

  document.getElementById("cliques").value = Math.trunc(calculaCliques());

  document.getElementById("compartilhamentos").value = Math.trunc(calculaCompartilhamentos());

}
