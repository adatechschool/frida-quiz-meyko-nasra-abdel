/*const msgWin=document.querySelector("p") // selection tus les p
msgWin.style.display="block" // none pour cacher le txt
const choix1 = document.getElementById("choix1") // selectionner un id
console.log(choix1)
choix1.innerText =  "Bamako" // modifie l'interieur d'un boutoj*/


const capitale = {
  questions: [
    {
      texte: "Quel est la capitale de la Grande-Bretagne ?", // 0
      options: [
        "Dublin",
        "Londres",
        "Liverpool",
        "Amsterdam"
      ],
      correct_answer: "Londres"
    },
    {
      texte: "Quel est la capital du Zimbabwe ?",
      options: [
        "Harare",
        "Lusaka",
        "Maputo",
        "Gaborone"
      ],
      correct_answer: "Harare",
    },
    {
    texte: "Quel est la capital de l'Islande ?",
      options: [
        "Helsinki",
        "Oslo",
        "Reykjavik",
        "Nuuk"
      ],
      correct_answer: "Reykjavik"
    },
      {
        texte: "Quel est la capital du Laos ?",
      options: [
        "Maseru",
        "Vientiane",
        "Nusantara",
        "Manille"
      ],
      correct_answer: "Vientiane"
      },

      {
        texte: "Quel est la capital de la Mongolie?",
      options: [
        "Pyongyang",
        "Astana",
        "Oulan-Bator",
        "Tachkent"
      ],
      correct_answer: "Oulan-Bator"
      }
  ]
};


// Élèment du html dans js
const quizz = document.querySelector(".quizz")
const questionHtml= document.querySelector(".question")
const choix = document.querySelector(".choix")
const boutonSuivant = document.querySelector("#suivant") 
const msgWin = document.querySelector("#msgWin")
const boutonRejouer = document.querySelector("#rejouer")

//////////////////////////////////////////////////////////
 let referenceQuestion= 0  // referencequestion = 0 qui servira de valeur de base au tableau
////////////////////////////////////////////////////////////
function showQuestion(){ 
    choix.innerText="" // remettre à zero la balise choix ou les boutons choix
    const questionDuTableau=capitale.questions[referenceQuestion]  // Créer une variable qui va reprendre les questions de l'objet du tableau d'objet []
    // questionHtml.textContent = questionDuTableau.texte
    questionHtml.innerText = questionDuTableau.texte// je modifie le texte de la balise p qui s'appelle sur js questionHtml en reprenant la question du tableau capitale
    questionDuTableau.options.forEach((options) => { // pour chaque options du tableau fais le code ci dessous
        let optionButton = document.createElement("button") // on crée une variable qui crée des boutons dans l'html
        choix.appendChild(optionButton) // choix est le parent des options boutons
        optionButton.innerHTML= options // on modifie le contenu des boutons options
    })
}
////////////////////////////////////////////////////////////////
showQuestion() 
///////////////////////////////////////////////////////////////
boutonSuivant.addEventListener("click", () => {
  referenceQuestion += 1 // on peut aussi écrire ++, dans le but de changer la question et la réponse
  if(referenceQuestion < capitale.questions.length){
showQuestion()
  } else {
    boutonSuivant.style.display="none" // rend invisible le bouton suivant quand la valeur a fait le tour du tableau donc quand il n'y a plus de de réponses
    boutonRejouer.style.display="block" // rend visible le bouton rejouer
  }
})

boutonRejouer.addEventListener("click", () => {
  referenceQuestion = 0
  boutonRejouer.style.display="none"// rend invisible le bouton rejouer quand la valeur à fait rebooté le quizz
  boutonSuivant.style.display="block"//rend visible le bouton suivant
  showQuestion()
})




