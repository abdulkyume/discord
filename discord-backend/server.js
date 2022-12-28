const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const socketServer = require("./socketServer");
require("dotenv").config();

const authroute = require("./routes/auth.route");
const friendInvitaionroute = require("./routes/friendInvitaionroute");

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();

app.use(express.json());
app.use(cors());

//register the route
app.use("/api/auth", authroute);
app.use("/api/friend_invitation", friendInvitaionroute);

const server = http.createServer(app);
socketServer.registerSocketServer(server);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`listening to port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database Connection Error");
    console.error(err);
  });
