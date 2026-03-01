const fs = require('fs');
let text = fs.readFileSync('src/App.jsx', 'utf8');
text = text.replace(/className="material-symbols-outlined ([^"]+)"/g, 'className="material-symbols-outlined notranslate " translate="no"');
text = text.replace(/className="material-symbols-outlined"/g, 'className="material-symbols-outlined notranslate" translate="no"');
fs.writeFileSync('src/App.jsx', text, 'utf8');
