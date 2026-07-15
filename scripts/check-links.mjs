import { access, readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("dist");

async function filesIn(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const target = path.join(dir, entry.name);
    return entry.isDirectory() ? filesIn(target) : [target];
  }));
  return nested.flat();
}

const htmlFiles = (await filesIn(root)).filter((file) => file.endsWith(".html"));
const failures = [];

for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, "utf8");
  const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  for (const ref of refs) {
    if (!ref.startsWith("/") || ref.startsWith("//")) continue;
    const clean = ref.split(/[?#]/)[0];
    if (!clean || clean === "/") continue;
    let target = path.join(root, clean.replace(/^\//, ""));
    if (path.extname(target) === "") target = `${target}.html`;
    try {
      await access(target);
      if ((await stat(target)).isDirectory()) await access(path.join(target, "index.html"));
    } catch {
      failures.push(`${path.relative(root, htmlFile)} -> ${ref}`);
    }
  }
}

if (failures.length) {
  console.error(`Broken internal references:\n${failures.join("\n")}`);
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files: no broken internal references.`);
