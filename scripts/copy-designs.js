const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const designRoot = path.join(root, 'design', 'claude-design');
const publicRoot = path.join(root, 'public');

const MULTI_PAGE_VERSIONS = ['v1', 'v2', 'v3'];
const SPA_VERSIONS = ['v4', 'v5'];
const SPA_FILES = ['index.html'];

function removeDirectory(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

function injectBaseHref(html, version) {
  const baseTag = `<base href="/${version}/">`;

  if (/<base\s/i.test(html)) {
    return html.replace(/<base\s[^>]*>/i, baseTag);
  }

  return html.replace(/<head>/i, `<head>\n  ${baseTag}`);
}

function rewriteInternalLinks(html, version) {
  const base = `/${version}`;

  return html
    .replace(/href="index\.html/g, `href="${base}`)
    .replace(/href="services\.html/g, `href="${base}/services`)
    .replace(/href="about\.html/g, `href="${base}/about`)
    .replace(/href="contact\.html/g, `href="${base}/contact`)
    .replace(/href="shared\.css"/g, `href="${base}/shared.css"`)
    .replace(/src="shared\.js"/g, `src="${base}/shared.js"`);
}

function processMultiPageHtml(html, version) {
  let output = injectBaseHref(html, version);
  output = rewriteInternalLinks(output, version);
  return output;
}

function copyMultiPageVersion(version) {
  const srcDir = path.join(designRoot, version);
  const destDir = path.join(publicRoot, version);

  removeDirectory(destDir);
  fs.mkdirSync(destDir, { recursive: true });

  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    if (entry.isDirectory()) continue;

    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.name.endsWith('.html')) {
      const html = fs.readFileSync(srcPath, 'utf8');
      fs.writeFileSync(destPath, processMultiPageHtml(html, version), 'utf8');
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }

  console.log(`Copied ${version} (multi-page)`);
}

function copySpaVersion(version) {
  const srcDir = path.join(designRoot, version);
  const destDir = path.join(publicRoot, version);

  removeDirectory(destDir);
  fs.mkdirSync(destDir, { recursive: true });

  for (const file of SPA_FILES) {
    const srcFile = path.join(srcDir, file);
    if (!fs.existsSync(srcFile)) {
      throw new Error(`Missing SPA entry file: ${srcFile}`);
    }

    let html = fs.readFileSync(srcFile, 'utf8');
    const baseTag = `<base href="/${version}/">`;
    if (!/<base\s/i.test(html)) {
      html = html.replace(/<head>/i, `<head>\n  ${baseTag}`);
    }
    fs.writeFileSync(path.join(destDir, file), html, 'utf8');
  }

  console.log(`Copied ${version} (SPA)`);
}

if (!fs.existsSync(designRoot)) {
  throw new Error(`Design source folder not found: ${designRoot}`);
}

fs.mkdirSync(publicRoot, { recursive: true });

MULTI_PAGE_VERSIONS.forEach(copyMultiPageVersion);
SPA_VERSIONS.forEach(copySpaVersion);

console.log('Design versions copied to public/');
