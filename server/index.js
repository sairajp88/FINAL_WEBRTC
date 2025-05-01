const { Server } = require("socket.io");
const dotenv = require("dotenv");
dotenv.config();

const io = new Server(process.env.PORT, {
  cors: {
    origin: [
      "https://final-webrtc-static.onrender.com",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
});

const emailToSocketIdMap = new Map();
const socketIdToEmailMap = new Map();

io.on("connection", (socket) => {
  console.log(`Socket Connected: ${socket.id}`);

  socket.on("room:join", (data) => {
    const { email, room } = data;
    emailToSocketIdMap.set(email, socket.id);
    socketIdToEmailMap.set(socket.id, email);

    socket.join(room);
    io.to(room).emit("user:joined", { email, id: socket.id });
    io.to(socket.id).emit("room:join", data);
  });

  socket.on("user:call", ({ toUser, offer }) => {
    io.to(toUser).emit("incoming:call", { from: socket.id, offer });
  });

  socket.on("call:accepted", ({ to, ans }) => {
    io.to(to).emit("call:accepted", { from: socket.id, ans });
  });

  socket.on("peer:candidate", ({ candidate, to }) => {
    io.to(to).emit("peer:candidate", { candidate });
  });

  socket.on("peer:negotiation", ({ to, offer }) => {
    io.to(to).emit("peer:negotiation", { from: socket.id, offer });
  });

  socket.on("peer:nego:done", ({ to, ans }) => {
    io.to(to).emit("peer:nego:final", { from: socket.id, ans });
  });

  socket.on("disconnect", () => {
    const email = socketIdToEmailMap.get(socket.id);
    emailToSocketIdMap.delete(email);
    socketIdToEmailMap.delete(socket.id);
    console.log(`Socket Disconnected: ${socket.id}`);
  });
});
