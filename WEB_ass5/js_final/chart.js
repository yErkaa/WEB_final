// chart.js
document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('chartContainer', {
        chart: { type: 'column' },
        title: { text: 'Average points per match' },
        xAxis: {
            categories: ['LeBron James', 'Michael Jordan', 'Kobe Bryant', 'Shaquille O\'Neal', 'Dwyane Wade', 'Scottie Pippen']
        },
        yAxis: {
            title: { text: 'Points' }
        },
        series: [{
            name: 'Average points',
            data: [27.0, 30.1, 25.0, 23.7, 22.0, 16.1] // Пример статистики
        }]
    });
});