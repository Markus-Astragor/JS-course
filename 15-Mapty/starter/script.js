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
}

class Running extends Workout {
  type = 'running';
  constructor(distance, duration, coords, cadence) {
    super(distance, duration, coords);
    this.cadence = cadence;

    this.calcPace();
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
  #mapEvent;
  #workouts = [];
  constructor() {
    this.#getPosition();

    form.addEventListener('submit', this.#newWorkout.bind(this))

    inputType.addEventListener('change', this.#toggleElevationField)
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
    this.#map = L.map('map').setView(coords, 13);

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
  }

  #showForm() {
    form.classList.remove('hidden');
    inputDistance.focus();
    select.value = 'running';
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
    this.#renderWorkout(workout);
  }
  #renderWorkout(workout) {
    L.marker(workout.coords, { riseOnHover: true, keyboard: true })
      .addTo(this.#map)
      .bindPopup(L.popup({
        maxWidth: 200,
        minWidth: 50,
        autoClose: false,
        closeOnClick: false,
        className: `${workout.type}-popup`
      }))
      .setPopupContent('test')
      .openPopup();
  }
}

const app = new App();

