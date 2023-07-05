// writable stream

const fs = require("fs");

const writableStream = fs.createWriteStream("writablestream/output.txt");

writableStream.write("Ini merupakan teks baris pertama!\n");
writableStream.write("Ini merupakan teks baris kedua!\n");
writableStream.end("Akhir dari writable stream!");
