const roomModel = require("../models/room");

module.exports = { getRooms, getRoomByName, delRoom, createRoom }

function getRooms(req, res) {
    return roomModel.find()
        .then(rooms => res.json(rooms))
        .catch(err => res.status(400).json(err))
}
function getRoomByName(req, res) {
    return roomModel.find({ name: req.params.name })
        .then(room => res.json(room))
        .catch(err => res.status(400).json(err))
}
function delRoom(req, res) {
    return roomModel.findByIdAndDelete(req.params.id)
        .then(room => res.json(room))
        .catch(err => res.status(400).json(err));
}
function createRoom(req, res) {
    return roomModel.create(req.body)
        .then(room => res.json(room))
        .catch(err => res.status(400).json(err));
}