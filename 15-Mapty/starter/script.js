'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const select = document.querySelector('select');



class Workout {

  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(distance, duration, coords) {
    this.distance = distance;
    this.duration = duration; // in km
    this.coords = coords; // in minutes
  }

  setDescription() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`
  }
}

class Running extends Workout {
  type = 'running';
  constructor(distance, duration, coords, cadence) {
    super(distance, duration, coords);
    this.cadence = cadence;

    this.calcPace();
    this.setDescription()
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace
  } // min/km
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(distance, duration, coords, elevationGain) {
    super(distance, duration, coords);
    this.elevationGain = elevationGain;

    this.calcSpeed();
    this.setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / this.duration;
    return this.speed
  }
}

const runner = new Running(4, 30, [30, 50], 100);
//////////////////////////////////////////////////
class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];
  constructor() {
    this.#getPosition();

    form.addEventListener('submit', this.#newWorkout.bind(this))

    inputType.addEventListener('change', this.#toggleElevationField);
    containerWorkouts.addEventListener('click', this.#moveToPopUp.bind(this));

    const resultLocal = this.#getLocalStorage();
    resultLocal.forEach((parsedWorkout) => this.#renderWorkout(parsedWorkout));
  }

  #getPosition() {
    // Using the Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.#loadMap.bind(this),
        (error) => {
          alert("Couldn't get your geolocation");
          console.log('error', error);
        }
      );
    }
  }

  #loadMap(position) {
    console.log('position', position);
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    const coords = [latitude, longitude]
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    L.marker([latitude, longitude])
      .addTo(this.#map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();

    this.#map.on('click', (mapE) => {
      this.#mapEvent = mapE
      this.#showForm()
    })

    this.#workouts.forEach(work => this.#renderWorkoutMarker(work));
  }

  #showForm() {
    form.classList.remove('hidden');
    inputDistance.focus();
    select.value = 'running';
  }

  #hideForm() {
    form.classList.add('hidden');
  }

  #toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  #newWorkout(event) {
    event.preventDefault();

    const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp) && inp > 0);
    // get Data from the form
    const type = inputType.value;
    const distanceValue = +inputDistance.value;
    const durationValue = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
    // valid data

    // if it is running, create a running object
    if (type === 'running') {
      const cadenceValue = +inputCadence.value;
      if (!validInputs(distanceValue, durationValue, cadenceValue)) return alert('all inputs have to have postive values');
      workout = new Running(distanceValue, durationValue, [lat, lng], cadenceValue);
      this.#workouts.push(workout);
    }
    // if it cycling, create a cycling 
    if (type === 'cycling') {
      const elevationValue = +inputElevation.value;
      if (!validInputs(distanceValue, durationValue, elevationValue)) return alert('all inputs have to be postive numbers');
      workout = new Cycling(distanceValue, durationValue, [lat, lng], elevationValue);
      this.#workouts.push(workout);
    }
    console.log(this.#workouts);
    console.log(workout);
    // add new object to workout array
    // clear inputs
    inputDuration.value = inputCadence.value = inputDistance.value = '';
    this.#renderWorkoutMarker(workout);
    this.#renderWorkout(workout);
    this.#setToLocalStorage();
  }

  #renderWorkoutMarker(workout) {
    L.marker(workout.coords, { riseOnHover: true, keyboard: true })
      .addTo(this.#map)
      .bindPopup(L.popup({
        maxWidth: 200,
        minWidth: 50,
        autoClose: false,
        closeOnClick: false,
        className: `${workout.type}-popup`
      }))
      .setPopupContent(`${workout.type === 'cycling' ? '🚴‍♀️' : '🏃‍♂️'} ${workout.description}`)
      .openPopup();
  }

  #renderWorkout(workout) {
    const typeWorkoutHTML = document.querySelector(`.workouts`);
    const html = `
  <li class="workout workout--${workout.type}" data-id="${workout.id}">
    <h2 class="workout__title">${workout.description}</h2>
    <div class="workout__details">
      <span class="workout__icon">${workout.type === 'cycling' ? '🚴‍♀️' : '🏃‍♂️'}</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">min</span>
    </div>
    ${workout.type === 'running' ?
        `
    <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
    
    ` : workout.type === 'cycling' ?
          `
  <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
        </li>
  ` : ''
      }
    `
    typeWorkoutHTML.insertAdjacentHTML('beforeend', html);
    this.#hideForm();
  }

  #moveToPopUp(e) {
    const workoutEl = e.target.closest('.workout');
    console.log(workoutEl);

    if (!workoutEl) return;

    const workout = this.#workouts.find(work => work.id === workoutEl.dataset.id);
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animation: true,
      pan: {
        duration: 1
      }
    })
  }

  #setToLocalStorage() {
    localStorage.setItem('workoutArray', JSON.stringify(this.#workouts));
  }

  #getLocalStorage() {
    const data = localStorage.getItem('workoutArray');
    if (!data) return;

    const parsedData = JSON.parse(data);
    this.#workouts = parsedData;
    return parsedData;
  }
}

const app = new App();

