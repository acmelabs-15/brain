import { afterAll, beforeAll, describe, expect, setDefaultTimeout, test } from "bun:test";
import { mkdir, mkdtemp, rm, stat } from "node:fs/promises";
import { tmpdir } from "node:os";

import { writeCapabilities } from "../capabilities";

// The flag tests start a bun process, which takes seconds on a loaded machine.
setDefaultTimeout(60_000);

let work: string;
let brain: string;

const template = `# Capabilities

## Toolchain

| Command | Version | From |
|---|---|---|
{{toolchain}}

## Library skills

| Library | Skills |
|---|---|
{{libraries}}

## Servers

| Server | Configured in | Prove with |
|---|---|---|
{{servers}}
`;
const path = "docs/agents/capabilities.md";
const exists = (p: string) =>
  stat(p).then(
    () => true,
    () => false,
  );

async function repo(name: string, files: Record<string, string> = {}): Promise<string> {
  const root = `${work}/${name}`;
  await mkdir(root, { recursive: true });
  for (const [file, body] of Object.entries(files)) {
    await mkdir(`${root}/${file}`.replace(/\/[^/]+$/u, ""), { recursive: true });
    await Bun.write(`${root}/${file}`, body);
  }
  return root;
}

/** A package.json with these fields, as a repo would hold it. */
const pkg = (fields: Record<string, unknown>) =>
  JSON.stringify({ name: "probe", version: "0.0.1", ...fields }, null, 2);

/** The rows of one section of a capabilities.md: every table line below its header row. */
function rows(text: string, heading: string): string[] {
  const section = text.split(`## ${heading}\n`)[1]?.split("\n## ")[0] ?? "";
  return section
    .split("\n")
    .filter((line) => line.startsWith("| "))
    .slice(1);
}

beforeAll(async () => {
  work = await mkdtemp(`${tmpdir()}/brain-capabilities-`);
  brain = `${work}/brain`;
  await mkdir(`${brain}/skills/setup-brain`, { recursive: true });
  await Bun.write(`${brain}/skills/setup-brain/capabilities.md`, template);
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

const base = { dryRun: false, skills: [] as string[] };

describe("writeCapabilities, a new file", () => {
  test("in a repo with nothing to propose it creates capabilities.md with three empty tables", async () => {
    const root = await repo("empty", { "package.json": pkg({}) });
    const result = await writeCapabilities({ brain, root, ...base });
    expect(result.changes).toEqual([{ path, action: "created" }]);
    expect(await Bun.file(`${root}/${path}`).text()).toBe(
      template.replaceAll(/^\{\{\w+\}\}\n/gmu, ""),
    );
  });

  test("a dry run returns the text and writes nothing", async () => {
    const root = await repo("dry", { "package.json": pkg({ engines: { node: ">=20" } }) });
    const result = await writeCapabilities({ brain, root, ...base, dryRun: true });
    expect(result.changes).toEqual([{ path, action: "created" }]);
    expect(rows(result.text, "Toolchain")).toEqual([
      "| `node --version` | `>=20` | `engines` in `package.json` |",
    ]);
    expect(await exists(`${root}/docs`)).toBe(false);
  });
});

describe("writeCapabilities, library skills", () => {
  test("a dependency matches the installed plugin named after its full name, as plugin:*", async () => {
    const root = await repo("libs-full", {
      "package.json": pkg({
        dependencies: {
          "@tanstack/react-router": "1.0.0",
          "@tanstack/ai": "1.0.0",
          react: "19.0.0",
        },
      }),
    });
    const skills = [
      "tanstack-react-router:guide",
      "tanstack-react-router:loaders",
      "tanstack-ai:chat",
      "tanstack-react-start:server",
      "brain:build",
    ];
    const result = await writeCapabilities({ brain, root, ...base, skills });
    expect(rows(result.text, "Library skills")).toEqual([
      "| `@tanstack/ai` | `tanstack-ai:*` |",
      "| `@tanstack/react-router` | `tanstack-react-router:*` |",
    ]);
  });

  test("a scope matches a plugin named after it, and a name of two words a plugin that ends with it", async () => {
    const root = await repo("libs-scope", {
      "package.json": pkg({
        dependencies: {
          "@supabase/supabase-js": "2.0.0",
          "@acmelabs/design-system": "0.3.3",
          "@acmelabs/design-system-react": "0.3.3",
          "@astrojs/react": "4.0.0",
        },
      }),
    });
    const skills = [
      "supabase:auth",
      "acme-design-system:choose-and-compose",
      "tanstack-ai-react:x",
    ];
    const result = await writeCapabilities({ brain, root, ...base, skills });
    expect(rows(result.text, "Library skills")).toEqual([
      "| `@acmelabs/design-system` | `acme-design-system:*` |",
      "| `@supabase/supabase-js` | `supabase:*` |",
    ]);
  });

  test("a skill with no plugin matches by its own name; every dependency field counts; @types packages never match", async () => {
    const root = await repo("libs-plain", {
      "package.json": pkg({
        devDependencies: { zod: "4.0.0", "@types/bun": "1.4.4" },
        peerDependencies: { stripe: "18.0.0" },
        optionalDependencies: { sharp: "0.34.0" },
      }),
    });
    const skills = ["zod", "stripe:payments", "sharp-images", "types", "bun"];
    const result = await writeCapabilities({ brain, root, ...base, skills });
    expect(rows(result.text, "Library skills")).toEqual([
      "| `stripe` | `stripe:*` |",
      "| `zod` | `zod` |",
    ]);
  });
});

describe("writeCapabilities, toolchain checks", () => {
  test("packageManager pins a version without its hash; engines give ranges; other engines and * are left out", async () => {
    const root = await repo("toolchain", {
      "package.json": pkg({
        packageManager: "pnpm@9.1.0+sha512.abc123",
        engines: { node: ">=20 <25", vscode: "^1.80.0", npm: "*" },
      }),
    });
    const result = await writeCapabilities({ brain, root, ...base });
    expect(rows(result.text, "Toolchain")).toEqual([
      "| `pnpm --version` | `9.1.0` | `packageManager` in `package.json` |",
      "| `node --version` | `>=20 <25` | `engines` in `package.json` |",
    ]);
  });

  test("a packageManager given as a URL is left out", async () => {
    const root = await repo("toolchain-url", {
      "package.json": pkg({ packageManager: "yarn@https://registry.npmjs.org/cli-dist.tgz" }),
    });
    const result = await writeCapabilities({ brain, root, ...base });
    expect(rows(result.text, "Toolchain")).toEqual([]);
  });

  test("a range with || keeps each pipe escaped, so the check stays one table row", async () => {
    const root = await repo("toolchain-or", {
      "package.json": pkg({ engines: { node: "^18 || ^20" } }),
    });
    const result = await writeCapabilities({ brain, root, ...base });
    expect(rows(result.text, "Toolchain")).toEqual([
      "| `node --version` | `^18 \\|\\| ^20` | `engines` in `package.json` |",
    ]);
  });
});

describe("writeCapabilities, servers", () => {
  test("each host's repo config is read, and a server named in several is one row", async () => {
    const root = await repo("servers", {
      ".mcp.json": JSON.stringify({ mcpServers: { docs: { command: "bun" }, db: { url: "x" } } }),
      ".codex/config.toml": '[mcp_servers.docs]\ncommand = "bun"\n',
      ".gemini/settings.json":
        '{\n  // the docs server\n  "mcpServers": { "docs": { "command": "bun" } },\n}\n',
      ".agents/mcp_config.json": JSON.stringify({ mcpServers: { tracker: { serverUrl: "y" } } }),
    });
    const result = await writeCapabilities({ brain, root, ...base });
    expect(rows(result.text, "Servers")).toEqual([
      "| `db` | `.mcp.json` | one real read-only call |",
      "| `docs` | `.mcp.json`, `.codex/config.toml`, `.gemini/settings.json` | one real read-only call |",
      "| `tracker` | `.agents/mcp_config.json` | one real read-only call |",
    ]);
  });

  test("a file that does not parse is skipped with its reason, and the other files still count", async () => {
    const root = await repo("servers-broken", {
      ".mcp.json": "{ not json",
      ".codex/config.toml": "[mcp_servers.docs\n",
      ".gemini/settings.json": JSON.stringify({ mcpServers: { docs: {} } }),
      "package.json": "{ broken",
    });
    const result = await writeCapabilities({ brain, root, ...base });
    expect(result.changes).toEqual([
      { path: "package.json", action: "skipped", note: "not valid JSON; nothing proposed from it" },
      { path: ".mcp.json", action: "skipped", note: "not valid JSON; nothing proposed from it" },
      {
        path: ".codex/config.toml",
        action: "skipped",
        note: "not valid TOML; nothing proposed from it",
      },
      { path, action: "created" },
    ]);
    expect(rows(result.text, "Servers")).toEqual([
      "| `docs` | `.gemini/settings.json` | one real read-only call |",
    ]);
  });

  test("a server name with a backtick or a line break is skipped with its reason; a pipe is escaped", async () => {
    const root = await repo("servers-names", {
      ".mcp.json": JSON.stringify({ mcpServers: { "a`b": {}, "c\nd": {}, "e|f": {} } }),
    });
    const result = await writeCapabilities({ brain, root, ...base });
    expect(result.changes).toEqual([
      {
        path: ".mcp.json",
        action: "skipped",
        note: 'server "a`b" left out: a backtick or a line break in a name breaks the table',
      },
      {
        path: ".mcp.json",
        action: "skipped",
        note: 'server "c\\nd" left out: a backtick or a line break in a name breaks the table',
      },
      { path, action: "created" },
    ]);
    expect(rows(result.text, "Servers")).toEqual([
      "| `e\\|f` | `.mcp.json` | one real read-only call |",
    ]);
  });
});

describe("writeCapabilities, the user's choices", () => {
  test("omit leaves out each named library, server and tool", async () => {
    const root = await repo("omit", {
      "package.json": pkg({
        dependencies: { zod: "4.0.0", stripe: "18.0.0" },
        engines: { node: ">=20", bun: ">=1.4.4" },
      }),
      ".mcp.json": JSON.stringify({ mcpServers: { docs: {}, db: {} } }),
    });
    const result = await writeCapabilities({
      brain,
      root,
      ...base,
      skills: ["zod", "stripe:payments"],
      omit: ["zod", "db", "node"],
    });
    expect(rows(result.text, "Toolchain")).toEqual([
      "| `bun --version` | `>=1.4.4` | `engines` in `package.json` |",
    ]);
    expect(rows(result.text, "Library skills")).toEqual(["| `stripe` | `stripe:*` |"]);
    expect(rows(result.text, "Servers")).toEqual([
      "| `docs` | `.mcp.json` | one real read-only call |",
    ]);
  });
});

describe("writeCapabilities, an existing file", () => {
  test("is the repo's file: kept byte for byte, with each proposed row it does not name listed", async () => {
    const before = `# Mine\n\n| \`@tanstack/ai\` | \`tanstack-ai:*\` |\n| \`docs\` | by hand |\n`;
    const root = await repo("existing", {
      [path]: before,
      "package.json": pkg({
        dependencies: { "@tanstack/ai": "1.0.0", "@tanstack/react-router": "1.0.0" },
      }),
      ".mcp.json": JSON.stringify({ mcpServers: { docs: {}, db: {} } }),
    });
    const skills = ["tanstack-ai:chat", "tanstack-react-router:guide"];
    for (const dryRun of [true, false]) {
      const result = await writeCapabilities({ brain, root, dryRun, skills });
      expect(result.changes).toEqual([
        { path, action: "unchanged", note: "the repo's file now: add a row by hand" },
      ]);
      expect(result.unnamed).toEqual([
        {
          section: "Library skills",
          row: "| `@tanstack/react-router` | `tanstack-react-router:*` |",
        },
        { section: "Servers", row: "| `db` | `.mcp.json` | one real read-only call |" },
      ]);
    }
    expect(await Bun.file(`${root}/${path}`).text()).toBe(before);
  });
});

describe("capabilities.ts, the command", () => {
  const script = `${import.meta.dir}/../capabilities.ts`;
  const run = (root: string, ...flags: string[]) =>
    Bun.spawnSync(["bun", script, "--root", root, "--brain", brain, ...flags]);

  test("--dry-run prints the change line and the text, and writes nothing; a run without it writes", async () => {
    const root = await repo("cli", { "package.json": pkg({ dependencies: { zod: "4.0.0" } }) });
    const dry = run(root, "--skills", "zod,brain:build", "--dry-run");
    expect(dry.exitCode).toBe(0);
    const out = dry.stdout.toString();
    expect(out).toContain(`created   ${path}  (dry run)`);
    expect(out).toContain("| `zod` | `zod` |");
    expect(await exists(`${root}/docs`)).toBe(false);
    const real = run(root, "--skills", "zod", "--omit", "zod");
    expect(real.exitCode).toBe(0);
    expect(real.stdout.toString()).toContain(`created   ${path}`);
    expect(await Bun.file(`${root}/${path}`).text()).not.toContain("`zod`");
  });

  test("on an existing file it prints unchanged and each row the file does not name", async () => {
    const root = await repo("cli-existing", {
      [path]: "# Mine\n",
      ".mcp.json": JSON.stringify({ mcpServers: { docs: {} } }),
    });
    const res = run(root, "--skills", "");
    expect(res.exitCode).toBe(0);
    const out = res.stdout.toString();
    expect(out).toContain(`unchanged ${path}  (the repo's file now: add a row by hand)`);
    expect(out).toContain("not named Servers: | `docs` | `.mcp.json` | one real read-only call |");
  });

  test("--skills is required: exit 2, the flag named, nothing written", async () => {
    const root = await repo("cli-no-skills");
    const res = run(root);
    expect(res.exitCode).toBe(2);
    expect(res.stderr.toString()).toContain("--skills");
    expect(await exists(`${root}/docs`)).toBe(false);
  });

  test("an unknown flag is bad usage: exit 2", async () => {
    const root = await repo("cli-unknown");
    const res = run(root, "--skills", "", "--write");
    expect(res.exitCode).toBe(2);
    expect(res.stderr.toString()).toContain("unknown or incomplete flag --write");
  });
});

describe("the shipped capabilities.md template", () => {
  const shipped = `${import.meta.dir}/../../..`;

  test("names the three sections, and a filled file keeps no placeholder", async () => {
    const root = await repo("shipped", {
      "package.json": pkg({ dependencies: { zod: "4.0.0" }, engines: { bun: ">=1.4.4" } }),
      ".mcp.json": JSON.stringify({ mcpServers: { docs: {} } }),
    });
    const result = await writeCapabilities({ brain: shipped, root, ...base, skills: ["zod"] });
    const text = await Bun.file(`${root}/${path}`).text();
    expect(text).toBe(result.text);
    expect(rows(text, "Toolchain")).toEqual([
      "| `bun --version` | `>=1.4.4` | `engines` in `package.json` |",
    ]);
    expect(rows(text, "Library skills")).toEqual(["| `zod` | `zod` |"]);
    expect(rows(text, "Servers")).toEqual(["| `docs` | `.mcp.json` | one real read-only call |"]);
    expect(text).not.toContain("{{");
  });
});
