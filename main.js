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
    }


    function check(){
        if (quiz[currentQuestionIndex].correctOption === quiz[currentQuestionIndex].option1){
            return 1;
        }else if (quiz[currentQuestionIndex].correctOption === quiz[currentQuestionIndex].option2 ){
            return 2;
        }else if (quiz[currentQuestionIndex].correctOption === quiz[currentQuestionIndex].option3 ){
            return 3;
        }else if (quiz[currentQuestionIndex].correctOption === quiz[currentQuestionIndex].option4){
            return 4;
        }
    }

    displayQuestion();
    let number ;
    let det = 0;
    let score=0;
    const scoreCount = document.getElementById("scrnum");
    const answers = document.querySelectorAll(".rep");
    answers.forEach((answer) => {
        answer.addEventListener("click",function(){
            nextButton.style.display = "block";
            if(answer.innerHTML !== quiz[currentQuestionIndex].correctOption){
                if (answer.innerHTML === quiz[currentQuestionIndex].option1 && det ===0){
                    number = 1;
                    det = 1;
                    document.getElementById("rep1").style.backgroundColor = "red";
                    if(check()=== 1){
                        document.getElementById("rep1").style.backgroundColor = "green";
                    }else if (check()===2){
                        document.getElementById("rep2").style.backgroundColor = "green";
                    }else if(check()===3){
                        document.getElementById("rep3").style.backgroundColor = "green";
                    }else{
                        document.getElementById("rep4").style.backgroundColor = "green";
                    }
                }else if (answer.innerHTML === quiz[currentQuestionIndex].option2 && det === 0){
                    number = 2;
                    det = 1;
                    document.getElementById("rep2").style.backgroundColor = "red";
                    if(check()=== 1){
                        document.getElementById("rep1").style.backgroundColor = "green";
                    }else if (check()===2){
                        document.getElementById("rep2").style.backgroundColor = "green";
                    }else if(check()===3){
                        document.getElementById("rep3").style.backgroundColor = "green";
                    }else{
                        document.getElementById("rep4").style.backgroundColor = "green";
                    }
                }else if (answer.innerHTML === quiz[currentQuestionIndex].option3 && det === 0){
                    number = 3;
                    det = 1;
                    document.getElementById("rep3").style.backgroundColor = "red";
                    if(check()=== 1){
                        document.getElementById("rep1").style.backgroundColor = "green";
                    }else if (check()===2){
                        document.getElementById("rep2").style.backgroundColor = "green";
                    }else if(check()===3){
                        document.getElementById("rep3").style.backgroundColor = "green";
                    }else{
                        document.getElementById("rep4").style.backgroundColor = "green";
                    }
                }else if (answer.innerHTML === quiz[currentQuestionIndex].option4 && det === 0){
                    number = 4;
                    det = 1;
                    document.getElementById("rep4").style.backgroundColor = "red";
                    if(check()=== 1){
                        document.getElementById("rep1").style.backgroundColor = "green";
                    }else if (check()===2){
                        document.getElementById("rep2").style.backgroundColor = "green";
                    }else if(check()===3){
                        document.getElementById("rep3").style.backgroundColor = "green";
                    }else{
                        document.getElementById("rep4").style.backgroundColor = "green";
                    }
                }
            }else{
                if (quiz[currentQuestionIndex].correctOption === quiz[currentQuestionIndex].option1 && det ===0){
                    number = 1;
                    det = 1;
                    document.getElementById("rep1").style.backgroundColor = "green";
                    score= score+1;
                }else if (quiz[currentQuestionIndex].correctOption === quiz[currentQuestionIndex].option2 && det ===0){
                    number = 2;
                    det = 1;
                    document.getElementById("rep2").style.backgroundColor = "green";
                    score= score+1;
                }else if (quiz[currentQuestionIndex].correctOption === quiz[currentQuestionIndex].option3 && det ===0){
                    number = 3;
                    det = 1;
                    document.getElementById("rep3").style.backgroundColor = "green";
                    score= score+1;
                }else if (quiz[currentQuestionIndex].correctOption === quiz[currentQuestionIndex].option4 && det ===0){
                    number = 4;
                    det = 1;
                    document.getElementById("rep4").style.backgroundColor = "green";
                    score= score+1;
                }
            }
    });
    })

    const count = document.getElementById("count");
    let countInt=1;

    const nextButton = document.getElementById("nextbtn");
    nextButton.addEventListener("click", function() {
        currentQuestionIndex++; 

        if (currentQuestionIndex < quiz.length) {
            displayQuestion(); 
            nextButton.style.display = "none";
            det = 0;
            document.getElementById("rep1").style.backgroundColor = "white"
            document.getElementById("rep2").style.backgroundColor = "white";
            document.getElementById("rep3").style.backgroundColor = "white";
            document.getElementById("rep4").style.backgroundColor = "white";
            countInt++;
            count.textContent=countInt.toString();
            scoreCount.textContent=score.toString();
            if (countInt===20){
                countInt=0;
            }

        } else {
            alert("Quiz finished!");
            currentQuestionIndex = 0; 
            displayQuestion(); 
            hidden.style.display = "block";
            shown.style.display = "none";
            score=0;
        }
    });


    const start = document.getElementById("start");
    start.addEventListener("click", function() {
        const hidden = document.getElementById("hidden");
        const shown = document.getElementById("shown");
        hidden.style.display = "none";
        shown.style.display = "block";
    });
