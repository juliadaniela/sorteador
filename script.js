var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML =
      "O número secreto é menor que o valor inserido";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML =
      "O numero secreto é maior que o valor inserido";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  }
}
