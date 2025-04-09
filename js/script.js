const professor = document.querySelector('.professor');
const fala = document.querySelector('.fala-do-professor');
const botao = document.querySelector('.botao');
const botaoTema = document.getElementById('botaoTema');

const frases = [
  "Para fazer un loop infinito, basta esquecer o incremento... no te recomendo, pero mui simplis.",
  "El 'if' é tipo un portero: si a condição é true, ele deixa passar... si no, puerta cerrada. Mui simplis.",
  "Compilar no es magia, es solo transformar el código en algo que a máquina entienda... como minha abuela com espanhol e portunhol.",
  "El ponteiro aponta para un lugar... como yo aponto para o quadro. Só no confunda, ok? Mui simplis.",
  "O while e o for son hermanos... uno vai até cansar, el otro sabe onde parar. Mui simplis.",
  "Declarar variável? Es como poner nome en tu mascota: int cachorro = 10. Mui simplis.",
  "Printf é como yo hablando: sempre quer mostrar algo na tela. Mui simplis.",
  "Função é un bloco que trabalha por ti... igual meu sobrinho quando quer mesada. Mui simplis.",
  "Cuando o código no funciona, no é brujería… es só você que olvidou un ponto e vírgula. Mui simplis.",
  "Estrutura de decisão? Si llueve, leva guarda-chuva. Si no, leva óculos. Mui simplis."
];

// Função para mostrar a explicação do professor
botao.addEventListener('click', () => {
  professor.classList.toggle('ativo');

  if (fala.style.display === 'none' || !fala.style.display) {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    fala.textContent = fraseAleatoria;  // Garante que uma frase será inserida
    fala.style.display = 'block';

    // Lado aleatório
    const lado = Math.random() < 0.5 ? 'esquerda' : 'direita';

    if (lado === 'esquerda') {
      professor.style.left = '50px';
      professor.style.right = 'auto';
      fala.style.left = '180px';
      fala.style.right = 'auto';
    } else {
      professor.style.right = '50px';
      professor.style.left = 'auto';
      fala.style.right = '180px';
      fala.style.left = 'auto';
    }
  } else {
    fala.style.display = 'none';
  }
});

// Função para alternar o tema
function toggleTema() {
  document.body.classList.toggle('dark-mode');
}
