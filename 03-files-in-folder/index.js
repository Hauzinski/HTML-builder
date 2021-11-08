const path = require('path');
const { readdir } = require('fs').promises;
const { stat } = require('fs');

const folederPath = path.join(__dirname, 'secret-folder');

async function getFiles() {
  try {
    const files = await readdir(folederPath, { withFileTypes: true });
    for (const file of files) {
      if (file.isFile()) {
        const filePath = path.join(__dirname, `secret-folder/${file.name}`);
        const fileObj = path.parse(filePath);
        
        stat(filePath, (err, stats) => {
          console.log(`${fileObj.name} - ${fileObj.ext.slice(1)} - ${Math.ceil(stats.size / 1024)} kb`);
          
        });
      }
    }
  } catch (err) {
    console.error(err);
  }
}

getFiles();
