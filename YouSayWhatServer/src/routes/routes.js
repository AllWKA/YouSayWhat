const router = require("express").Router();

const roomsController = require("../controllers/roomsController");
const playersController = require("../controllers/playersController");

const roomUri = '/rooms'
const playerUri = '/players'


//ROOMS ROUTES
router.get(roomUri, roomsController.getRooms);
router.get(roomUri + '/:name', roomsController.getRoomByName);
router.post(roomUri, roomsController.createRoom);
router.delete(roomUri + '/:id', roomsController.delRoom);
//USERS ROUTES
router.get(playerUri, playersController.getPlayers);
router.get(playerUri + '/:id', playersController.getPlayer);
router.post(playerUri, playersController.createPlayer);
router.post(playerUri + "/join", playersController.joinRoom);
router.delete(playerUri + '/:id', playersController.delPlayer);

module.exports = router;