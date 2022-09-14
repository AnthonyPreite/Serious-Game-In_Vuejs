let questions = [
  {
    //form multiple et forme unique, meme structure
    number: 1,
    qtype: "form-multiple",
    question: "Titre question?",
    response : {
        answers: ["a1", "a2", "a3", "a4"],
        validAnswers: ["a2", "a3"]
    },
    reward: 1,
    timing: 30,
    logo: "./logo.png",
    theme: "théorie",
    challenge: false,
  },
  {
    //pas besoin de beacoup just bouton OK/PAS OK
    //peut etre garder quelques réponses si aide pour l'animateur?
    number: 2,
    qtype: "challenge",
    question: "Titre question?",
    reward: 1,
    timing: 30,
    logo: "./logo.png",
    challenge: false,
  },
  {
    number: 3,
    qtype: "challenge",
    question: "Titre question?",
    reward: 1,
    timing: 30,
    logo: "./logo.png",
    challenge: true,
  },
  {
    number: 4,
    qtype: "liaison",
    question: "Titre question?",
    response : {
        answers1: ["a1", "a2", "a3", "a4"],
        answers2: ["b1", "b2", "b3", "b4"]
    },
    //lors de la vérif liaison comparer les numéros d'index des deux tableaux pour savoir si bonne réponse
    reward: 1,
    timing: 30,
    logo: "./logo.png",
    theme: "théorie",
    challenge: false,
  },
  {
    number: 5,
    qtype: "ordre",
    question: "Titre question?",
    //les réponses sont dans l'ordre de l'index,
    //afficher désordonné et comparer avec un array dans la vue
    response: {
        answers: ["a1", "a2", "a3", "a4"]
    },
    reward: 1,
    timing: 30,
    logo: "./logo.png",
    theme: "théorie",
    challenge: false,
  },
  {
    number: 6,
    qtype: "classement",
    question: "Titre question?",
    response: {
        answers: ["a1", "a2", "a3", "a4"],
        validAnswer: [
          {
            title: "economie collaborative",
            valid: ["a1", "a2"],
          },
          {
            title: "economie sociale",
            valid: ["a3", "a2"],
          },
        ]
    },
    reward: 1,
    timing: 30,
    logo: "./logo.png",
    challenge: false,
  },
  {
    //form multiple et forme unique, meme structure
    number: 7,
    qtype: "form-unique",
    question: "Titre question?",
    response: {
       answers: ["a1", "a2", "a3", "a4"],
       validAnswers: ["a2"],
    }, 
    reward: 1,
    timing: 30,
    logo: "./logo.png",
    theme: "théorie",
    challenge: false,
  }
];