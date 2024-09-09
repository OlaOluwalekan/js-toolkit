import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// mimic __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function renameFilesInDir(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      if (path.extname(file) === ".js") {
        const newFilePath = path.join(dir, path.basename(file, ".js") + ".cjs");
        fs.rename(filePath, newFilePath, (err) => {
          if (err) throw err;
        });
      }
    });
  });
}

renameFilesInDir(path.resolve(__dirname, "dist/cjs"));
