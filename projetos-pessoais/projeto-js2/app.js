alert("Olá mundo");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
console.log("Valor do chute:", chute);
let tentativas = 1;

//enquanto o chute não for engual
while (chute != numeroSecreto) {
  chute = prompt(`escolha um número entre 1 e ${numeroMaximo}`);
  if (chute == ''){
    alert("digite algum número");
    continue;
  }
  // se chute for engual ao número secreto
  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`o numero secreto é menor que ${chute}`);
    } else {
      alert(`o numero secreto é maior que ${chute}`);
    }
    //tentativas = tentativas + 1;
    tentativas++;
  }
}
let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}.`);