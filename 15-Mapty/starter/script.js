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

let map, mapEvent;
// Using the Geolocation API
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log('position', position);
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      const coords = [latitude, longitude]
      map = L.map('map').setView(coords, 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([latitude, longitude])
        .addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();

      map.on('click', (mapE) => {
        mapEvent = mapE
        form.classList.remove('hidden');
        inputDistance.focus();
        select.value = 'running';
      })
    },
    (error) => {
      alert("Couldn't get your geolocation");
      console.log('error', error);
    }
  );
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('mapEvent', mapEvent);

  // clear inputs
  inputDuration.value = inputCadence.value = inputDistance.value = '';

  const { lat, lng } = mapEvent.latlng;

  L.marker([lat, lng], { riseOnHover: true, keyboard: true })
    .addTo(map)
    .bindPopup(L.popup({
      maxWidth: 200,
      minWidth: 50,
      autoClose: false,
      closeOnClick: false,
      className: 'running-popup'
    }))
    .setPopupContent('Success')
    .openPopup();
})

inputType.addEventListener('change', () => {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
})