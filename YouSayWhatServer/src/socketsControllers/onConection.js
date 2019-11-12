const roomController = require('../controllers/roomsController')
function onConection(socket) {
    console.log("new connection");
    socket.on('createRoom', (data) => {
        // io.emit('otherMessage', { hello: data });
        console.log("creating room")
    });
    socket.on('player-ready', async (content) => {
        console.log("player ready");
        const room = await roomController.playerReady(content);
        
    })
}
module.exports = { onConection }