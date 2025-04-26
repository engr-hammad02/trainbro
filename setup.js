document.getElementById('setupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const userData = {};

    formData.forEach((value, key) => {
        userData[key] = Number(value);
    });

    localStorage.setItem('trainBroUserData', JSON.stringify(userData));
    localStorage.setItem('trainBroStartDate', new Date().toISOString());
    localStorage.setItem('trainBroDaysTrained', 0);

    alert('Data saved! Let\'s go bro 💪🔥');

    // Redirect to the main workout page
    window.location.href = 'workout.html';
});
