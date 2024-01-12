document.addEventListener('DOMContentLoaded', function () {
    const workoutForm = document.getElementById('workoutForm');
    const goalForm = document.getElementById('goalForm');

    // Load stored data on page load
    loadStoredData();

    // Event listener for logging workouts
    workoutForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const workoutType = document.getElementById('workoutType').value;
        const duration = parseInt(document.getElementById('duration').value);

        if (!isNaN(duration)) {
            logWorkout(workoutType, duration);
            updateProgress();
            workoutForm.reset();
        }
    });

    // Event listener for setting fitness goals
    goalForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const targetWeight = parseFloat(document.getElementById('targetWeight').value);
        const weeklyExercise = parseFloat(document.getElementById('weeklyExercise').value);

        if (!isNaN(targetWeight) && !isNaN(weeklyExercise)) {
            setGoals(targetWeight, weeklyExercise);
            updateProgress();
            goalForm.reset();
        }
    });

    // Function to load stored data
    function loadStoredData() {
        const storedWeight = parseFloat(localStorage.getItem('targetWeight')) || '-';
        const storedExerciseGoal = parseFloat(localStorage.getItem('weeklyExercise')) || '-';
        const storedTotalExercise = parseFloat(localStorage.getItem('totalExercise')) || '-';

        document.getElementById('currentWeight').innerText = storedWeight;
        document.getElementById('weeklyExerciseGoal').innerText = storedExerciseGoal;
        document.getElementById('totalExercise').innerText = storedTotalExercise;
    }

    // Function to log a workout
    function logWorkout(workoutType, duration) {
        const totalExercise = parseFloat(localStorage.getItem('totalExercise')) || 0;
        localStorage.setItem('totalExercise', totalExercise + duration);

        // Update progress
        updateProgress();
    }

    // Function to set fitness goals
    function setGoals(targetWeight, weeklyExercise) {
        localStorage.setItem('targetWeight', targetWeight);
        localStorage.setItem('weeklyExercise', weeklyExercise);

        // Update progress
        updateProgress();
    }

    // Function to update progress on the page
    function updateProgress() {
        const storedWeight = localStorage.getItem('targetWeight') || '-';
        const storedExerciseGoal = localStorage.getItem('weeklyExercise') || '-';
        const storedTotalExercise = localStorage.getItem('totalExercise') || '-';

        document.getElementById('currentWeight').innerText = storedWeight;
        document.getElementById('weeklyExerciseGoal').innerText = storedExerciseGoal;
        document.getElementById('totalExercise').innerText = storedTotalExercise;
    }
});
