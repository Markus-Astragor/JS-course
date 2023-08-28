'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const errParagraph = document.querySelector('p');

///////////////////////////////////////


//  Our First AJAX Call: XMLHttpRequest



// old version ajax

// const getNeighbour = (data) => {
//   const neighbour = data.borders?.[0];

//   if (!neighbour) return;

//   const request2 = new XMLHttpRequest();
//   request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//   request2.send();

//   request2.addEventListener('load', function () {
//     const [data2] = JSON.parse(this.responseText);
//     console.log(data2);

//     renderCountry(data2, 'neighbour');
//   })
// }

// const apiCall = function (name) {
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v3.1/name/${name}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [dataParsed] = JSON.parse(this.responseText);
//     console.log('dataParsed', dataParsed);
//     renderCountry(dataParsed);

//     // get neighbour country (2)
//     getNeighbour(dataParsed);
//   })
// }

// apiCall('ukraine');

// better variant ajax call

// coding challenge 1
// const renderCountry = (dataParsed, className = '') => {
//   const [firstArg] = Object.values(dataParsed.currencies);
//   const html = `
//     <article class="country ${className}">
//     <img class="country__img" src="${dataParsed.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${dataParsed.name.official}</h3>
//       <h4 class="country__region">${dataParsed.region}</h4>
//       <p class="country__row"><span>👫</span>${Math.round(+dataParsed.population)}</p>
//       <p class="country__row"><span>🗣️</span>${Object.values(dataParsed.languages)}</p>
//       <p class="country__row"><span>💰</span>${firstArg.name + ' ' + firstArg.symbol}</p>
//     </div>
//   </article>
//     `

//   countriesContainer.insertAdjacentHTML('beforeend', html);
// }

// const renderError = (msg) => {
//   countriesContainer.insertAdjacentText('beforeend', msg);
// }



// const apiCall = (countryName) => {
//   fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     .then(response => {
//       if (!response.ok) throw new Error('Bad internet connection try again')

//       return response.json();
//     })
//     .then(data => {
//       const [country] = data;
//       renderCountry(country)
//       if (!country.borders[0]) throw new Error('No neighbours were found')
//       fetch(`https://restcountries.com/v3.1/alpha/${country.borders[0]}`)
//         .then(response2 => {
//           return response2.json();
//         })
//         .then(data2 => {
//           const [country2] = data2;
//           renderCountry(country2, 'neighbour')
//         })
//     })
//     .catch(err => {
//       console.log('err', err);
//       renderError(err.message)
//     })
//     .finally(() => countriesContainer.style.opacity = 1)
// }


// const whereAmI = (lat, long) => {
//   // doing reverse geocoding
//   fetch(`https://geocode.xyz/${lat},${long}?geoit=json&auth=185819744345461136256x60106`)
//     .then(responseWhere => {
//       if (responseWhere.status === 403) throw new Error('Too many requests')
//       console.log('responseWhere', responseWhere);
//       return responseWhere.json()
//     })
//     .then(data => {
//       console.log('data', data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       apiCall(data.country.replace(data.country[0], data.country[0].toLowerCase()))
//     })
//     .catch(err => console.log(err))


// }

// whereAmI('52.508', '13.381');
// whereAmI('19.037', '72.873');
// whereAmI('-33.933', '18.474');

// const getCoords = (position) => {
//   const { latitude, longitude } = position.coords;
//   console.log('latitude', latitude, 'longitude', longitude);
//   whereAmI(latitude, longitude);
// }


// const getPosition = function () {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(getCoords.bind(this), err => console.log(err))
//   }
// }


// btn.addEventListener('click', getPosition.bind(this));

// The Event Loop in Practice

console.log('Test start'); // global scop
setTimeout(() => console.log('0 seconds left'), 0); //
Promise.resolve('promise resolved 1').then(res => console.log('res', res)); // additiional callback it will be faster than timer
Promise.resolve('resolved promise 2').then((res) => {
  // for (let i = 0; i < 1000000; i++) {

  // }

  console.log(res);
}) // it puts this before timer because of microtask queue
console.log('Test end'); // global scope


const lotteryPromise = new Promise((resolve, reject) => {

  console.log('Lottery is runniing');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('Congrats you won your money')
    } else {
      reject('You lost your money ((')
    }
  }, 2000)

})

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// promisifying

const wait = (secc) => {
  return new Promise((resolved, reject) => {
    setTimeout(resolved, secc * 1000)
  })
}

wait(2)
  .then(() => {
    console.log('I waited for two seconds');
    return wait(1)
  })
  .then(() => {
    console.log('I waited for 1 second');
  })