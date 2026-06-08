const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const designRoot = path.join(root, 'design', 'claude-design');
const publicRoot = path.join(root, 'public');

// Auto-detect: multi-page if shared.css exists, SPA otherwise
const VERSIONS = ['v1', 'v2', 'v3'];
const SUB_PAGES = ['services', 'about', 'contact'];
const ROBOTS_META = [
  '<meta name="robots" content="noindex, nofollow">',
  '<meta name="googlebot" content="noindex, nofollow">',
].join('\n  ');

function removeDirectory(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

function isMultiPage(versionDir) {
  return fs.existsSync(path.join(versionDir, 'shared.css'));
}

function injectRobotsMeta(html) {
  if (/name="robots"/i.test(html)) return html;
  return html.replace(/<head>/i, `<head>\n  ${ROBOTS_META}`);
}

function injectBaseHref(html, version) {
  const tag = `<base href="/${version}/">`;
  if (/<base\s/i.test(html)) return html.replace(/<base\s[^>]*>/i, tag);
  return html.replace(/<head>/i, `<head>\n  ${tag}`);
}

function rewriteInternalLinks(html, version) {
  const base = `/${version}`;
  return html
    .replace(/href="index\.html"/g, `href="${base}"`)
    .replace(/href="services\.html"/g, `href="${base}/services"`)
    .replace(/href="about\.html"/g, `href="${base}/about"`)
    .replace(/href="contact\.html"/g, `href="${base}/contact"`)
    .replace(/href="shared\.css"/g, `href="${base}/shared.css"`)
    .replace(/src="shared\.js"/g, `src="${base}/shared.js"`);
}

function processHtml(html, version, multiPage) {
  let out = injectRobotsMeta(html);
  out = injectBaseHref(out, version);
  if (multiPage) out = rewriteInternalLinks(out, version);
  return out;
}

function copyVersion(version) {
  const srcDir = path.join(designRoot, version);
  const destDir = path.join(publicRoot, version);

  if (!fs.existsSync(srcDir)) {
    console.warn(`  Skipping ${version} — source folder not found`);
    return;
  }

  removeDirectory(destDir);
  fs.mkdirSync(destDir, { recursive: true });

  const multiPage = isMultiPage(srcDir);
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) continue;

    const srcFile = path.join(srcDir, entry.name);
    const destFile = path.join(destDir, entry.name);

    if (entry.name.endsWith('.html')) {
      const html = fs.readFileSync(srcFile, 'utf8');
      fs.writeFileSync(destFile, processHtml(html, version, multiPage), 'utf8');
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  }

  const type = multiPage ? 'multi-page' : 'SPA';
  console.log(`  Copied ${version} (${type})`);
}

function copyLogos() {
  const srcDir = path.join(designRoot, 'logos');
  const destDir = path.join(publicRoot, 'logos');

  if (!fs.existsSync(srcDir)) {
    console.warn('  Skipping logos — source folder not found');
    return;
  }

  removeDirectory(destDir);
  fs.mkdirSync(destDir, { recursive: true });

  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    if (entry.isDirectory()) continue;

    const srcFile = path.join(srcDir, entry.name);
    const destFile = path.join(destDir, entry.name);

    if (entry.name.endsWith('.html')) {
      const html = fs.readFileSync(srcFile, 'utf8');
      fs.writeFileSync(destFile, injectRobotsMeta(html), 'utf8');
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  }

  console.log('  Copied logos/');
}

// Remove versions no longer in use
const obsolete = ['v4', 'v5'];
for (const v of obsolete) {
  const dir = path.join(publicRoot, v);
  if (fs.existsSync(dir)) {
    removeDirectory(dir);
    console.log(`  Removed obsolete ${v} from public/`);
  }
}

fs.mkdirSync(publicRoot, { recursive: true });

for (const version of VERSIONS) {
  copyVersion(version);
}

copyLogos();

console.log('Done.');
