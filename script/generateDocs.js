const fs = require('fs');
const path = require('path');

// Source: your YAML spec folder
const specFolder = path.resolve(__dirname, '../../spec/samples');

// Destination: your Docusaurus docs folder
const docsFolder = path.resolve(__dirname, '../docs');

function walk(srcDir, destDir) {
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

  fs.readdirSync(srcDir).forEach(file => {
    const srcPath = path.join(srcDir, file);
    const isDir = fs.lstatSync(srcPath).isDirectory();

    if (isDir) {
      walk(srcPath, path.join(destDir, file));
    } else if (file.endsWith('.yaml') || file.endsWith('.yml')) {
      const fileContents = fs.readFileSync(srcPath, 'utf8');
      const title = file.replace(/\.ya?ml$/, '').replace(/[-_]/g, ' ');
      const mdFileName = file.replace(/\.ya?ml$/, '.md');
      const destPath = path.join(destDir, mdFileName);

      const frontMatter = `---\ntitle: ${title}\n---\n\n`;
      const body = '```yaml\n' + fileContents + '\n```\n';

      fs.writeFileSync(destPath, frontMatter + body);
      console.log(`✅ Generated: ${destPath}`);
    }
  });
}

walk(specFolder, docsFolder);

