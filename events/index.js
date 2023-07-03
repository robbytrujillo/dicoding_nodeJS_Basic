const { EventEmitter } = require("events");

// TODO 1
const birthdayEventListener = (name) => {
  console.log(`Happy Birthday ${name}!`);
};

// TODO 2
const myEmitter = new EventEmitter();

// TODO 3
myEmitter.on("birthday", birthdayEventListener);

// TODO 4
myEmitter.emit("birthday", "Robby");

// Bila Anda selesai mengerjakan TODO yang ada, eksekusi berkas index.js dengan perintah:
// node ./events/index.js