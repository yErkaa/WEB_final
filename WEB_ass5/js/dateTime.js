function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById('dateTime').textContent = `Current Date and Time: ${dateTimeString}`;
}

setInterval(updateDateTime,1000)