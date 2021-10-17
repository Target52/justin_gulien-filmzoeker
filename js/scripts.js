let getHref = (array, poster) => (movieimdbID = movies.find(item => item.Poster == poster)).imdbID;
//movies.find(item => item.Poster == poster);
//let movieimdbID = movies.filter(item => item.Poster == poster);
//let movieimdbID = movies.find(item => item.Poster == poster);
//return movieimdbID.imdbID;
//console.log(movieimdbID.imdbID);
//let movieimdbID = array.map(item => item.imdbID);
/* let nHref = movieimdbID.forEach(item => {
    let imdbHref = 'https://www.imdb.com/' + item.imdbID;
    console.log(imdbHref);
    let newA = document.createElement("a")
    newA.setAttribute('href', imdbHref);
    //return imdbHref;
}) */
//}


//const fWeightMC2 = superheroes.filter((item) => item.publisher == "Marvel Comics" && item.weight != "unknown").reduce((cTotal, item) => Number(item.weight) + cTotal, 0)
//console.log(fWeightMC2)

function addMoviesToDom(array) {
    let parent = document.getElementById("movies");
    parent.innerHTML = '';
    let movieName = array.map(item => item.Poster);
    //console.log(movieName);
    movieName.forEach(item => {
        let newLi = document.createElement("li")
        let newA = document.createElement("a")
        let img = document.createElement('img');
        img.src = item;
        //newLi.appendChild(document.createTextNode(item))
        newLi.append(newA)
        getHref(array, item);
        let nHref = getHref(array, item);
        console.log(nHref);
        newA.setAttribute('href', 'https://www.imdb.com/title/' + nHref);
        newA.appendChild(img)
        newLi.classList.add("nameMovie")
        parent.appendChild(newA);
    })
}

addMoviesToDom(movies);

let filterMovies = wordInMovieTitle => {
    let filteredMovies = movies.filter(item => item.Title.includes(wordInMovieTitle));
    addMoviesToDom(filteredMovies);
}

let filterMoviesDate = () => {
    let filteredMovies = movies.filter(item => item.Year > 2013);
    addMoviesToDom(filteredMovies);
}

let handleOnChangeEvent = event => {
    switch (event.target.value) {
        case "pFilm":
            filterMovies("Princess");
            break;
        case "bFilm":
            filterMovies("Batman");
            break;
        case "xFilm":
            filterMovies("X-Men");
            break;
        case "aFilm":
            filterMovies("Avenger");
            break;
        case "lFilm":
            filterMoviesDate();
            break;
    }
}

let addEventListeners = () => {
    let radios = document.querySelectorAll('input[name="film-filter"]');
    radios.forEach(item => {
        item.addEventListener('change', handleOnChangeEvent);
    })
}

addEventListeners();


