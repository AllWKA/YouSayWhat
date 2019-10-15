const express = require("express");
const dotenv = require('dotenv').config();//not in production
const cors = require("cors");
const app = express();
const v1Routes = require("./src/routes/routes");
const mongoose = require("mongoose");
const config = require('./config');
const SocketIO = require("socket.io");
const socketsControllerConection = require("./src/socketsControllers/onConection")


app.use(cors());
app.use(express.json());
app.use("/api/v1", v1Routes);

const server = app.listen(config.port, () => {
    console.log(`server on: ${config.url}${config.port}`);
})

//socket io initializated
const io = SocketIO(server);
io.on('connection', socketsControllerConection.onConection)
console.log("Conecting to mongo... ");
mongoose
    .connect(
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