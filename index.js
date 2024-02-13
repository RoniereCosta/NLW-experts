const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar = 5;",
        "let myVar = 5;",
        "const myVar = 5;",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "pop()",
        "concat()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara valores e tipos sem coerção",
        "Compara valores com coerção",
        "Atribuição de valores",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
      respostas: [
        "'32'",
        "5",
        "'5'",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a sintaxe correta para um comentário de linha única em JavaScript?",
      respostas: [
        "<!-- Comentário -->",
        "// Comentário",
        "/* Comentário */",
      ],
      correta: 1
    },
    {
      pergunta: "O que o operador '&&' faz em JavaScript?",
      respostas: [
        "Operador de adição",
        "Operador de negação",
        "Operador lógico 'E'",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'map()' em JavaScript?",
      respostas: [
        "Modificar os elementos de um array",
        "Iterar sobre os elementos de um array",
        "Adicionar um elemento ao final de um array",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de definir uma função em JavaScript?",
      respostas: [
        "funcao myFunction() {}",
        "def myFunction() {}",
        "function myFunction() {}",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'indexOf()' retorna quando o elemento não é encontrado em um array?",
      respostas: [
        "-1",
        "0",
        "null",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do código: console.log(typeof([])); em JavaScript?",
      respostas: [
        "array",
        "object",
        "undefined",
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //Lop ou repetição/Laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
    
    
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }