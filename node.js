const fs = require('fs');

// Assuming svgContent contains your final SVG
fs.writeFile('logo.svg', svgContent, err => {
  if (err) throw err;
  console.log('Generated logo.svg');
});
