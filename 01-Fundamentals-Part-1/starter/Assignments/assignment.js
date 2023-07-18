//LECTURE: Values and Variables


const country = 'Ukraine';
const continent = 'Eurasia';

 
let population = 30;

console.log('country', country, 'continent', continent, 'population', population);

//LECTURE: Data Types

const isIsLand = true;
const language = 'ukrainian'; //exprected to be undefined because i declared it but didn`r assign a value

console.log(typeof(country), typeof(continent), typeof(population), typeof(isIsLand), typeof(language));//string, string, number, boolean, undefined

//LECTURE: let, const and var

//changing data types const, let and so on


// LECTURE: Basic Operators
let splittedHallfCountry = true;
let populatinFinland = 6;
let averagePopulation = 33;
let description = `${country} is in Europe and its ${population} speak ${language}`

splittedHallfCountry ? console.log('In this country would live 15 million people on each half') : console.log('This country is not dividable');

population++;
console.log('population updated', population);

population > populatinFinland ? console.log('Yes of course') : console.log('Nope it isn`t');
averagePopulation < population ? console.log('Yes it is less') : console.log('No average population is higher');

console.log('description', description);