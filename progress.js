// Load user data and the start date
const userData = JSON.parse(localStorage.getItem('trainBroUserData'));
const startDate = new Date(localStorage.getItem('trainBroStartDate'));
let daysTrained = parseInt(localStorage.getItem('trainBroDaysTrained'));

// Get the current week
const currentWeek = Math.floor((daysTrained) / 7) + 1;
const nextWorkoutDay = new Date(startDate);
nextWorkoutDay.setDate(nextWorkoutDay.getDate() + daysTrained + 1);

// Calculate remaining days until the next workout
const today = new Date();
const daysUntilNextWorkout = Math.ceil((nextWorkoutDay - today) / (1000 * 60 * 60 * 24));

// Display total days trained, current week, and next workout countdown
document.getElementById("totalDaysTrained").textContent = daysTrained;
document.getElementById("currentWeek").textContent = currentWeek;
document.getElementById("daysUntilNextWorkout").textContent = daysUntilNextWorkout;

function displayWorkoutHistory() {
    const historyList = document.getElementById("history-list");
    historyList.innerHTML = ""; // Clear previous content

    // Loop through the past workouts (days trained)
    for (let i = 1; i <= daysTrained; i++) {
        const workoutHistoryItem = document.createElement("div");
        workoutHistoryItem.classList.add("workout-history-item");

        const date = new Date(startDate);
        date.setDate(date.getDate() + i);

        const workoutDate = document.createElement("p");
        workoutDate.textContent = `Day ${i} - ${date.toDateString()}`;

        workoutHistoryItem.appendChild(workoutDate);
        historyList.appendChild(workoutHistoryItem);
    }
}

// Event listener for going back to the home page
document.getElementById("backToHome").addEventListener("click", function() {
    window.location.href = 'index.html'; // Go back to the main page
});

displayWorkoutHistory();
