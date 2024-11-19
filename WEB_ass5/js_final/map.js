function initMap() {
    // Создаем карту и устанавливаем начальную позицию над Лос-Анджелесом
    const map = L.map('map').setView([34.043045, -118.267255], 13);

    // Добавляем слой карты (например, OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Добавляем маркер на арену Лейкерс
    const marker = L.marker([34.043045, -118.267255]).addTo(map);
    marker.bindPopup('<b>Crypto.com Arena</b><br />Дом Лос-Анджелес Лейкерс').openPopup();
}

// Инициализация карты после загрузки страницы
document.addEventListener('DOMContentLoaded', initMap);