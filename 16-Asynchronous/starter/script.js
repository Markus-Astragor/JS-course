'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////


//  Our First AJAX Call: XMLHttpRequest

const renderCountry = (dataParsed, className = '') => {
  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${dataParsed.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${dataParsed.name.official}</h3>
      <h4 class="country__region">${dataParsed.region}</h4>
      <p class="country__row"><span>👫</span>${dataParsed.population}</p>
      <p class="country__row"><span>🗣️</span>${dataParsed.language}</p>
      <p class="country__row"><span>💰</span>${dataParsed.currencies.name}</p>
    </div>
  </article>
    `

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

const getNeighbour = (data) => {
  const neighbour = data.borders?.[0];

  if (!neighbour) return;

  const request2 = new XMLHttpRequest();
  request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
  request2.send();

  request2.addEventListener('load', function () {
    const [data2] = JSON.parse(this.responseText);
    console.log(data2);

    renderCountry(data2, 'neighbour');
  })
}

const apiCall = function (name) {
  const request = new XMLHttpRequest();

  request.open('GET', `https://restcountries.com/v3.1/name/${name}`);
  request.send();

  request.addEventListener('load', function () {
    const [dataParsed] = JSON.parse(this.responseText);
    console.log('dataParsed', dataParsed);
    renderCountry(dataParsed);

    // get neighbour country (2)
    getNeighbour(dataParsed);
  })
}

apiCall('ukraine');

