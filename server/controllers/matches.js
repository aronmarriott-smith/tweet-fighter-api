Matches = require('../models/').Matches;

module.exports = {
  index(req, res) {
    Matches.findAll()
      .then(function (matches) {
        res.status(200).json(matches);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  show(req, res) {
    Matches.findById(req.params.id)
    .then(function (matches) {
      res.status(200).json(matches);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }
};