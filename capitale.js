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
const accueil = document.getElementById("accueil")
const boutonJouer = document.getElementById("jouer")
const quizz = document.querySelector(".quizz")
const question = document.querySelector(".question")
const reponses = document.querySelector(".reponses")
const boutonSuivant = document.getElementById("suivant")
const victoireText = document.getElementById("victoire-text")
const boutonRejouer = document.getElementById("rejouer")
const scoreText = document.getElementById("score")
const resultat = document.getElementById("resultat")
const temps= document.getElementById("temps")


boutonJouer.addEventListener("click", () => {
	
    // Masquer le menu d'accueil et afficher le quiz
    boutonJouer.style.display = "none"
    quizz.style.display = "block"
	boutonSuivant.style.display = "none"
	quizz.style.width="100%"
	quizz.style.padding="35px 20px"
	boutonJouer.style.marginTop= "200px"
    // Démarrer le quiz
    afficherQuestion();
})

//////////////////////////////////////////////////////////
let referenceQuestion = 0  // referencequestion = 0 qui servira de valeur de base au tableau
////////////////////////////////////////////////////////////
let score = 0
let tempsRestant= 10
let interValId= null


function afficherQuestion() {
	scoreText.style.display="block"
	reponses.innerHTML = "" // remettre à zero la balise choix ou les boutons choix
	const questionDuTableau = capitale.questions[referenceQuestion]  // Créer une variable qui va reprendre les questions de l'objet du tableau d'objet []
	question.innerText = questionDuTableau.texte// je modifie le texte de la balise p qui s'appelle sur js questionHtml en reprenant la question du tableau capitale
	
	
	tempsRestant=10 // temps restant a chaque nouvel question affiché
	temps.innerText= tempsRestant // modifications sur le html

    clearInterval(interValId) // stopper l'ancien timer
	interValId = setInterval(() =>{
	 	tempsRestant -= 1 
		 temps.innerText= tempsRestant 

	 	if(tempsRestant === 0){
			clearInterval(interValId) 

			const optionButton= document.querySelectorAll("button")

			optionButton.forEach((bouton) =>{ // parcourt toutes les réponses tant que
				bouton.disabled = true; // les boutons ne sont pas désactivés 
			})
			boutonSuivant.disabled= false // réactive le boutons suivant
			boutonSuivant.style.display= "block"

		}

	 },1000) // miliseconde
	 questionDuTableau.options.forEach((option) => {
		let optionButton = document.createElement("button");
		optionButton.classList.add("reponse", "btn");
		optionButton.innerText = option;
		reponses.appendChild(optionButton);
	  
		optionButton.addEventListener("click", () => {
		  clearInterval(interValId);
		  boutonSuivant.style.display = "block";
	  
		  // Désactiver tous les boutons
		  reponses.querySelectorAll('.reponse').forEach((btn) => {
			btn.disabled = true;
		  });
	  
		  // Si mauvaise réponse
		  if (option !== questionDuTableau.correct_answer) {
			optionButton.style.backgroundImage = "none";
			optionButton.style.backgroundColor = "red";
		  } else {
			score += 1;
			optionButton.style.backgroundImage = "none";
			optionButton.style.backgroundColor = "green";
		  }
	  
		  scoreText.innerText = "score : " + score;
	  
		  // Trouver et colorer le bon bouton, même si on ne l’a pas cliqué
		  reponses.querySelectorAll(".reponse").forEach((btn) => {
			if (
			  btn.innerText.trim().toLowerCase() ===
			  questionDuTableau.correct_answer.toLowerCase()
			) {
			  btn.style.backgroundImage = "none"; // enlever le dégradé
			  btn.style.backgroundColor = "green";
			  btn.style.color = "white";
			}
		  });
		});
	  });
}

boutonSuivant.addEventListener("click", () => {
	boutonSuivant.style.display="none"// faire réaparaitre le bouton dès que l'on clique sur une réponse
	referenceQuestion += 1 // on peut aussi écrire ++, dans le but de changer la question et la réponse
	if (referenceQuestion < capitale.questions.length) {
		afficherQuestion()
	} else {
		boutonSuivant.style.display = "none" // rend invisible le bouton suivant quand la valeur a fait le tour du tableau donc quand il n'y a plus de de réponses
		boutonRejouer.style.display = "block" // rend visible le bouton rejouer
		resultat.style.display = "block"
		temps.style.display = "none"
	        
			calculScore()

		//resultat.innerText=
	}

})


boutonRejouer.addEventListener("click", () => {
	reponses.innerHTML = ""
	referenceQuestion = 0
	score= 0
    scoreText.innerText = "score :" + score
	boutonRejouer.style.display = "none"// rend invisible le bouton rejouer quand la valeur à fait rebooté le quizz
	boutonSuivant.style.display = "none"//rend visible le bouton suivant
	gif.style.display="none"
	resultat.style.display="none"
	afficherQuestion()
	temps.style.display="block"
	
})

const calculScore = () => {
	let message = "";
	question.innerText = `Tu as fait ${score} sur ${capitale.questions.length}`;
  
	// Vider les anciennes réponses
	reponses.innerHTML = "";
  
	// Supprimer ancien GIF s'il existe
	const ancienGif = document.getElementById("gif-dynamique");
	if (ancienGif) {
	  ancienGif.remove();
	}
  
	// Créer le gif dynamiquement
	const gif = document.createElement("img");
	gif.id = "gif-dynamique";
	
	if (score === capitale.questions.length) {
	  message = "Oh le GOAT, GG! Mais ne frime pas trop, hein Vincent ! 🥳";
	  gif.src = "/images/bravo.gif";
	} else if (score >= 3) {
	  message = "Juste au dessus de la moyenne, ta prof de géo en sueur... 😰 ";
	  gif.src = "/images/teacher-sweat.gif";
	} else {
	  message = "Retourne à l’école tout de suite ! 😅";
	  gif.src = "/images/nul.gif";
	}
	
	// Afficher le texte et le gif à la place des réponses
	resultat.innerText = message;
	scoreText.style.display = "none";
	reponses.appendChild(gif); // met le gif à la place des boutons
  };