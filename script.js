// Pomodoro Timer
let timerInterval;
let timeLeft = 1500; // 25 minutes in seconds

document.getElementById('start-timer').addEventListener('click', () => {
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
});

document.getElementById('reset-timer').addEventListener('click', () => {
  clearInterval(timerInterval);
  timeLeft = 1500;
  updateTimerDisplay();
});

function updateTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    updateTimerDisplay();
  } else {
    clearInterval(timerInterval);
    alert('Time is up! Take a break.');
  }
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById('timer').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// To-Do List
document.getElementById('add-task').addEventListener('click', () => {
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  if (taskInput.value.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = '';
  }
});

// Quick Notes
document.getElementById('save-notes').addEventListener('click', () => {
  const notes = document.getElementById('notes').value;
  localStorage.setItem('quickNotes', notes);
  alert('Notes saved!');
});

// Load saved notes
document.getElementById('notes').value = localStorage.getItem('quickNotes') || '';

// Unit Converter
document.getElementById('convert-unit').addEventListener('click', () => {
  const inputValue = parseFloat(document.getElementById('unit-input').value);
  const unitType = document.getElementById('unit-type').value;
  let result;

  switch (unitType) {
    case 'celsius':
      result = (inputValue * 9/5) + 32;
      break;
    case 'kilometers':
      result = inputValue * 0.621371;
      break;
    case 'kilograms':
      result = inputValue * 2.20462;
      break;
    default:
      result = 'Invalid unit';
  }

  document.getElementById('conversion-result').textContent = `Result: ${result}`;
});