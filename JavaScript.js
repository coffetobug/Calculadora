
document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const botoesNumeros = document.querySelectorAll('.botão_número');
  const botoesOperadores = document.querySelectorAll('.botão_operador');
  const botaoLimpar = document.getElementById('Limpar');
  const botaoIgual = document.getElementById('igual');

  let expressao = '';


  botoesNumeros.forEach((botao) => {
    botao.addEventListener('click', () => {
      const valor = botao.textContent.trim();

     
      if (display.value === '0' && valor !== '.') {
        expressao = valor;
      } else {
     
        if (valor === '.' && expressao.slice(-1) === '.') return;
        expressao += valor;
      }

      display.value = expressao;
    });
  });


  botoesOperadores.forEach((botao) => {
    botao.addEventListener('click', () => {
      const operador = botao.textContent.trim();   
      if (expressao === '') return;
      const ultimoCaractere = expressao.slice(-1);
      if (['+', '-', 'x', '/'].includes(ultimoCaractere)) {
        expressao = expressao.slice(0, -1) + operador;
      } else {
        expressao += operador;
      }
      display.value = expressao;
    });
  });

  ///////////////////////////////// Botão Limpar (C)/////////////////////////////////
  botaoLimpar.addEventListener('click', () => {
    expressao = '';
    display.value = '0';
  });
  /////////////////////////////////4. Botão Igual (=)/////////////////////////////////
  botaoIgual.addEventListener('click', () => {
    if (expressao === '') return;

    try {
   /////////////////////////////////Substitui o 'x' visual por '*' para o JS///////////
      let expressaoParaCalcular = expressao.replace(/x/g, '*');

        /////////////////////////////////avalia a expressão matemática///////////////////////
      const resultado = eval(expressaoParaCalcular);


  /////////////////////////////////resultado e atualiza ///////////////////////////////
      display.value = resultado;
      expressao = String(resultado);
    } catch (erro) {
      display.value = 'Erro';
      expressao = '';
    }
  });
});
