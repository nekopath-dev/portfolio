const fs = require('fs');
const path = require('path');
const srcDir = path.join(__dirname, 'src');

function fixIcons(dir) {
    const list = fs.readdirSync(dir);
    for (const file of list) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            fixIcons(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            let newContent = content.replace(/className=\"material-symbols-outlined\"/g, 'className=\"material-symbols-outlined notranslate\" translate=\"no\"');
            newContent = newContent.replace(/className=\"material-symbols-outlined ([^\"]+)\"/g, 'className=\"material-symbols-outlined notranslate \" translate=\"no\"');
             
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log('Fixed:', fullPath);
            }
        }
    }
}
fixIcons(srcDir);
