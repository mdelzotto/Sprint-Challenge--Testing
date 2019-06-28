exports.seed = async function(knex) {
  const fakeGames = [
    { title: 'Bioshock Infinite', genre: 'Shooter', releaseYear: 2007 },
    { title: 'Cuphead', genre: 'Platformer', releaseYear: 2017 },
    { title: 'Human Resource Machine', genre: 'Puzzle', releaseYear: 2015 },
  ]

  return await knex("games").insert(fakeGames);
};
