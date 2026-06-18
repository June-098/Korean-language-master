/**
 * Creates valid PNG placeholder files for Expo using the 'canvas'-free approach.
 * Uses only Node.js built-ins — no extra packages needed.
 * Run with: node create-assets.js
 */
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function createPNG(width, height, r, g, b) {
  // PNG Signature
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8;  // bit depth
  ihdrData[9] = 2;  // color type RGB
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace
  const ihdr = makeChunk('IHDR', ihdrData);

  // IDAT chunk — raw pixel data
  const rowSize = width * 3;
  const raw = Buffer.alloc((rowSize + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (rowSize + 1)] = 0; // filter type None
    for (let x = 0; x < width; x++) {
      const i = y * (rowSize + 1) + 1 + x * 3;
      raw[i] = r;
      raw[i + 1] = g;
      raw[i + 2] = b;
    }
  }
  const compressed = zlib.deflateSync(raw);
  const idat = makeChunk('IDAT', compressed);

  // IEND chunk
  const iend = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, ihdr, idat, iend]);
}

function makeChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuffer = Buffer.from(type, 'ascii');
  const crc = crc32(Buffer.concat([typeBuffer, data]));
  const crcBuffer = Buffer.alloc(4);
  crcBuffer.writeUInt32BE(crc >>> 0, 0);
  return Buffer.concat([len, typeBuffer, data, crcBuffer]);
}

function crc32(buf) {
  const table = makeCrcTable();
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff);
}

function makeCrcTable() {
  const table = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c;
  }
  return table;
}

const assetsDir = path.join(__dirname, 'assets');
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir);

// Navy blue background: #1a1a2e = rgb(26, 26, 46)
const png1024 = createPNG(1024, 1024, 26, 26, 46);
const png48   = createPNG(48, 48, 26, 26, 46);

fs.writeFileSync(path.join(assetsDir, 'icon.png'), png1024);
fs.writeFileSync(path.join(assetsDir, 'splash.png'), png1024);
fs.writeFileSync(path.join(assetsDir, 'adaptive-icon.png'), png1024);
fs.writeFileSync(path.join(assetsDir, 'favicon.png'), png48);

console.log('✓ assets/icon.png');
console.log('✓ assets/splash.png');
console.log('✓ assets/adaptive-icon.png');
console.log('✓ assets/favicon.png');
console.log('\nDone! Now run: npx expo export --platform web');
