// 2. relógio e despertador

// Neste post https://pt.stackoverflow.com/a/111149, o usuário do stackoverflow descreve 
// de uma forma bem didática qual a diferença entre dois métodos bem importantes no javascript:
// O `setTimeout` e o `setInterval`. O `setTimeout` é um método que recebe dois 
// parâmetros: o primeiro, uma função de callback,
// que deverá ser executada após um intervalo, determinado em milissegundos pelo segundo
//  parâmetro.

//   Ex.:

// setTimeout(() => {
//   console.log('vou ser chamado uma vez, após 1 segundo');
// }, 1000);

// o `setInterval` é um método que funciona de forma bem parecida com o setTimeot, porém, 
// o método de callback será chamado a cada intervalo definido no segundo parâmetro, em  milissegundos.

//   Ex.:

// setInterval(() => {
//   console.log('vou ser chamado diversas vezes, a cada 1 segundo');
// }, 1000);


// Neste desafio, precisamos criar duas funções: A primeira o`despertador`, 
// deverá receber um parâmetro de intervalo em segundos.O despertador deverá "tocar" após o 
// intervalo definido pelo parâmetro. 

// A segunda função, o`relogio`, deverá escrever na tela a hora atual, a cada segundo.
// O formato da saída deverá ser em horas: minutos: segundos.

//  Importante 1: Ambos os métodos recebem o intervalo em segundos, mas os `setInterval`
// e `setTimeout` trabalham com milissegundos.A conversão de medida será necessária.

// Importante 2: a princípio, o relógio deverá rodar indefinidamente.
// Para parar a execução dele, você pode apetar um`ctrl + c`, para finalizar a execução do 
// relógio


const despertador = (intervaloEmSegundos: number) => {
  setTimeout(() => {
    console.log(`passaram - se os ${intervaloEmSegundos} segundos`);
  }, intervaloEmSegundos * 1000)
}

const relogio = () => {
  setInterval(() => {
    const now = new Date();
    console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} `)
  }, 1000)

};

despertador(10);
relogio();
