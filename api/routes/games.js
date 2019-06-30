const router = require('express').Router();
const game = require("../../data/helpers/gamesDb");

// router.route("/")
  router.get("/", async (req, res) => {
    try {
      const games = await game.get();
      res.status(200).json(games);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message:
          "We encountered an error getting the games from our database"
      });
    }
  })

  router.post("/", async (req, res) => {
    // const game = {
    //   ...req.body,
    //   releaseYear: parseInt(req.body.releaseYear)
    // };

    if (!req.body.title || !req.body.genre) {
      res.status(422).json({
        message: "New Games must have a unique title and a genre"
      });
    }

    try {
      const newGame = await game.create({
        ...req.body,
        releaseYear: parseInt(req.body.releaseYear)
      });
      console.log(newGame)
      res.status(201).json(newGame);
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err.message);
    }
  });

  module.exports = router;
