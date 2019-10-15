function onConection(socket) {
    console.log("new connection");
    socket.on('createRoom', (data) => {
        // io.emit('otherMessage', { hello: data });
        console.log("creating room")
    })
}
module.exports = { onConection }