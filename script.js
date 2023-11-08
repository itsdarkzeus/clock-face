function updateClock() {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const dayAbbreviations = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayAbbreviation = dayAbbreviations[now.getDay()];
    const month = now.toLocaleString('en-US', { month: 'short' });
    const year = now.getFullYear();

    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('min');
    const secondsElement = document.getElementById('sec');
    const ampmElement = document.getElementById('ampm');
    const dayElement = document.getElementById(dayAbbreviation.toLowerCase());
    const monthElement = document.getElementById('month');
    const yearElement = document.getElementById('year');
    
    // Remove the 'active' class from the previously active day
    document.querySelector('.days-of-week .active').classList.remove('active');

    // Add the 'active' class to the current day
    dayElement.classList.add('active');
    
    hoursElement.textContent = h.toString().padStart(2, '0');
    minutesElement.textContent = m.toString().padStart(2, '0');
    secondsElement.textContent = s.toString().padStart(2, '0');
    ampmElement.textContent = h < 12 ? 'AM' : 'PM';
    monthElement.textContent = month;
    yearElement.textContent = year;
}

updateClock();
setInterval(updateClock, 1000);
