
 import { onError } from './main';

  function fetchCountries(countryName) {
    
      return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then(response => {
        return response.json();
    },
  ).catch(onError);
}

export default { fetchCountries };

// fetch(`https://restcountries.eu/rest/v2/name/${name}`)
// .then(res => res.json())
// .then(data => initialize(data))


