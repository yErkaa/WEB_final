function submitQuestion() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const question = document.getElementById('question').value;

    if (firstName && lastName && question) {
        // Сохранение имени и фамилии в локальном хранилище
        localStorage.setItem('user', JSON.stringify({ firstName, lastName }));

        // Здесь можно добавить логику отправки вопроса админу (например, через API)
        alert('Ваш вопрос отправлен администратору!');

        // Очистка поля вопроса после отправки
        document.getElementById('question').value = '';
    } else {
        alert('Пожалуйста, заполните все поля!');
    }
}
