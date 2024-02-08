const perguntas = [
    {
      pergunta: "O que significa a sigla 'JS' em JavaScript?",
      respostas: [
        "Java Superior",
        "JavaScript",
        "Just Started",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
      respostas: [
        "Selecionar todos os elementos da página",
        "Selecionar um elemento da página pelo seu seletor CSS",
        "Criar um novo elemento na página",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de comentar uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "<!-- Este é um comentário -->",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação de valores e tipos",
        "Atribuição de valores",
        "Comparação de valores",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma 'variável' em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um identificador para armazenar valores",
        "Um operador lógico",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
      respostas: [
        "Criar um novo evento",
        "Adicionar um ouvinte de eventos a um elemento",
        "Remover um ouvinte de eventos de um elemento",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma 'função' em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um bloco de código reutilizável",
        "Um operador aritmético",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
      respostas: [
        "Converter uma string para um número inteiro",
        "Converter um número inteiro para uma string",
        "Arredondar um número para o inteiro mais próximo",
      ],
      correta: 0
    },
    {
      pergunta: "O que é 'DOM' em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Object Model",
        "Design Object Model",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'push()' em JavaScript?",
      respostas: [
        "Remover um elemento de um array",
        "Adicionar um elemento ao final de um array",
        "Ordenar os elementos de um array",
      ],
      correta: 1
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