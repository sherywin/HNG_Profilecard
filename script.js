function updateKenyaTime() {
    let kenyaTimeElement = document.getElementById("utc-time");

    // Get current time in UTC
    let now = new Date();

    // Convert UTC to Kenya time (UTC+3)
    let kenyaOffset = 3 * 60; // 3 hours in minutes
    let kenyaTime = new Date(now.getTime() + kenyaOffset * 60000);

    // Format time (HH:MM:SS)
    let hours = kenyaTime.getHours().toString().padStart(2, '0');
    let minutes = kenyaTime.getMinutes().toString().padStart(2, '0');
    let seconds = kenyaTime.getSeconds().toString().padStart(2, '0');

    // Display time
    kenyaTimeElement.textContent = `Kenya Time (EAT): ${hours}:${minutes}:${seconds}`;
}

// Update time on page load
updateKenyaTime();

// Update time every second
setInterval(updateKenyaTime, 1000);
