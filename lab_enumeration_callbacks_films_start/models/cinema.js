const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfFilmTitles = function (films) {
  const filmTitleArray =films.map((film) => {
    return film.title;
  })
  return filmTitleArray;
};

Cinema.prototype.findFilmByTitle = function (title) {
  const result = this.films.filter((film) => {
    return film.title === title;
  });
  return result;
};

Cinema.prototype.findFilmByGenre = function (genre) {
  const result = this.films.filter((film) => {
    return film.genre === genre;
  });
  return result;
};

Cinema.prototype.findFilmByYear = function (year) {
  const result = this.films.filter((film) => {
    return film.year === year;
  });
  return result;
};

// Cinema.prototype.allFilmsOverLength = (duration) => {
//   const result = this.films.every( (duration) => {
//     return x.length > duration;
//   });
//   return result;
// };

// Cinema.prototype.allFilmsOverLength = (duration) => {
//   return duration >= 60
// };

Cinema.prototype.allFilmsOverLength = function (length) {
  const resultArray = this.films.filter((film) => {
    return film.length >= length;
  });
  if (resultArray.length === this.films.length) {
    return true;
  } else {
    return false;
  }
};

Cinema.prototype.totalRunningTime = function () {
  let total = this.films.reduce((sum, film) => {
    return sum + film.length;
  },0)
  return total;
};



module.exports = Cinema;
