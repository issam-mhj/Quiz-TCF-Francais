    const quiz = [
        {
            question: "Quelle est la capitale de la France ?",
            option1: "Paris",
            option2: "Lyon",
            option3: "Marseille",
            option4: "Nice",
            correctOption: "Paris"
        },
        {
            question: "Comment dit-on 'hello' en français ?",
            option1: "Bonjour",
            option2: "Salut",
            option3: "Merci",
            option4: "Au revoir",
            correctOption: "Bonjour"
        },
        {
            question: "Quel est l'article défini pour 'chat' ?",
            option1: "La",
            option2: "Le",
            option3: "Les",
            option4: "Un",
            correctOption: "Le"
        },
        {
            question: "Quel est le contraire de 'jour' ?",
            option1: "Soir",
            option2: "Lendemain",
            option3: "Nuit",
            option4: "Matin",
            correctOption: "Nuit"
        },
        {
            question: "Quelle est la couleur du drapeau français ?",
            option1: "Bleu, Blanc, Rouge",
            option2: "Rouge, Jaune, Noir",
            option3: "Vert, Blanc, Rouge",
            option4: "Bleu, Jaune, Rouge",
            correctOption: "Bleu, Blanc, Rouge"
        },
        {
            question: "Que veut dire 'Merci' en anglais ?",
            option1: "Goodbye",
            option2: "Thanks",
            option3: "Please",
            option4: "Sorry",
            correctOption: "Thanks"
        },
        {
            question: "Quel est le féminin de 'acteur' ?",
            option1: "Actrice",
            option2: "Acteur",
            option3: "Actrice",
            option4: "Actrices",
            correctOption: "Actrice"
        },
        {
            question: "Comment dit-on 'book' en français ?",
            option1: "Livre",
            option2: "Livret",
            option3: "Bouquin",
            option4: "Journal",
            correctOption: "Livre"
        },
        {
            question: "Quel est le pluriel de 'cheval' ?",
            option1: "Chevals",
            option2: "Chevaux",
            option3: "Chevauxs",
            option4: "Chevals",
            correctOption: "Chevaux"
        },
        {
            question: "Que signifie 'pomme' ?",
            option1: "Banana",
            option2: "Grapes",
            option3: "Apple",
            option4: "Pear",
            correctOption: "Apple"
        },
        {
            question: "Quel jour vient après lundi ?",
            option1: "Mardi",
            option2: "Mercredi",
            option3: "Jeudi",
            option4: "Vendredi",
            correctOption: "Mardi"
        },
        {
            question: "Quelle est la saison la plus chaude ?",
            option1: "Hiver",
            option2: "Été",
            option3: "Printemps",
            option4: "Automne",
            correctOption: "Été"
        },
        {
            question: "Comment dit-on 'I'm sorry' en français ?",
            option1: "Je t'aime",
            option2: "Je suis désolé",
            option3: "Merci",
            option4: "À bientôt",
            correctOption: "Je suis désolé"
        },
        {
            question: "Quelle est la forme correcte pour 'nous (aller)' au présent ?",
            option1: "Nous allont",
            option2: "Nous allons",
            option3: "Nous allez",
            option4: "Nous aller",
            correctOption: "Nous allons"
        },
        {
            question: "Quel est le contraire de 'petit' ?",
            option1: "Jeune",
            option2: "Grand",
            option3: "Gros",
            option4: "Épais",
            correctOption: "Grand"
        },
        {
            question: "Comment dit-on 'dog' en français ?",
            option1: "Chien",
            option2: "Chat",
            option3: "Lapin",
            option4: "Oiseau",
            correctOption: "Chien"
        },
        {
            question: "Quelle est la conjugaison correcte pour 'il (être)' au présent ?",
            option1: "Il est",
            option2: "Il être",
            option3: "Il sont",
            option4: "Il sois",
            correctOption: "Il est"
        },
        {
            question: "Quel est l'infinitif de 'mangé' ?",
            option1: "Manger",
            option2: "Mangier",
            option3: "Mangre",
            option4: "Mange",
            correctOption: "Manger"
        },
        {
            question: "Que signifie 'poisson' ?",
            option1: "Chicken",
            option2: "Fish",
            option3: "Pasta",
            option4: "Pork",
            correctOption: "Fish"
        },
        {
            question: "Comment dit-on 'beautiful' en français ?",
            option1: "Beau",
            option2: "Moche",
            option3: "Vieux",
            option4: "Petit",
            correctOption: "Beau"
        }
    ];
   
    let currentQuestionIndex = 0;
    let score = 0;
    let countInt = 1;
    let det = 0;

    function displayQuestion() {
        const questionElement = document.getElementById("questions");
        const option1 = document.getElementById("rep1");
        const option2 = document.getElementById("rep2");
        const option3 = document.getElementById("rep3");
        const option4 = document.getElementById("rep4");

        questionElement.innerText = quiz[currentQuestionIndex].question;
        option1.innerText = quiz[currentQuestionIndex].option1;
        option2.innerText = quiz[currentQuestionIndex].option2;
        option3.innerText = quiz[currentQuestionIndex].option3;
        option4.innerText = quiz[currentQuestionIndex].option4;

        document.getElementById("rep1").style.backgroundColor = "white";
        document.getElementById("rep2").style.backgroundColor = "white";
        document.getElementById("rep3").style.backgroundColor = "white";
        document.getElementById("rep4").style.backgroundColor = "white";

        document.getElementById("nextbtn").style.display = "none";
        det = 0;
    }

    function check() {
        const correct = quiz[currentQuestionIndex].correctOption;
        if (correct === quiz[currentQuestionIndex].option1) return 1;
        if (correct === quiz[currentQuestionIndex].option2) return 2;
        if (correct === quiz[currentQuestionIndex].option3) return 3;
        if (correct === quiz[currentQuestionIndex].option4) return 4;
    }

    const answers = document.querySelectorAll(".rep");
    answers.forEach((answer) => {
        answer.addEventListener("click", function () {
            if (det === 0) {
                document.getElementById("nextbtn").style.display = "block";
                if (answer.innerHTML !== quiz[currentQuestionIndex].correctOption) {
                    answer.style.backgroundColor = "red";
                    const correctNum = check();
                    document.getElementById(`rep${correctNum}`).style.backgroundColor = "green";
                } else {
                    answer.style.backgroundColor = "green";
                    score++;
                    document.getElementById("scrnum").textContent = score;
                }
                det = 1;
            }
        });
    });

function countScore(a){
    let b= a/2;
    let rslt;
    if (b<=2){
        rslt = "A1";
    }else if (b<=4){
        rslt = "A2";
    }else if (b<=6){
        rslt = "B1";
    }else if (b<=8){
        rslt = "B2";
    }else if (b===9){
        rslt = "C1";
    }else{
            rslt = "C2";
    }
    return rslt;
}

const store = window.localStorage;

    document.getElementById("nextbtn").addEventListener("click", function () {
        currentQuestionIndex++;
        if (currentQuestionIndex < quiz.length) {
            countInt++;
            document.getElementById("count").textContent = countInt;
            displayQuestion();
        } else {
            document.getElementById("shown").style.display = "none";
            document.getElementById("lastDiv").style.display = "block";
            const go = document.getElementById("continue");
            const replay = document.getElementById("replay");
            let level = document.getElementById("level");
            let final = document.getElementById("finalSCR");
            level.textContent = countScore(score);
            final.textContent = score;
            store.setItem("lastScore",score);
            replay.addEventListener("click",function(){
                document.getElementById("lastDiv").style.display = "none";
                document.getElementById("shown").style.display = "block";
                score = 0; 
                document.getElementById("scrnum").textContent = score;
                currentQuestionIndex = 0; 
                countInt = 1;
                document.getElementById("count").textContent = countInt;
                displayQuestion();
                })
            go.addEventListener("click",function(){
                document.getElementById("lastDiv").style.display = "none";
                document.getElementById("hidden").style.display = "block";
                document.getElementById("intro").style.display = "block";
                document.getElementById("lScore").style.display = "block";
                score = 0;
                document.getElementById("scrnum").textContent = score;
                currentQuestionIndex = 0;
                countInt = 1; 
                let lScore = document.getElementById("lastScore");
                lScore.textContent = store.getItem("lastScore");
            })
        }
    });

    document.getElementById("start").addEventListener("click", function () {
        document.getElementById("hidden").style.display = "none";
        document.getElementById("intro").style.display = "none";
        document.getElementById("shown").style.display = "block";
        score = 0; 
        document.getElementById("scrnum").textContent = score;
        currentQuestionIndex = 0; 
        countInt = 1;
        document.getElementById("count").textContent = countInt;
        displayQuestion();
    });