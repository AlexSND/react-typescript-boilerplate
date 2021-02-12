import fs from 'fs';
import path from 'path';

// parse arguments
const [, , ...args] = process.argv;

if (args.length) {
  const componentPath = capitalizePath(args[0]);
  const dirPath = path.join(__dirname, '../src/components', componentPath);
  const componentName = getComponentName(componentPath);
  createComponent(dirPath, componentName);
} else {
  console.log('Сomponent name required');
  process.exit(0);
};

// Capitalize word
function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Capitalize path folders
function capitalizePath(path: string) {
  const matches = path.match(/\//g);
  if (matches) {
    return path.split('/').map(word => {
      if (word.split('-').length > 1) {
        return word.split('-').map(w => capitalize(w)).join('');
      } else {
        return capitalize(word);
      }
    }).join('/');
  } else {
    return capitalize(path);
  }
};

function getComponentName(path: string) {
  const matches = path.match(/\//g);
  return matches ? path.split('/')[matches.length] : path;
};

function createDir(dir: string): void {
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
      console.log('Directory created.');
    } else {
      console.log('Directory already exists.');
      process.exit(0);
    }
  } catch (error) {
    console.log(error);
  }
};

function createFiles(dir: string, name: string) {
  // create scss file
  fs.writeFile(path.join(dir, `${name}.scss`), '', error => {
    if (error) {
      console.log(error);
    } else {
      console.log('Scss file created.');
    }
  });

  // create component file
  const componentFileContent =
    `import React from 'react';\n`
    + `import './${name}.scss';\n`
    + `\n`
    + `const ${name}: React.FC = () => (\n`
    + `  <h1>\n`
    + `    ${name} component work!\n`
    + `  </h1>\n`
    + `);\n\n`
    + `export default ${name};\n`

  fs.writeFile(path.join(dir, `${name}.tsx`), componentFileContent, error => {
    if (error) {
      console.log(error);
    } else {
      console.log('Component file created.');
    }
  });

  // create index file
  const indexFileContent = `export { default } from './${name}';\n`;
  fs.writeFile(path.join(dir, 'index.tsx'), indexFileContent, error => {
    if (error) {
      console.log(error);
    } else {
      console.log('index file created.');
    }
  });
};

async function createComponent(path: string, name: string) {
  createDir(path);
  createFiles(path, name);
};