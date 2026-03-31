const fs = require('fs');
const path = require('path');

const updateStart = (name, startCommand) => {
  const p = path.join(__dirname, name, 'package.json');
  if (fs.existsSync(p)) {
    const data = JSON.parse(fs.readFileSync(p, 'utf8'));
    data.scripts = data.scripts || {};
    data.scripts.start = startCommand;
    fs.writeFileSync(p, JSON.stringify(data, null, 2));
    console.log(`Updated ${name} package.json`);
  } else {
    console.warn(`WARNING: ${name} not found at ${p}`);
  }
}

updateStart('react-ts', 'vite --host 0.0.0.0 --port 3000');
updateStart('vue', 'vite --host 0.0.0.0 --port 3000');
// Next.js dev server on 3000, listening everywhere
updateStart('nextjs-new', 'next dev -H 0.0.0.0 -p 3000');
updateStart('express-simple', 'node index.js');
updateStart('hono-nodejs-starter', 'tsx src/index.ts');
// Angular ng serve binding
updateStart('angular', 'ng serve --host 0.0.0.0 --port 3000');
