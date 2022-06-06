var letrasDigitadas = [];
var palavraSecretaPorLetra = [];
var listaDinamica = [];
var tentativas = 6;
var palavras = [
  "BICICLETA",
  "CADEADO",
  "ADESIVO",
  "VENTILADOR",
  "CACHOEIRA",
  "SENTIMENTO",
  "MEDIEVAL",
  "MEDO",
  "ARREPIO",
  "DIVISIVEL",
  "TRANSVERSAL",
  "QUADRO",
  "IMERSAO",
  "DESENVOLVIMENTO",
  "PROGRAMADOR",
  "JUNIOR",
  "ALEATORIO",
  "SAIR",
  "AMERICANO",
  "ANCESTRAL",
  "RELIQUIA",
  "CATASTROFE",
  "HABILIDADE",
  "DEVANEIO",
  "CILADA",
  "QUERIDO",
  "CARDILOGISTA",
  "PROFESSOR",
  "ENTUSIASTA",
  "TRIGLICERIDES",
];
// cria a apalavra secreta
var palavraSecreta = criarPalavraSecreta();

// cria uma lista com a palavra secreta separado na lista por cada letra
palavraSecretaPorLetra = palavraSecreta.split("");

// monta a quantidade de espaços da palavra na tela
montarPalavraNaTela(palavraSecretaPorLetra);

/////////////////////////// FUNÇÕES
function criarPalavraSecreta() {
  // gera um indice aleatório entre 0 e 30 para servir de apoio na escolha da palavra que está na lista
  //var indexPalavra = parseInt(Math.random() * 31);
  // passa o indice sorteado para a lista referenciar a palavra Secreta
  //var palavraSecreta = palavras[indexPalavra];
  var palavraSecreta = "ADIVINHA";
  return palavraSecreta;
}
function montarPalavraNaTela(palavraSecreta) {
  var palavraTela = document.getElementById("palavra-secreta");
  palavraTela.innerHTML = "";
  for (i = 0; i < palavraSecreta.length; i++) {
    if (listaDinamica[i] == undefined) {
      listaDinamica[i] = "&nbsp;";
      palavraTela.innerHTML =
        palavraTela.innerHTML +
        "<div class='letras'>" +
        listaDinamica[i] +
        "</div>";
    } else {
      palavraTela.innerHTML =
        palavraTela.innerHTML +
        "<div class='letras'>" +
        listaDinamica[i] +
        "</div>";
    }
  }
}

function verificaLetraEscolhida(letra) {
  if (tentativas > 0) {
    var resposta = document.getElementById("box-resposta");
    resposta.innerText = "";
    if (verificaSeLetraNaoFoiDigitada(letra) == 0) {
      // lista vazia e primeira letra escolhida
      mudarStyleLetra("tecla-" + letra);
      comparaListas(letra);
      montarPalavraNaTela(palavraSecreta);
    } else if (verificaSeLetraNaoFoiDigitada(letra) == 1) {
      //letra repetida
      resposta.innerText = "A letra >>> " + letra + " <<< já foi usada";
    } else {
      //letra nova
      letrasDigitadas.push(letra);
      mudarStyleLetra("tecla-" + letra);
      comparaListas(letra);
      montarPalavraNaTela(palavraSecreta);
    }
  }
}
function verificaSeLetraNaoFoiDigitada(letra) {
  response = 0;
  if (letrasDigitadas.length < 1) {
    letrasDigitadas.push(letra);
    response = 0;
  } else {
    for (i = 0; i <= letrasDigitadas.length; i++) {
      if (letra == letrasDigitadas[i]) {
        // se o retorno for maior ou igual a 0 existe no array o valor procurado
        if (
          function jaTemLetra() {
            return letrasDigitadas.indexOf(letra) >= 0;
          }
        ) {
          return (response = 1);
        }
      } else {
        response = 2;
      }
    }
  }
  return response;
}
function mudarStyleLetra(tecla) {
  document.getElementById(tecla).style.background = "#C71585";
  document.getElementById(tecla).style.color = "#FFFFFF";
}
function comparaListas(letra) {
  var resposta = document.getElementById("box-resposta");
  var pos = palavraSecretaPorLetra.indexOf(letra);
  if (pos < 0) {
    // significa que a letra não existe na palavra secreta
    tentativas--;
    var tentativasRestantes = document.getElementById("box-tentativas");
    tentativasRestantes.innerHTML = "TENTATIVAS : " + tentativas;
    if (tentativas == 0) {
      resposta.innerHTML = "FIM : A PALAVRA SECRETA ERA - " + palavraSecreta;
    }
  } else {
    for (i = 0; i < palavraSecretaPorLetra.length; i++) {
      if (palavraSecretaPorLetra[i] == letra) {
        listaDinamica[i] = palavraSecretaPorLetra[i];
      }
    }
  }
  var vitoria = "sim";
  for (var i = 0; i < palavraSecretaPorLetra.length; i++) {
    if (listaDinamica[i] != palavraSecretaPorLetra[i]) {
      vitoria = "não";
    }
  }
  if (vitoria == "sim") {
    resposta.innerHTML = "PARABÉNS";
    tentativas = 0;
  }
}
