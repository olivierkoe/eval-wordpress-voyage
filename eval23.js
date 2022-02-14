/* 
Générateur de citation
    - Créez le fichier HTML (attention à la sémantique des balises)
    - Créez le fichier Css pour avoir un visuel le plus proche possible du mien. (font =
    satisfy)

    - Créez les variables nécessaires au projet, prenez 5 minutes pour réfléchir à un
    algorithme, cela vous donneras une idée de vos besoins.
    - Allez chercher tout les éléments à modifier dans le DOM et stockez les également.
    - Créez un tableau avec vos citations préférées ainsi que l’auteur correspondant.
    (une dizaine)
    - Créez un événement sur le clique du bouton « nouvelle citation ».
    - Créez une fonction permettant d’aller piocher une citation aux hasard dans votre
    tableau
    - Créez une fonction permettant d’actualise la citation et l’auteur.
    - Je vous laisse penser à un système pour qu’une citation ne sorte pas deux
    fois de suite.
    - Vous devriez avoir toutes les armes pour avancer, renseignez vous bien sur les
    fonctions mathématiques, elles pourront vous être utiles.
    - Vous pourriez avoir besoin d’une boucle à un endroit et de connaitre la longueur de
    votre tableau.
    J’en dis pas plus sinon c’est pas drôle, je vous donne la correction sur un zip et non
    dans le cours, comme ça vous avez tout.
    */

const arrayOfQuotes = [
  ["Mamamia", "Mario"],
  [
    "Le coup le plus rusé que le diable ait jamais réussi, c’est de faire croire à tout le monde qu’il n’existait pas.",
    "Kevin Spacey - Usual Suspects de Bryan Singer",
  ],
  [
    "J’ai dégusté son foie avec des fèves au beurre et un excellent Chianti",
    "Anthony Hopkins - Le silence des agneaux de Jonathan Demme",
  ],
  [
    "La vérité c’est comme une couverture trop petite. Tu peux tirer dessus de tous les côtés, tu auras toujours les pieds froids.",
    "Peter Weir - Le cercle des poètes disparus",
  ],
  [
    "On m’appelle Le Doctor, ou le gardien, ou « dégagez de cette planète ! » quoique à proprement parler ce n’est peut-être pas vraiment un nom.",
    "Doctor Who, le onzième docteur.",
  ],
  [
    "Tes fautes de fils sont mes défaillances de père.",
    "Gladiator, Marc Aurèle. ",
  ],
  [
    "- Je ne vois pas pourquoi tu ne veux pas le porter. < - Parce que j’ai l’air d’un idiot, voilà pourquoi.  - Pas plus que d’habitude.",
    "Harry Potter et L’ordre du Phoenix, Hermione et Ron",
  ],
  [
    "Aussi loin que je me souvienne, j’ai toujours voulu être un gangster. ",
    "Les affranchis, Henry Hill. ",
  ],
  [
    "- Excusez-moi mais vous êtes en train d’uriner sur ma voiture.  -Hein ? Ho, Ha oui ! … Mais c’est parce que j’ai la même là bas, j’ai confondu ! … Je peux finir ? - Oui.",
    "Les bronzés font du ski. ",
  ],
];

let butonCitation = document.querySelector(".bouton1");
let paragraphSelector1 = document.querySelector(".paragraphe1");
let paragraphSelector2 = document.querySelector(".paragraphe2");

var randomCitation =
  arrayOfQuotes[Math.floor(Math.random() * arrayOfQuotes.length)];

butonCitation.addEventListener("click", displayMessage);

function displayMessage() {
  paragraphSelector1.textContent = "citation :" + randomCitation[0];
  paragraphSelector2.textContent = "de l'auteur : " + randomCitation[1];

  randomCitation =
    arrayOfQuotes[Math.floor(Math.random() * arrayOfQuotes.length)];
}
