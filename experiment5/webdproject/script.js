const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "High Text Machine Language",
        c: "Hyper Transfer Markup Language",
        d: "Home Tool Markup Language",
        correct: "a"
    },
    {
        question: "Which language is used for styling web pages?",
        a: "HTML",
        b: "CSS",
        c: "Python",
        d: "C++",
        correct: "b"
    },
    {
        question: "Which language is used for web page functionality?",
        a: "Java",
        b: "Python",
        c: "JavaScript",
        d: "PHP",
        correct: "c"
    },
    {
        question: "Which tag is used for the largest heading in HTML?",
        a: "<h6>",
        b: "<head>",
        c: "<h1>",
        d: "<heading>",
        correct: "c"
    },
    {
        question: "Which CSS property changes text color?",
        a: "background-color",
        b: "font-style",
        c: "text-color",
        d: "color",
        correct: "d"
    }
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const aText = document.getElementById("a_text");
const bText = document.getElementById("b_text");
const cText = document.getElementById("c_text");
const dText = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentData = quizData[currentQuiz];

    questionEl.innerText = currentData.question;
    aText.innerText = currentData.a;
    bText.innerText = currentData.b;
    cText.innerText = currentData.c;
    dText.innerText = currentData.d;
}

function deselectAnswers() {
    answerEls.forEach(answer => {
        answer.checked = false;
    });
}

function getSelected() {
    let answer;

    answerEls.forEach(ans => {
        if (ans.checked) {
            answer = ans.id;
        }
    });

    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            document.getElementById("quiz").innerHTML = `
                <h2>Your Score: ${score}/${quizData.length}</h2>
                <button onclick="location.reload()">Restart Quiz</button>
            `;
        }
    } else {
        alert("Please select an answer!");
    }
});