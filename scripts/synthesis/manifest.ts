import { join, dirname, extname } from "path";
import { realpathSync } from "fs";
import { readdir, stat, readFile } from "fs/promises";
import { existsSync } from "fs";

// Exclusions for rjm
const rjmExclusions = [
  "memory", "serena", "forgetful", "exploring-knowledge-graph", "chestertons-fence",
  "curating-memories", "encode-repo-serena", "using-serena-symbols", "using-forgetful-memory",
  ".serena", ".forgetful", ".claude-mem", "scripts/memory_enhancement", ".mcp.json",
  "github", "pr-", "push-pr", "pr-autofix", "pr-quality", "pr-comment-responder",
  ".claude/hooks", "evals", "tests", "build", "packages"
];

function isExcluded(filePath: string): boolean {
  const parts = filePath.split('/');
  for (const part of parts) {
    if (part.startsWith('memory')) return true;
    if (part.includes('serena') || part.includes('forgetful')) return true;
    if (part === 'exploring-knowledge-graph' || part === 'chestertons-fence' || part === 'curating-memories' || part === 'encode-repo-serena' || part === 'using-serena-symbols' || part === 'using-forgetful-memory') return true;
    if (part === '.serena' || part === '.forgetful' || part === '.claude-mem' || part === '.mcp.json') return true;
    if (filePath.includes('scripts/memory_enhancement')) return true;
    if (part === 'github' || part.startsWith('pr-') || part === 'push-pr' || part === 'pr-autofix' || part === 'pr-quality' || part === 'pr-comment-responder') return true;
    if (filePath.includes('.claude/hooks') || part === 'evals' || part === 'tests' || part === 'build' || part === 'packages') return true;
  }
  return false;
}

function getSlug(p: string) {
  let clean = p.replace(/^\.?\/?/, '');
  let slug = clean.replace(/[\/\._]/g, '-') + '.md';
  return slug;
}

async function walk(dir: string, fileList: string[] = []): Promise<string[]> {
  if (!existsSync(dir)) return fileList;
  const files = await readdir(dir, { withFileTypes: true });
  for (const file of files) {
    const p = join(dir, file.name);
    if (p.includes(".git")) continue;
    if (file.isDirectory()) {
      await walk(p, fileList);
    } else {
      fileList.push(p);
    }
  }
  return fileList;
}

function getFileType(p: string): string {
  if (p.includes("/skills/")) {
    if (p.includes("/scripts/")) return "script";
    if (p.includes("/references/")) return "reference";
    return "skill";
  }
  if (p.includes("/commands/")) return "command";
  if (p.includes("/agents/")) return "agent";
  if (p.includes("/scripts/")) return "script";
  if (p.includes("/templates/")) return "template";
  if (extname(p) === ".json" || extname(p) === ".toml" || extname(p) === ".yml") return "config";
  if (extname(p) === ".md" || extname(p) === ".txt") return "doc";
  return "file";
}

async function processPackage(pkg: string) {
  const dir = `sources/${pkg}`;
  const files = await walk(dir);
  const rows: any[] = [];
  
  for (const f of files) {
    const s = await stat(f);
    rows.push({
      path: f.replace(`sources/${pkg}/`, ''),
      bytes: s.size,
      type: getFileType(f),
      checked: existsSync(join('docs/analysis/inventory', pkg, getSlug(f.replace(`sources/${pkg}/`, '')))) || existsSync(join('docs/analysis/inventory', pkg, getSlug(f.replace(`sources/${pkg}/`, '').replace('.eval/', 'eval-')))) || existsSync(join('docs/analysis/inventory', pkg, getSlug(f.split('/').pop()!))) ? '[x]' : '[ ]'
    });
  }

  // Find skill slugs
  const skillSlugs = new Set<string>();
  for (const f of files) {
    const parts = f.split('/');
    const skillsIdx = parts.indexOf('skills');
    if (skillsIdx !== -1 && skillsIdx + 1 < parts.length) {
      skillSlugs.add(parts[skillsIdx + 1]);
    }
  }

  for (const slug of skillSlugs) {
    if (slug.includes('.')) continue; // ignore files directly in skills/
    const url = pkg === 'addy' ? `https://skills.addy.ie/skills/${slug}/` : `https://aihero.dev/skills-${slug}`;
    const dest = `sources/${pkg}-external/${slug}.md`;
    let content = "";
    let unavailable = false;
    try {
      const resp = await fetch(url);
      if (resp.ok) {
        content = await resp.text();
      } else {
        unavailable = true;
      }
    } catch (e) {
      unavailable = true;
    }
    
    if (!unavailable && content) {
      await Bun.write(dest, content);
      const s = await stat(dest);
      rows.push({
        path: `../${pkg}-external/${slug}.md`,
        bytes: s.size,
        type: 'external-doc',
        checked: existsSync(join('docs/analysis/inventory', pkg, getSlug(`sources/${pkg}-external/${slug}.md`))) || existsSync(join('docs/analysis/inventory', pkg, getSlug(`external-${slug}.md`))) || existsSync(join('docs/analysis/inventory', pkg, getSlug(`../${pkg}-external/${slug}.md`))) || existsSync(join('docs/analysis/inventory', pkg, getSlug(`${slug}.md`))) ? '[x]' : '[ ]'
      });
    } else {
      rows.push({
        path: `../${pkg}-external/${slug}.md`,
        bytes: 0,
        type: 'external-doc',
        checked: existsSync(join('docs/analysis/inventory', pkg, getSlug(`sources/${pkg}-external/${slug}.md`))) || existsSync(join('docs/analysis/inventory', pkg, getSlug(`external-${slug}.md`))) || existsSync(join('docs/analysis/inventory', pkg, getSlug(`../${pkg}-external/${slug}.md`))) || existsSync(join('docs/analysis/inventory', pkg, getSlug(`${slug}.md`))) ? '[x] (unavailable)' : '[ ] (unavailable)'
      });
    }
  }

  let out = `| Path | Bytes | Type | Checked |\n|---|---|---|---|\n`;
  for (const r of rows) {
    out += `| ${r.path} | ${r.bytes} | ${r.type} | ${r.checked} |\n`;
  }
  await Bun.write(`docs/analysis/manifest/${pkg}.md`, out);
}

async function getRjmEntryPoints(): Promise<string[]> {
  const eps = [
    ".claude/commands/spec.md",
    ".claude/commands/plan.md",
    ".claude/commands/build.md",
    ".claude/commands/test.md",
    ".claude/commands/ship.md",
    "docs/workflow-commands.md",
    "README.md"
  ];
  
  const dir = "sources/rjm/.agents/architecture";
  if (existsSync(dir)) {
    const files = await readdir(dir);
    for (const f of files) {
      if (f.startsWith("ADR-064-")) eps.push(`.agents/architecture/${f}`);
    }
  }
  
  const reviewDir = "sources/rjm/.claude/skills/review";
  if (existsSync(reviewDir)) {
    const reviewFiles = await walk(reviewDir);
    for (const rf of reviewFiles) {
      eps.push(rf.replace("sources/rjm/", ""));
    }
  } else {
    // If it's a file, push it
    if (existsSync("sources/rjm/.claude/skills/review.md")) {
       eps.push(".claude/skills/review.md");
    }
  }
  
  return eps;
}

async function processRjm() {
  const dir = "sources/rjm";
  const queue = await getRjmEntryPoints();
  const visited = new Set<string>();
  const inScope = new Set<string>();
  const excluded = new Set<string>();

  while (queue.length > 0) {
    const relPath = queue.shift()!;
    
    // Normalize relative path
    let normalizedPath = relPath.replace(/^\//, '').replace(/\/\//g, '/');
    const ext = extname(normalizedPath).toLowerCase();
    if ([".png", ".jpg", ".jpeg", ".gif", ".mp4", ".mov", ".ico"].includes(ext)) continue;
    const fullPathCheck = join(dir, normalizedPath);
    if (!existsSync(fullPathCheck)) continue;
    let real = fullPathCheck;
    try { real = require('fs').realpathSync(fullPathCheck); } catch(e) {}
    if (real.startsWith(require('path').resolve(dir))) {
      normalizedPath = real.slice(require('path').resolve(dir).length + 1);
    }
    
    if (visited.has(normalizedPath)) continue;
    visited.add(normalizedPath);

    if (isExcluded(normalizedPath)) {
      excluded.add(normalizedPath);
      continue;
    }

    const fullPath = join(dir, normalizedPath);
    if (!existsSync(fullPath)) continue;
    
    const s = await stat(fullPath);
    if (s.isDirectory()) {
      const files = await walk(fullPath);
      for (const f of files) {
        queue.push(f.replace(`${dir}/`, ''));
      }
      continue;
    }
    
    inScope.add(normalizedPath);
    
    const content = await readFile(fullPath, "utf-8");
    
    const skillRegex = /Skill\((["'])(.*?)\1\)/g;
    let match;
    while ((match = skillRegex.exec(content)) !== null) {
      queue.push(`.claude/skills/${match[2]}`);
    }
    
    const taskRegex = /Task\(subagent_type=(["'])(.*?)\1\)/g;
    while ((match = taskRegex.exec(content)) !== null) {
      queue.push(`.claude/skills/${match[2]}`);
    }
    
    const atFileRegex = /@file\s+([^\s]+)/g;
    while ((match = atFileRegex.exec(content)) !== null) {
      queue.push(match[1]);
    }
    
    const mdLinkRegex = /\[.*?\]\((.*?)\)/g;
    while ((match = mdLinkRegex.exec(content)) !== null) {
      const link = match[1];
      if (!link.startsWith("http") && !link.startsWith("#") && !link.startsWith("mailto:")) {
        const resolved = join(dirname(normalizedPath), link.split("#")[0]);
        queue.push(resolved);
      }
    }

    const directPathRegex = /\.claude\/skills\/[a-zA-Z0-9_-]+/g;
    while ((match = directPathRegex.exec(content)) !== null) {
      queue.push(match[0]);
    }
    
    const scriptPathRegex = /scripts\/[a-zA-Z0-9_\-\/]+\.(py|sh|ts|js)/g;
    while ((match = scriptPathRegex.exec(content)) !== null) {
      queue.push(match[0]);
    }
  }
  
  const writeManifest = async (name: string, paths: Set<string>) => {
    let out = `| Path | Bytes | Type | Checked |\n|---|---|---|---|\n`;
    const sorted = Array.from(paths).sort();
    for (const p of sorted) {
      const fullPath = join(dir, p);
      let bytes = 0;
      if (existsSync(fullPath)) {
        const s = await stat(fullPath);
        if (s.isDirectory()) continue;
        bytes = s.size;
      } else {
        continue;
      }
      const checked = existsSync(join('docs/analysis/inventory', name, getSlug(p))) || existsSync(join('docs/analysis/inventory', name, getSlug(p.split('/').pop()!))) ? '[x]' : '[ ]';
      out += `| ${p} | ${bytes} | ${getFileType(fullPath)} | ${checked} |\n`;
    }
    await Bun.write(`docs/analysis/manifest/${name}.md`, out);
  };

  await writeManifest("rjm", inScope);
  await writeManifest("rjm-excluded", excluded);
}

async function main() {
  await processPackage('addy');
  await processPackage('matt');
  await processRjm();
  console.log("Manifests generated.");
}

main().catch(console.error);
