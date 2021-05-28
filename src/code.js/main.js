
import countryTmpl from '../templates/country.hbs';

// import debounce from 'lodash.debounce';
import countriesTmpl from '../templates/countries.hbs';

import ApiCountries from "./fetchCountries.js";

const debounce = require('lodash.debounce');


const refs = {
    input: document.querySelector('.input-control'),
    flagContainer: document.querySelector('.js-country-container'),
}

refs.input.addEventListener('input', debounce(onInputCountry, 500));

function onInputCountry(e) {
    let countryName = e.target.value;

    ApiCountries.fetchCountries(countryName)
    .then(country => {
        if(country.length < 2) {
            cleanInput();
            renderCountry(country);
            
        } else if(country.length > 1 && country.length <= 10) {
            cleanInput();
            renderCountries(country);
            
        }
    })
}

function renderCountry (country) { 
    const countryMarkUp = countryTmpl(country);
    refs.flagContainer.insertAdjacentHTML('beforeend', countryMarkUp);
}

function renderCountries (countries) {
    const countriesMarkUp = countriesTmpl(countries);
    refs.flagContainer.insertAdjacentHTML('beforeend', countriesMarkUp);
    
}

function cleanInput() {
    refs.flagContainer.innerHTML = '';
}




