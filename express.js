const fs = require('fs');

const file = fs.readFileSync('./hoge.js', 'utf8');
const string = bufferToString(file);

function stringToBuffer(str) {
  return new Uint16Array(str.split('').map(c => c.charCodeAt(0))).buffer;
}

function bufferToString(buffer) {
  // const u = new Uint16Array(buffer);
  //    const p = String.fromCharCode(u);
  return String.fromCharCode.apply('', new Uint16Array(buffer));
}

const piyo = Buffer.from(file);
console.log(piyo);
// const test = 'abcd';
// const b = stringToBuffer(test);
// // console.log(b);
// const s = bufferToString(b);
// console.log(s);
//
console.log(file);
console.log(string);

const arrayBuffer = new ArrayBuffer(16);
const buf = Buffer.from(arrayBuffer);
console.log(buf);
console.log(buf.buffer);
