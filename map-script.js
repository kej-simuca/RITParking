const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const timeInfo = document.getElementById('time-info');

const startHourSelect = document.getElementById('startHour');
const startMinuteSelect = document.getElementById('startMinute'); // Added this line
const startPeriodSelect = document.getElementById('startPeriod'); // Added this line
const endHourSelect = document.getElementById('endHour');
const endMinuteSelect = document.getElementById('endMinute'); // Added this line
const endPeriodSelect = document.getElementById('endPeriod'); // Added this line

let ticketPrice = 10;

// Function declarations
function updateSelectedSeatsCount() {
  const selectedSeats = document.querySelectorAll('.row .selected');
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  if (seatsIndex.length > 1) {
    alert('Please select only one seat.');
    selectedSeats.forEach((seat, index) => {
      if (index !== seatsIndex.length - 1) {
        seat.classList.remove('selected');
      }
    });
  }

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;

  const selectedStartHour = startHourSelect.options[startHourSelect.selectedIndex].text;
  const selectedStartMinute = startMinuteSelect.options[startMinuteSelect.selectedIndex].text;
  const selectedStartPeriod = startPeriodSelect.options[startPeriodSelect.selectedIndex].text;

  const selectedEndHour = endHourSelect.options[endHourSelect.selectedIndex].text;
  const selectedEndMinute = endMinuteSelect.options[endMinuteSelect.selectedIndex].text;
  const selectedEndPeriod = endPeriodSelect.options[endPeriodSelect.selectedIndex].text;

  document.getElementById('startTime').innerText = `${selectedStartHour}:${selectedStartMinute} ${selectedStartPeriod}`;
  document.getElementById('endTime').innerText = `${selectedEndHour}:${selectedEndMinute} ${selectedEndPeriod}`;
}



function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedStartHour = localStorage.getItem('selectedStartHour');
  const selectedEndHour = localStorage.getItem('selectedEndHour');

  if (selectedStartHour !== null && selectedEndHour !== null) {
    startHourSelect.value = selectedStartHour;
    endHourSelect.value = selectedEndHour;
  }

  updateSelectedSeatsCount();
}

// Event listeners
seats.forEach(seat => {
  seat.addEventListener('click', () => {
    seats.forEach(s => {
      if (s !== seat) {
        s.classList.remove('selected');
      }
    });

    seat.classList.toggle('selected');
    updateSelectedSeatsCount();
  });
});

startHourSelect.addEventListener('change', () => {
  localStorage.setItem('selectedStartHour', startHourSelect.value);
  updateSelectedSeatsCount();
});

endHourSelect.addEventListener('change', () => {
  localStorage.setItem('selectedEndHour', endHourSelect.value);
  updateSelectedSeatsCount();
});

// Initial population
populateUI();
