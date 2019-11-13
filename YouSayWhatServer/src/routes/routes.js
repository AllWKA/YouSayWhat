const router = require("express").Router();

const roomsController = require("../controllers/roomsController");
const playersController = require("../controllers/playersController");
const blacksController = require("../controllers/blacksController");

const roomUri = '/rooms';
const playerUri = '/players';
const blackUri = '/blacks'


//ROOMS ROUTES
router.get(roomUri, roomsController.getRooms);
router.get(roomUri + '/:name', roomsController.getRoomByName);
router.get(roomUri+'/top/:id',roomsController.getTop)
router.post(roomUri, roomsController.createRoom);
router.put(roomUri+'/playerReady/:id', roomsController.playerReady)
router.delete(roomUri + '/:id', roomsController.delRoom);
//USERS ROUTES
router.get(playerUri, playersController.getPlayers);
router.get(playerUri + '/:id', playersController.getPlayer);
router.post(playerUri, playersController.createPlayer);
router.post(playerUri + "/join", playersController.joinRoom);
router.delete(playerUri + '/:id', playersController.delPlayer);
//BLACKS ROUTES
router.get(blackUri, blacksController.getBlacks);
router.get(blackUri + '/:id', blacksController.getBlack);
router.post(blackUri, blacksController.createBlack);
router.put(blackUri + '/:id', blacksController.updateBlack);
router.delete(blackUri + '/:id', blacksController.delBlack);

module.exports = router;