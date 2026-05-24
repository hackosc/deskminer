const fs = require('fs');
let app = fs.readFileSync('d:/work/xcweb/app.js', 'utf8');

// Reorder: move nexuss1 and l1 to front
const products = [
  { id: 'nexuss1', hidden: true },
  { id: 'nexusl1', hidden: true }
];