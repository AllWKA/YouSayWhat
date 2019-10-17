const router = require("express").Router();

const roomController = require("../controllers/roomsController");
const userController = require("../controllers/usersController");

const roomUri = '/rooms'
//ROOMS ROUTES
router.get(roomUri, roomController.getRooms);
router.post(roomUri, roomController.createRoom);
router.delete(roomUri + '/:id', roomController.delRoom);

module.exports = router;