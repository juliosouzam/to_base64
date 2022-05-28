import fs from 'fs';
import path from 'path';

(async () => {
  const filePath = fs.readFileSync(
    path.resolve(__dirname, '..', 'profile.jpg'),
    'base64',
  );

  console.log(filePath);

  const stream = fs.createWriteStream('profile.txt');

  stream.write(filePath);

  stream.end();
})();
