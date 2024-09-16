export const renderMoviesToDOM = (movieHTML) => {
    const movieList = document.getElementById('movie-list');

    if (movieList) {
        movieList.innerHTML = movieHTML;
    } else {
        console.error('Could not find the element with the id "movie-list"');
    }
};