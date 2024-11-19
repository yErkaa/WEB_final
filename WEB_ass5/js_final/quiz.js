const quiz = [
    { question: "Какой игрок считается 'королем баскетбола'?", answers: ["Леброн Джеймс", "Майкл Джордан", "Кобе Брайант"], correct: "Майкл Джордан" },
    { question: "Сколько чемпионатов НБА выиграл Майкл Джордан?", answers: ["4", "6", "8"], correct: "6" },
    { question: "Какой клуб выиграл чемпионат НБА в 2020 году?", answers: ["Лос-Анджелес Лейкерс", "Майами Хит", "Голден Стэйт Уорриорз"], correct: "Лос-Анджелес Лейкерс" },
    { question: "Кто был первым игроком, который получил MVP НБА в 1980 году?", answers: ["Керри", "Бёрд", "Дункан"], correct: "Керри" },
    { question: "Сколько очков в одном матче за всю карьеру набрал Кобе Брайант?", answers: ["81", "61", "100"], correct: "81" },
];

function submitQuiz() {
    let score = 0;
    quiz.forEach((q, index) => {
        const answer = document.querySelector(`input[name="question${index}"]:checked`);
        if (answer && answer.value === q.correct) {
            score++;
        }
    });
    alert(`Ваш результат: ${score}/${quiz.length}`);
}