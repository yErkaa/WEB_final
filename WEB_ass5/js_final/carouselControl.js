document.addEventListener('DOMContentLoaded', () => {
    // Инициализация карусели с интервалом по умолчанию
    $('#carouselExampleIndicators').carousel({ interval: 3000 });

    window.setCarouselSpeed = function() {
        const speedInput = document.getElementById('speedControl');
        const speed = parseInt(speedInput.value, 10);

        if (speed && speed > 0) {
            console.log(`Setting carousel speed to: ${speed} ms`); // Лог для проверки
            $('#carouselExampleIndicators').carousel('dispose'); // Остановка текущей карусели
            $('#carouselExampleIndicators').carousel({ interval: speed }); // Запуск с новой скоростью
        } else {
            alert('Please enter a valid positive number for speed.');
        }
    };
});
