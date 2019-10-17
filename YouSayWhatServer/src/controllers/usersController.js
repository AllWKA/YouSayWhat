const playerModel = require("../models/player");

module.exports = { getPlayers, delPlayer, createPlayer, joinRoom }

function getPlayers(req, res) {
    return playerModel.find()
        .then(players => res.json(players))
        .catch(err => res.json(err))
}
function delPlayer(req, res) {
    return playerModel.findByIdAndDelete(req.params.id)
        .then(player => res.json(player))
        .catch(err => res.json(err));
}
function createPlayer(req, res) {
    return playerModel.create(req.body)
        .then(player => res.json(player))
        .catch(err => res.json(err));
}
function joinRoom(req, res) {

}