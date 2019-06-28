const router = require('express').Router();
const Game = require("../../data/helpers/gamesDb");

router.route("/")
  .get(async (req, res) => {
    try {
      const games = await Game.get();
      return res.status(200).json(games);
    } catch (e) {
      console.error(e);
      return res.status(500).json({
        message:
          "We encountered an error getting the games from our database"
      });
    }
  })

  .post(async (req, res) => {
    const game = {
      ...req.body,
      releaseYear: parseInt(req.body.releaseYear)
    };

    if (!game.title || !game.genre) {
      return res.status(422).json({
        message: "New Games must have a unique title and a genre"
      });
    }

    try {
      const newGame = await Game.create(game);
      console.log(newGame)
      return res.status(201).json(newGame);
    } catch (e) {
      console.log(e);
      res.status(500).json({
        error: "We encountered an issue adding your Game to the database"
      });
    }
  });

  module.exports = router;
