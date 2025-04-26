// Initialize data storage
const workoutData = JSON.parse(localStorage.getItem('workoutData')) || {
    day: 1, 
    reps: 10, 
    workoutsCompleted: 0
};

// Define the workout plan
const workoutPlan = [
    { name: "Push-ups", description: "Push-ups help to build upper body strength, targeting the chest, shoulders, and triceps." },
    { name: "Squats", description: "Squats work on building leg strength, particularly in the quadriceps, hamstrings, and glutes." },
    { name: "Plank", description: "The plank is excellent for strengthening the core, including your abs, back, and shoulders." },
    { name: "Dips", description: "Dips target your triceps, chest, and shoulders for upper body strength." },
];

// Update UI with current workout info
function updateWorkoutUI() {
    const currentWorkout = workoutPlan[workoutData.day - 1];
    document.getElementById('workout-name').textContent = currentWorkout.name;
    document.getElementById('workout-description').textContent = currentWorkout.description;
    document.getElementById('reps-count').textContent = workoutData.reps;
}

// Start workout
document.getElementById('start-workout').addEventListener('click', function() {
    alert(`Starting your workout: ${workoutPlan[workoutData.day - 1].name}`);
    
    // After starting, increase workout count
    workoutData.workoutsCompleted++;
    localStorage.setItem('workoutData', JSON.stringify(workoutData));
    
    // Update the UI after the workout is started
    updateWorkoutUI();
    
    // Show a completion alert after the workout is started
    setTimeout(function() {
        alert('Great job! You have completed today\'s workout.');
    }, 1000); // Delay alert for 1 second to simulate transition time
});


// View progress
document.getElementById('view-progress').addEventListener('click', function() {
    window.location.href = 'progress.html';
});

// Move to the next workout
document.getElementById('start-next-workout').addEventListener('click', function() {
    workoutData.day++;
    
    if (workoutData.day > workoutPlan.length) {
        workoutData.day = 1; // Reset to the first workout after all are completed
    }

    // Increase reps each week (7 days of workout)
    if (workoutData.workoutsCompleted % 7 === 0) {
        workoutData.reps += 5;
    }
    
    localStorage.setItem('workoutData', JSON.stringify(workoutData));
    updateWorkoutUI();
});

// Settings button (you can expand this functionality)
document.getElementById('settings').addEventListener('click', function() {
    alert('Settings functionality coming soon!');
});

// Initial call to update the UI
updateWorkoutUI();
