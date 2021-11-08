const { mkdir, copyFile, readdir} = require('fs').promises;
const path = require('path');

async function getFiles() {
  try {
    const dirPath = path.join(__dirname, 'files');
    const newDirPath = path.join(__dirname, 'files-copy');    
    const files = await readdir(dirPath, { withFileTypes: true });    
    for (const file of files) {
      if (file.isFile()) {
        const filePath = path.join(dirPath, file.name);        
        const newFilePath = path.join(newDirPath, file.name);        
        await copyFile(filePath, newFilePath);
      }
    }
    console.log('Files copied to new directory');
  } catch (err) {
    console.error(err);
  }
}

async function makeDir() {
  try {
    await mkdir(path.join(__dirname, 'files-copy'), { recursive: true });
  } catch (err) {
    console.error(err);
  }
  console.log('New directory "files-copy" created');
}

async function copyDir() {
  await makeDir();
  await getFiles();
}
copyDir();
