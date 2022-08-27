import http from "http";
import { Server } from "socket.io";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

// http server
const httpServer = http.createServer(app);

// SocketIO server
const wsServer = new Server(httpServer);

const handleListen = () => console.log(`Listening to http://localhost:3000`);
httpServer.listen(3000, handleListen);
