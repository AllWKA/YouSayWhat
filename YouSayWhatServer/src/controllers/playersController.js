const playerModel = require("../models/player");
const roomModel = require("../models/room")

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
async function joinRoom(req, res) {
    const player = await playerModel.findById({ _id: req.body.player.data._id });
    const room = await roomModel.findById({ _id: req.body.room.data._id });
    room.players.push(player._id)
    return await room.save((result) => res.json(result));
}