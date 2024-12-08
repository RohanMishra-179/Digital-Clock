function time() {
    const t = new Date(); // Create a new Date object for the current time
    const hours = String(t.getHours()).padStart(2, '0');
    const minutes = String(t.getMinutes()).padStart(2, '0');
    const seconds = String(t.getSeconds()).padStart(2, '0');
    document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(time, 1000); // Call the time function every second

function updateDate() {
    const today = new Date(); // Get the current date

    // Day of the week
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[today.getDay()];

    // Month
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = months[today.getMonth()];

    // Date and year
    const date = today.getDate();
    const year = today.getFullYear();

    // Display in the #date element
    document.getElementById("date").innerHTML = `${day}, ${month} ${date}, ${year}`;
}

// Call updateDate once at the start (date doesn’t change every second)
updateDate();
