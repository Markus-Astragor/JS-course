'use strict';


// Default parameters
// We can put different expressions into functions as arguments

const bookings = [];

const calcFlight = (flightNum, numPassengers = 10, price = numPassengers >= 20 ? 200 * numPassengers : 400 * numPassengers) => {
  const booking = {
    flightNum,
    numPassengers,
    price
  }

  console.log('booking', booking);
}


calcFlight('Fa2025', 20)