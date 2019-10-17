const roomModel = require("../models/room");

module.exports = { getRooms, delRoom, createRoom }

function getRooms(req, res) {
    return roomModel.find()
        .then(rooms => res.json(rooms))
        .catch(err => res.json(err))
}
function delRoom(req, res) {
    return roomModel.findByIdAndDelete(req.params.id)
        .then(room => res.json(room))
        .catch(err => res.json(err));
}
function createRoom(req, res) {
    return roomModel.create(req.body)
        .then(room => res.json(room))
        .catch(err => res.json(err));
}