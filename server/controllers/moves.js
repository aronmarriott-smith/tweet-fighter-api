var Moves = require('../models/').moves;

module.exports = {
  index(req, res) {
    Moves.findAll({
      include: move_types
    })
      .then(function (moves) {
        res.status(200).json(moves);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  show(req, res) {
    Moves.findById(req.params.id)
    .then(function (moves) {
      res.status(200).json(moves);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  },

  show(req, res) {
    // TODO write show() method
  },

  store(req, res) {
    // TODO write store() method
  }
};