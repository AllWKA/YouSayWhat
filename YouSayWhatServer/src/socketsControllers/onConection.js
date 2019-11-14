const roomController = require('../controllers/roomsController')
function onConection(socket) {
    console.log("new connection");
    socket.on('createRoom', (data) => {
        console.log("creating room")
    });
    socket.on('player-ready', async (content) => {
        console.log("player ready");
        const room = await roomController.playerReady(content);
        console.log(room)
        
    })
}
module.exports = { onConection }