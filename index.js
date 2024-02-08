const perguntas = [
  {
    pergunta: "O que é um algoritmo?",
    respostas: [
      "Uma linguagem de programação",
      "Um conjunto de instruções para resolver um problema",
      "Um tipo de variável",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função de um loop 'for' em um algoritmo?",
    respostas: [
      "Realizar uma comparação entre dois valores",
      "Executar um bloco de código repetidamente enquanto uma condição for verdadeira",
      "Definir uma função",
    ],
    correta: 1
  },
  {
    pergunta: "O que é uma estrutura condicional em algoritmos?",
    respostas: [
      "Um tipo de dado",
      "Um tipo de variável",
      "Um bloco de código que executa determinadas ações com base em uma condição",
    ],
    correta: 2
  },
  {
    pergunta: "O que é uma variável em algoritmos?",
    respostas: [
      "Um conjunto de instruções",
      "Um tipo de dado",
      "Um identificador para armazenar valores",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a função do operador '&&' em algoritmos?",
    respostas: [
      "Realizar uma comparação entre dois valores",
      "Realizar uma operação de adição",
      "Realizar uma operação lógica 'E' entre duas expressões",
    ],
    correta: 2
  },
  {
    pergunta: "O que é um array em algoritmos?",
    respostas: [
      "Uma estrutura de dados que armazena uma coleção de elementos",
      "Um tipo de variável",
      "Uma estrutura de controle de fluxo",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do método 'push()' em algoritmos?",
    respostas: [
      "Remover um elemento de um array",
      "Adicionar um elemento ao final de um array",
      "Ordenar os elementos de um array",
    ],
    correta: 1
  },
  {
    pergunta: "O que é um algoritmo de ordenação?",
    respostas: [
      "Um algoritmo que organiza os elementos de um array em ordem alfabética",
      "Um algoritmo que organiza os elementos de um array em uma sequência específica",
      "Um algoritmo que organiza os elementos de um array em uma ordem específica, como crescente ou decrescente",
    ],
    correta: 2
  },
  {
    pergunta: "O que é a complexidade de tempo de um algoritmo?",
    respostas: [
      "O tempo que leva para um algoritmo ser executado",
      "O número de operações básicas executadas por um algoritmo em relação ao tamanho da entrada",
      "O número de linhas de código em um algoritmo",
    ],
    correta: 1
  },
  {
    pergunta: "O que é uma recursão em algoritmos?",
    respostas: [
      "Uma estrutura de dados que armazena uma coleção de elementos",
      "Um tipo de loop",
      "Um processo no qual uma função chama a si mesma diretamente ou indiretamente",
    ],
    correta: 2
  }
];

  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  // se eu trocar a correta por uma outra opção ere irá remover (remove abaixo)
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    
    for(let resposta of item.respostas){
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta=' + perguntas.indexOf(item))
    // indexOF pesquisa o índice
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
     dt.querySelector('input').onchange = (event) => {
       // está comparando para ver se o item selecionado é o correto
      const estaCorreta = event.target.value == item.correta //true
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
     // alert(corretas.size)
     mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
     
     quizItem.querySelector('dl').appendChild(dt)
    
    }
  
    quizItem.querySelector('dl dt').remove()
    // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  
  }