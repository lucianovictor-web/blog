const curiosidades = [
  "Batman já criou planos para derrotar até aliados da Liga da Justiça.",
  "O Bat-sinal é mais simbólico do que um sistema de comunicação eficiente.",
  "A identidade de Batman já foi descoberta várias vezes nos quadrinhos.",
  "Bruce Wayne aprendeu vários estilos de luta pelo mundo inteiro.",
  "Batman tem a regra de não matar seus inimigos na maioria das versões.",
  "O uniforme do Batman foi feito para causar medo nos criminosos.",
  "Em algumas histórias, Batman é mais detetive do que lutador.",
  "Coringa e Batman são opostos: caos vs ordem.",
  "Batman depende muito da tecnologia da Wayne Enterprises.",
  "Gotham City é inspirada em grandes cidades como Nova York.",
  "O Batmóvel muda em praticamente todas as versões.",
  "Batman não tem superpoderes — só inteligência e treino extremo."
];

const container = document.getElementById("container");

curiosidades.forEach(texto => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerText = texto;
  container.appendChild(card);
});
