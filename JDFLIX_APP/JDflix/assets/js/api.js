'use strict';

const api_key = '4153ff4e3f2ea8b7ffb63718be3f813b';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

// Fetch data  from a server using the 'url and passes the result in Json data to a 'callback' function,
// along with an optional parameter if has 'optionalParam'.


const fetchDataFromServer = function(url, callback, optionalParam) {
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParam));
}

export { imageBaseURL, api_key, fetchDataFromServer };