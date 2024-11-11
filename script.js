const NumberOfFilms = prompt('Сколько фильмов вы уже просмотрели?', '')
const personalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const 
a = prompt('Один из последних просмотренных фильмов?', ''),
b = prompt('Оценка?', ''),
c = prompt('Один из последних просмотренных фильмов?', ''),
d = prompt('Оценка?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);