'use strict';

import { api_key, imageBaseURL, fetchDataFromServer } from "./api.js";
import { sidebar } from "./sidebar.js";
import { createMovieCard } from "./movie-card.js";


const movieId = window.localStorage.getItem("movieId");

const pageContent = document.querySelector("[page-content]");

sidebar();

fetchDataFromServer(`https://api.themoviedb.org/3/movie/${movieId}?api_key=
${api_key}&append_to_response=casts,videos,images,
releases`, function(movie) {

    const {
        backdrop_path,
        poster_path,
        title,
        release_date,
        runtime,
        vote_average,
        releases: { countries: [{ certification }] },
        genres,
        overview,
        casts: { cast, crew },
        videos: { results: videos }
    } = movie ;

    document.title = `${title} - JDFlix`;

});