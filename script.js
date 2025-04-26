// List of workouts
const workouts = [
    {
        name: "Push Ups",
        description: "Keep your body straight, lower yourself until your chest nearly touches the floor, then push back up."
    },
    {
        name: "Squats",
        description: "Stand with feet shoulder-width apart, lower down as if sitting on a chair, then stand back up."
    },
    {
        name: "Plank",
        description: "Keep your body straight like a board, support yourself with elbows and toes, and hold."
    },
    {
        name: "Lunges",
        description: "Step forward with one leg and lower hips until both knees are bent at about 90 degrees, then return."
    },
    {
        name: "Handstand Practice",
        description: "Use a wall if needed. Kick up gently, keep arms straight, and maintain balance."
    }
];

// Handle page load
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const exercise = urlParams.get('exercise');

    if (exercise) {
        showWorkout(exercise);
    }
};

function showWorkout(exerciseName) {
    const exercise = workouts.find(w => w.name === exerciseName);

    if (exercise) {
        document.getElementById('exercise-name').innerText = exercise.name;
        document.getElementById('exercise-description').innerText = exercise.description;
    } else {
        document.getElementById('exercise-name').innerText = "Workout Not Found";
        document.getElementById('exercise-description').innerText = "Please select a valid workout.";
    }
}

// Timer
let timerInterval;
let seconds = 0;
let isRunning = false;

function startWorkout() {
    if (!isRunning) {
        timerInterval = setInterval(() => {
            seconds++;
            document.getElementById('timer').innerText = `Timer: ${seconds}s`;
        }, 1000);
        isRunning = true;
    }
}

function pauseWorkout() {
    clearInterval(timerInterval);
    isRunning = false;
}

function nextWorkout() {
    const currentExerciseName = document.getElementById('exercise-name').innerText;
    const currentIndex = workouts.findIndex(w => w.name === currentExerciseName);

    let nextIndex = (currentIndex + 1) % workouts.length;
    const nextExercise = workouts[nextIndex];

    window.location.href = `workout.html?exercise=${encodeURIComponent(nextExercise.name)}`;
}
