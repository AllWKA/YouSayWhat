const roomModel = require("../models/room");
const io = require("../../index.js");

module.exports = { getRooms, getRoomByName, getTop, delRoom, createRoom,playerReady }

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
function getTop(req, res) {
    return roomModel.findById(req.params.id)
        .populate({
            path: 'players'
        })
        .then(result => {
            if (result) {
                const top = result.players.sort((a, b) => {
                    return b.pts - a.pts
                });
                if (top.length >= 3) {
                    res.json(top.slice(0, 3))
                } else {
                    res.json(top)
                }
            } else {
                return res.status(400).send("not found")
            }
        })
        .catch(err => res.status(400).json(err));
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
async function playerReady(req) {
    const room = await roomModel.findById(req.roomID);
    if (room) {
        room.ready++;
        if (room.ready >= room.players.length) {
            room.started = true;
            room.newBlack = true;
        }
        return await room.save();
    } else {
        return "error, not found";
    }
}