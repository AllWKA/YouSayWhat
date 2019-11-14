const express = require("express");
const dotenv = require('dotenv').config();//not in production
const path = require('path')
const cors = require("cors");
const mongoose = require("mongoose");
const SocketIO = require("socket.io");

const v1Routes = require(path.join(__dirname, 'src', 'routes', 'routes.js'));
const config = require(path.join(__dirname, 'config.js'));
const socketsControllerConection = require(
    path.join(
        __dirname,
        'src',
        'socketsControllers',
        'onConection.js')
);

const roomController = require('./src/controllers/roomsController')

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", v1Routes);

const server = app.listen(config.port, () => {
    console.log(`server on: ${config.url}${config.port}`);
})

//socket io initializated
const io = SocketIO(server);
io.on('connection', (socket) => {
    socket.on('player-ready', async (content) => {
        const room = await roomController.playerReady(content);
        console.log(room)
        io.emit(content.roomID + '/playerReady');
        if (room.started) {
            io.emit(content.roomID + '/black', { content: 'try from back', author: 'allwka' });
            if (room.newBlack) {
                //TODO: arregla esta mierda pls
                io.emit(content.roomID + '/newRoom');
                room.newBlack = false;
                room.ready = 0;
                console.log(room)
                console.log(await room.update());
            }
        }
    });
    socket.on('white', (white) => {
        io.emit(white.room + '/playerWhite', white)
    });
    // socket.on("ready", white => {
    //   io.emit(white.room + "/playerReady", white);
    // });
});
console.log("Conecting to mongo... ");
mongoose.connect(
    config.db,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
)
    .then(() => {
        console.log("Conected to mongo!! ");
    })
    .catch((err) => {
        console.log(`ERROR other type: ${err}`);
    });