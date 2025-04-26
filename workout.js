// Load user data from localStorage
const userData = JSON.parse(localStorage.getItem('trainBroUserData'));
const startDate = new Date(localStorage.getItem('trainBroStartDate'));
let daysTrained = parseInt(localStorage.getItem('trainBroDaysTrained'));

// Get current week
const currentWeek = Math.floor((daysTrained) / 7) + 1;

// Map out exercises
const exercises = [
    {
        name: "Push-ups",
        description: "Start in a plank position with hands shoulder-width apart. Keep your body straight and lower yourself until your chest touches the ground.",
        maxReps: userData.pushups,
    },
    {
        name: "Squats",
        description: "Stand with your feet shoulder-width apart, bend your knees, and lower your body as if sitting down. Keep your chest up and knees behind your toes.",
        maxReps: userData.squats,
    },
    {
        name: "Plank",
        description: "Lie face down and raise yourself on your forearms and toes. Keep your body in a straight line, tightening your core and glutes.",
        maxTime: userData.plank,
    },
    {
        name: "Wall Sit",
        description: "Slide your back down a wall until your thighs are parallel to the floor. Keep your knees above your ankles and your back against the wall.",
        maxTime: userData.wallsit,
    },
    {
        name: "Dips",
        description: "Use a sturdy chair or surface, and lower your body by bending your arms, then push back up to the starting position.",
        maxReps: userData.dips,
    },
    {
        name: "Handstand Holds",
        description: "Kick up against a wall and hold yourself up in a handstand. Keep your core tight and focus on stability.",
        maxTime: userData.handstand,
    }
];

// Adjust reps based on the current week
exercises.forEach(exercise => {
    if (exercise.maxReps) {
        exercise.reps = Math.ceil(exercise.maxReps * (1 + (currentWeek - 1) * 0.1));
    }
    if (exercise.maxTime) {
        exercise.time = Math.ceil(exercise.maxTime * (1 + (currentWeek - 1) * 0.1));
    }
});

// Display the workout for the day
function displayWorkout() {
    const workoutList = document.getElementById("workout-list");
    workoutList.innerHTML = "";

    exercises.forEach(exercise => {
        const div = document.createElement("div");
        div.classList.add("workout-item");

        const exerciseTitle = document.createElement("h3");
        exerciseTitle.textContent = exercise.name;

        const description = document.createElement("p");
        description.textContent = exercise.description;

        const repsOrTime = document.createElement("p");
        if (exercise.reps) {
            repsOrTime.textContent = `Reps: ${exercise.reps}`;
        } else {
            repsOrTime.textContent = `Time: ${exercise.time}s`;
        }

        div.appendChild(exerciseTitle);
        div.appendChild(description);
        div.appendChild(repsOrTime);
        workoutList.appendChild(div);
    });

    document.getElementById("week").textContent = currentWeek;
    document.getElementById("daysTrained").textContent = daysTrained;
}

document.getElementById("startWorkout").addEventListener("click", function() {
    // Start workout logic
    alert("Let’s start! Follow the workout instructions.");
    document.getElementById("nextWorkout").disabled = false;
    document.getElementById("startWorkout").disabled = true;
});

// Handle next workout button (simulate going to next day)
document.getElementById("nextWorkout").addEventListener("click", function() {
    daysTrained += 1;
    localStorage.setItem("trainBroDaysTrained", daysTrained.toString());
    displayWorkout(); // Update the workout after each day
    document.getElementById("nextWorkout").disabled = true;
    document.getElementById("startWorkout").disabled = false;
});

displayWorkout();
