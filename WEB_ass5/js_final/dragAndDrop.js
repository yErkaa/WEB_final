const items = document.querySelectorAll('.draggable-item');
const dropZone = document.querySelector('.drop-zone');
let selectedPlayersCount = 0; // Счетчик для выбранных игроков

items.forEach(item => {
    item.addEventListener('dragstart', () => {
        item.classList.add('dragging');
    });
    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
    });
});

// Обработчик для удаления игрока из зоны
dropZone.addEventListener('click', (e) => {
    if (e.target.classList.contains('draggable-item')) {
        const removedItem = e.target;
        dropZone.removeChild(removedItem);
        selectedPlayersCount--;
        alert(`${removedItem.textContent} удален из вашей команды!`);
    }
});

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
});

dropZone.addEventListener('drop', () => {
    const draggingItem = document.querySelector('.dragging');

    // Проверяем, сколько игроков уже добавлено
    if (selectedPlayersCount < 5) {
        dropZone.appendChild(draggingItem);
        selectedPlayersCount++;
        alert(`${draggingItem.textContent} добавлен в вашу команду!`);
    } else {
        alert('Вы уже добавили 5 игроков в вашу команду!');
    }
});