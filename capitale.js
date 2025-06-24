/*const msgWin=document.querySelector("p") // selection tus les p
msgWin.style.display="block" // none pour cacher le txt
const choix1 = document.getElementById("choix1") // selectionner un id
console.log(choix1)
choix1.innerText =  "Bamako" // modifie l'interieur d'un boutoj*/





// Élèment du html dans js
const quizz = document.querySelector(".quizz")
const questionHtml= document.querySelector(".question")
const choix = document.querySelector(".choix")
const boutonSuivant = document.querySelector("#suivant") 
const msgWin = document.querySelector("#msgWin") 
console.log(questionHtml)

// let userHasClicked=false






const capitale = {
  questions: [
    {
      texte: "Quel est la capitale de la Grande-Bretagne ?", // 0
      choix: [
        "Dublin",
        "Londres",
        "Liverpool",
        "Amsterdam"
      ],
      correct_answer: "Londres"
    },
    {
      texte: "Quel est la capital du Zimbabwe ?",
      choix: [
        "Harare",
        "Lusaka",
        "Maputo",
        "Gaborone"
      ],
      correct_answer: "Harare",
    },
    {
    texte: "Quel est la capital de l'Islande ?",
      choix: [
        "Helsinki",
        "Oslo",
        "Reykjavik",
        "Nuuk"
      ],
      correct_answer: "Reykjavik"
    },
      {
        texte: "Quel est la capital du Laos ?",
      choix: [
        "Maseru",
        "Vientiane",
        "Nusantara",
        "Manille"
      ],
      correct_answer: "Vientiane"
      },

      {
        texte: "Quel est la capital de la Mongolie?",
      choix: [
        "Pyongyang",
        "Astana",
        "Oulan-Bator",
        "Tachkent"
      ],
      correct_answer: "Oulan-Bator"
      }
  ]
};

 let referenceQuestion= 0
 // referencequestion = 0 qui servira de valeur de base au tableau
 

//questionHtml.innerHTML="premiere question"


 

function showQuestion(){ 
    const questionDuTableau=capitale.questions[referenceQuestion]  // Créer une variable qui va reprendre les questions de l'objet du tableau d'objet []
   // questionHtml.textContent = questionDuTableau.texte
  questionHtml.innerText = questionDuTableau.texte // je modifie le texte de la balise p qui s'appelle sur js questionHtml en reprenant la question du tableau capitale

}

showQuestion() 

// boutonSuivant.addEventListener("click",() =>{

// })

