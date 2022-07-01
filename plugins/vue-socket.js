import io from "socket.io-client";
var socket = io("http://localhost:4000");
window.socket = socket;
