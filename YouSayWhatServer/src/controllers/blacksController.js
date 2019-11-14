const blackModel = require("../models/black");

module.exports = { getBlacks, getBlack, delBlack, createBlack, updateBlack };

function getBlacks(req, res) {
  return blackModel
    .find()
    .then(Blacks => res.json(Blacks))
    .catch(err => res.json(err));
}
function getBlack(req, res) {
  console.log(req.params.id)
  return blackModel
    .findById(req.params.id)
    .then(black => {
      console.log("black:",black)
      res.json(black)
    })
    .catch(err => res.json(err));
}
function updateBlack(req, res) {
  return blackModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then(black => res.json(black))
    .catch(err => res.status(400).json(err));
}
function delBlack(req, res) {
  return blackModel
    .findByIdAndDelete(req.params.id)
    .then(black => res.json(black))
    .catch(err => res.json(err));
}
function createBlack(req, res) {
  return blackModel
    .create(req.body)
    .then(black => res.json(black))
    .catch(err => res.json(err));
}
