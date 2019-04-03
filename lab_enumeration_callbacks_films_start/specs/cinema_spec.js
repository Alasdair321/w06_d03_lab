const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function() {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function() {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function() {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', () => {
    const actual = cinema.listOfFilmTitles(films);
    assert.deepStrictEqual(actual, ['Moonlight', 'Blade Runner 2049', 'Dunkirk', 'Black Panther', 'T2 Trainspotting'])
  });

  it('should be able to find a film by title', () => {
    const actual = cinema.findFilmByTitle(`Moonlight`);
    assert.deepStrictEqual(actual, [moonlight])
  });

  it('should be able to filter films by genre', () => {
    const actual = cinema.findFilmByGenre(`drama`);
    assert.deepStrictEqual(actual, [moonlight, trainspotting])
  });

  it('should be able to check whether there are some films from a particular year', () => {
    const actual = cinema.findFilmByYear(2017);
    assert.deepStrictEqual(actual, [bladeRunner, dunkirk, trainspotting]);
  });
  it('should be able to check whether there are no films from a particular year', () => {
    const actual = cinema.findFilmByYear(3000);
    assert.deepStrictEqual(actual, []);
  });
  it('should be able to check whether all films are over a particular length', () => {
    const actual = cinema.allFilmsOverLength(77);
    assert.deepStrictEqual(actual, true);
  });
  it('should be able to check whether all films are over a particular length 2', () => {
    const actual = cinema.allFilmsOverLength(150);
    assert.deepStrictEqual(actual, false);
  });
  it('should be able to calculate total running time of all films', () => {
    const actual = cinema.totalRunningTime();
    assert.strictEqual(actual, 622)
  });
  it('Cinema should be able to filter films by year', () => {
    const actual = cinema.filmsByProperty(`genre`, `drama`);
    assert.deepStrictEqual(actual, [moonlight, trainspotting]);
  });
});
