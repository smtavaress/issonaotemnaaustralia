const genText = document.getElementById("gen-text")

genText.addEventListener("click", function() {
  let messages = [
    "Isso não tem na Australia",
    "Eu amo você",
    "Mexy Car, hm",
    "Eu amo o tanquinho de guerra",
    "Irei aprender a gostar de carros esportivos",
    "Eu você + netflix + pizza de frango com catupiry = <3",
    "Prometo rir muito de você com a sua mãe",
    "Brazil!",
    "Arabella se tornou um hinooo",
    "It's an exploration, she's made of outer space",
    "SUV >>>>>> Sports Car",
    "Proteínaaaaa",
    "Lov u Luke Lake <3",
    "Mr Fabric!!!!",
    "Atelier das massas + seu sorriso = felicidade",
    "Você me inspira",
    "2 reais ou uma engraçadinha misteriosa?",
    "2 reais ou uma dedada misteriosa?",
    "Será que o ifood entrega você aqui na minha casa?",
    "Acho que o meu problema eh falta de um beijo seu",
    "Engraçado que a sogra dos meus sonhos é idêntica a sua mãe",
    "Existe o amor da sua vida e o amor para sua vida, e existe eu que sou os dois",
    "Por mim a gente tava agarrado vendo filme",
    "Ficaria facilmente te olhando por horas",
    "'segura minhas pernas'",
    "Minha linguagem do amor é perturbação, piadinha e implicância",
    "Um homem sem uma mulher para mandar nele é um atoa",
    "Queria tropeçar e cair na tua cama pra gente dormir agarradinho",
    "Todo dia esse negócio de pensar em você",
    "Vamo namora muito e dai a gente sai de roupa combinando",
    "To me, you are perfect",
    "You are my greatest blessing",
    "You are the only exception",
    "I want you in my life for today, tomorrow and forever.",
    "If you ask me when I want to be with you, my answer will be now and forever.",
    "Im loving you more each and every day.",
    "No matter where I go, or what I do, Im thinking of you.",
    "Just so you know, Im madly in love with you.",
    "Renovado por mais 80 anos ein",
    "I am really blessed to have you in my life. I love you so much.",
    "You are my greatest adventure.",
    "The world is so small compared to my love for you.",
    "I cant wait to see you again",
    "If I tell you I love you, can I keep you forever?",
    "Stop making me think about you! I'm busy",
    "Your texts make my day even better.",
    "In my eyes, you are perfect. I adore you.",
    "15000km não são suficientes para me separar de você",
    "'because all of the small things that you do, are what remind me why I fell for you'",
    "Thank you, my love, for making me feel like the most beautiful person in the world.",
    "I wish you were here, or I was there, or we were together anywhere",
    "Distance means so little when someone means so much",
    "You bring happiness into my life",
    "Vem pra Australia, tenho um playstation",
    "Tu é a pior melhor coisa que poderia ter acontecido"
  ]
  const textEl = document.querySelector(".textMessage")
  textEl.textContent = messages[Math.floor( Math.random()*messages.length )]
})
