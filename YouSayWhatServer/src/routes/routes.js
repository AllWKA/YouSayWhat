const router = require("express").Router();

const roomController = require("../controllers/roomsController");
const userController = require("../controllers/usersController");

const roomUri = '/rooms'
//ROOMS ROUTES
router.get(roomUri, roomController.getRooms)

module.exports = router;