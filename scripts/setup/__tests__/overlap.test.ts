import { afterAll, beforeAll, describe, expect, setDefaultTimeout, test } from "bun:test";
import { cp, mkdir, mkdtemp, readdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { writeCapabilities } from "../capabilities";
import { overlap, UsageError } from "../overlap";
import type { ReportLine, ReportSection } from "../overlap";

// The repo tests run git many times and start bun processes; the default 5 s is too tight.
setDefaultTimeout(60_000);

let work: string;
let brain: string;

/** brain's real plugin folder: the fixture test reads the protocol the plugin ships. */
const plugin = `${import.meta.dir}/../../..`;
const script = `${import.meta.dir}/../overlap.ts`;
/** A copy of AGENTS.md from Peter's resume repo at commit ac74fb5 (SPEC-workspace criterion 13). */
const fixture = `${import.meta.dir}/fixtures/resume/AGENTS.md`;

/** A small protocol, so the report tests do not move when brain's own protocol text changes. */
const protocol = [
  "`brain <cmd>` runs brain's CLI.",
  "",
  "## Session start",
  "",
  "1. Check `git status` and the branch. Keep work you did not start.",
  "2. Report in five lines or fewer: the stage, the last completed step and the next step.",
  "",
  "## Capability check",
  "",
  "Confirm the library skills and servers in `docs/agents/capabilities.md`. Load what is missing.",
  "When a skill may apply, load it before you act. using-brain routes work to skills, e.g. to build.",
  "",
  "## Task end",
  "",
  "1. Rewrite `docs/STATUS.md`: the next action and anything red.",
  "2. Stage files by name.",
  "",
].join("\n");

const capabilities = [
  "# Capabilities",
  "",
  "## Toolchain",
  "",
  "| Command | Version | From |",
  "|---|---|---|",
  "| `bun --version` | `>=1.4.4` | `AGENTS.md` |",
  "",
  "## Library skills",
  "",
  "Load a library's skills before you write code that uses the library.",
  "",
  "| Library | Skills |",
  "|---|---|",
  "| `@acme/ui` | `acme-ui:*` |",
  "",
  "## Servers",
  "",
  "| Server | Configured in | Prove with |",
  "|---|---|---|",
  "| `ui-docs` | `.mcp.json` | one real read-only call |",
  "",
].join("\n");

const capabilitiesPath = "docs/agents/capabilities.md";

/** Run git in `root`; `env` sets an author for one commit. */
function git(root: string, args: string[], env: Record<string, string> = {}) {
  return Bun.spawnSync(["git", ...args], { cwd: root, env: { ...process.env, ...env } });
}

const gitOut = (root: string, ...args: string[]) => git(root, args).stdout.toString().trim();

async function put(root: string, files: Record<string, string>): Promise<void> {
  for (const [path, body] of Object.entries(files)) {
    await mkdir(`${root}/${path}`.replace(/\/[^/]+$/u, ""), { recursive: true });
    await Bun.write(`${root}/${path}`, body);
  }
}

/** A folder holding `files`, with no git. */
async function folder(name: string, files: Record<string, string>): Promise<string> {
  const root = `${work}/${name}`;
  await mkdir(root, { recursive: true });
  await put(root, files);
  return root;
}

/** A git repo with a test identity that signs nothing, holding `files` in one commit. */
async function gitRepo(name: string, files: Record<string, string>): Promise<string> {
  const root = await folder(name, files);
  git(root, ["init", "-q"]);
  for (const [key, value] of [
    ["user.name", "test"],
    ["user.email", "test@example.com"],
    ["commit.gpgsign", "false"],
    ["core.autocrlf", "false"],
  ]) {
    git(root, ["config", key as string, value as string]);
  }
  git(root, ["add", "-A"]);
  git(root, ["commit", "-q", "-m", "init"]);
  return root;
}

function run(root: string, ...args: string[]) {
  const done = Bun.spawnSync(["bun", script, "--root", root, ...args], { cwd: root });
  return { code: done.exitCode, out: done.stdout.toString(), err: done.stderr.toString() };
}

/** Every file under `root`, .git included, with its bytes: the tree a report must leave as it is. */
async function snapshot(root: string): Promise<Map<string, string>> {
  const files = new Map<string, string>();
  for (const entry of await readdir(root, { recursive: true, withFileTypes: true })) {
    if (entry.isFile()) {
      const full = `${entry.parentPath}/${entry.name}`;
      files.set(full, await Bun.file(full).text());
    }
  }
  return files;
}

beforeAll(async () => {
  work = await mkdtemp(`${tmpdir()}/brain-overlap-`);
  brain = `${work}/brain`;
  await put(brain, { "protocol/PROTOCOL.md": protocol });
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

const report = (root: string) => overlap({ brain, root, dryRun: true });

/** The sections of the first file the report lists. */
async function sectionsOf(root: string): Promise<ReportSection[]> {
  const result = await report(root);
  return result.files[0]?.sections ?? [];
}

/** The lines of the first section of the first file the report lists. */
async function linesOf(root: string): Promise<ReportLine[]> {
  const sections = await sectionsOf(root);
  return sections[0]?.lines ?? [];
}

describe("the overlap report", () => {
  test("each line of an offered section is covered, moved or orphan; covered and moved lines name what replaces them", async () => {
    const root = await folder("classify", {
      [capabilitiesPath]: capabilities,
      "AGENTS.md": [
        "# Repo",
        "",
        "Intro text about the repo.",
        "",
        "## Session start",
        "",
        "1. Check `git status` and the branch. Read [the record layout](docs/agents/workflow.md).",
        "2. Check `bun --version` (1.4.4 or later).",
        "",
        "## Code",
        "",
        "Write all tooling in Bun and TypeScript. Stage files by name.",
        "",
      ].join("\n"),
    });
    const result = await report(root);
    expect(result.files.map((file) => file.path)).toEqual(["AGENTS.md"]);
    const [title, start, code] = result.files[0]?.sections ?? [];
    expect(title).toMatchObject({ heading: "Repo", level: 1, status: "kept" });
    expect(start).toEqual({
      heading: "Session start",
      level: 2,
      status: "offered",
      homes: ["protocol: Session start", "capabilities.md: Toolchain"],
      lines: [
        {
          text: "Check `git status` and the branch.",
          kind: "covered",
          home: "protocol: Session start",
          replacement: "Check `git status` and the branch.",
        },
        { text: "Read [the record layout](docs/agents/workflow.md).", kind: "orphan" },
        {
          text: "Check `bun --version` (1.4.4 or later).",
          kind: "moved",
          home: "capabilities.md: Toolchain",
          replacement: "| `bun --version` | `>=1.4.4` | `AGENTS.md` |",
        },
      ],
    });
    expect(code).toMatchObject({ heading: "Code", status: "kept" });
    expect(code?.lines.map((line) => [line.kind, line.text])).toEqual([
      ["orphan", "Write all tooling in Bun and TypeScript."],
      ["covered", "Stage files by name."],
    ]);
  });

  test("a section is offered when its heading names a protocol or capabilities.md section, or when most of its lines are covered or moved", async () => {
    const root = await folder("offer", {
      [capabilitiesPath]: capabilities,
      "AGENTS.md": [
        "## Libraries",
        "",
        "Before you write code that uses a library, load its skill. Use `pnpm ui` to list them.",
        "",
        "## Before work",
        "",
        "Check `git status` and the branch. Keep work you did not start. Ask Ann first.",
        "",
        "## Task end",
        "",
        "Ask Ann before a release.",
        "",
      ].join("\n"),
    });
    const sections = await sectionsOf(root);
    expect(sections.map((s) => [s.heading, s.status, s.homes])).toEqual([
      ["Libraries", "offered", ["capabilities.md: Library skills"]],
      ["Before work", "offered", ["protocol: Session start"]],
      ["Task end", "kept", ["protocol: Task end"]],
    ]);
  });

  test("a bold label goes with its paragraph; a table and a code block are one line each; brain's own blocks are skipped", async () => {
    const root = await folder("blocks", {
      "AGENTS.md": [
        "## Session start",
        "",
        "**Before you begin.** Check `git status` and the branch.",
        "",
        "**Ask first** (row 9). Ask Ann before a release.",
        "",
        "| Step | Command |",
        "|---|---|",
        "| 1 | `git status` |",
        "",
        "```sh",
        "git status",
        "```",
        "",
        "<!-- brain:protocol:start -->",
        "## Task end",
        "Stage files by name.",
        "<!-- brain:protocol:end -->",
        "",
      ].join("\n"),
    });
    const sections = await sectionsOf(root);
    expect(sections.map((s) => s.heading)).toEqual(["Session start"]);
    expect(sections[0]?.lines.map((line) => [line.kind, line.text])).toEqual([
      ["covered", "**Before you begin.**"],
      ["covered", "Check `git status` and the branch."],
      ["orphan", "**Ask first** (row 9)."],
      ["orphan", "Ask Ann before a release."],
      ["orphan", "| Step | Command |\n|---|---|\n| 1 | `git status` |"],
      ["orphan", "```sh\ngit status\n```"],
    ]);
  });

  test("words spread over a protocol section cover no line: one protocol sentence must hold them all", async () => {
    const root = await folder("one-sentence", {
      "AGENTS.md": "## Task end\n\nStage the task's files by name. Name the next file to stage.\n",
    });
    const lines = await linesOf(root);
    expect(lines.map((line) => [line.kind, line.text, line.replacement])).toEqual([
      ["orphan", "Stage the task's files by name.", undefined],
      ["orphan", "Name the next file to stage.", undefined],
    ]);
  });

  test("a line is covered only beside a protocol sentence that holds all its topic words and few others", async () => {
    const root = await folder("short", {
      "AGENTS.md":
        "## Task end\n\nStage files by name. Name the next action. Then check again. A skill that may apply: load it.\n",
    });
    const lines = await linesOf(root);
    expect(lines.map((line) => [line.kind, line.replacement])).toEqual([
      ["covered", "Stage files by name."],
      ["orphan", undefined],
      ["orphan", undefined],
      ["covered", "When a skill may apply, load it before you act."],
    ]);
  });

  test("a line that ends with a colon above a list goes the way of that list", async () => {
    const root = await folder("lead-in", {
      "AGENTS.md": [
        "## Session start",
        "",
        "Run these checks:",
        "",
        "1. Check `git status` and the branch.",
        "2. Keep work you did not start.",
        "",
        "Then do these:",
        "",
        "- Keep work you did not start.",
        "- Ask Ann first.",
        "",
      ].join("\n"),
    });
    const lines = await linesOf(root);
    expect(lines.map((line) => [line.kind, line.text])).toEqual([
      ["covered", "Run these checks:"],
      ["covered", "Check `git status` and the branch."],
      ["covered", "Keep work you did not start."],
      ["orphan", "Then do these:"],
      ["covered", "Keep work you did not start."],
      ["orphan", "Ask Ann first."],
    ]);
  });

  test("a moved line needs every version it names in capabilities.md; without capabilities.md nothing is moved", async () => {
    const agents = [
      "## Session start",
      "",
      "Check `bun --version` (1.5.0 or later). Use the `ui-docs` server for each component.",
      "",
    ].join("\n");
    const kinds = async (root: string) => {
      const lines = await linesOf(root);
      return lines.map((line) => line.kind);
    };
    const withFile = await folder("moved", {
      [capabilitiesPath]: capabilities,
      "AGENTS.md": agents,
    });
    expect(await kinds(withFile)).toEqual(["orphan", "moved"]);
    const without = await folder("moved-none", { "AGENTS.md": agents });
    expect(await kinds(without)).toEqual(["orphan", "orphan"]);
  });

  test("CLAUDE.md, .claude/CLAUDE.md and GEMINI.md are reported, and none of them is offered", async () => {
    const root = await folder("others", {
      "CLAUDE.md": "@AGENTS.md\n\n## Session start\n\nCheck `git status` and the branch.\n",
      ".claude/CLAUDE.md": "@../AGENTS.md\n",
      "GEMINI.md": "## Task end\n\nStage files by name.\n",
    });
    const result = await report(root);
    expect(
      result.files.map((file) => [
        file.path,
        file.editable,
        file.sections.map((s) => [s.heading, s.status]),
      ]),
    ).toEqual([
      ["CLAUDE.md", false, [["Session start", "overlap"]]],
      [".claude/CLAUDE.md", false, []],
      ["GEMINI.md", false, [["Task end", "overlap"]]],
    ]);
  });

  test("other authors leave out the user, by name or by email, and bot accounts", async () => {
    const root = await gitRepo("authors", { "AGENTS.md": "## Code\n\nWrite tests.\n" });
    const commit = (name: string, email: string, file: string) => {
      git(root, ["commit", "-q", "--allow-empty", "-m", file], {
        GIT_AUTHOR_NAME: name,
        GIT_AUTHOR_EMAIL: email,
      });
    };
    commit("Ann Lee", "ann@example.com", "one");
    commit("dependabot[bot]", "49699333+dependabot[bot]@users.noreply.github.com", "two");
    commit("test", "1+test@users.noreply.github.com", "three");
    commit("Test Bot", "test@example.com", "four");
    const found = await report(root);
    expect(found.authors).toEqual(["Ann Lee <ann@example.com>"]);
    const lone = await gitRepo("authors-none", { "AGENTS.md": "## Code\n\nWrite tests.\n" });
    const none = await report(lone);
    expect(none.authors).toEqual([]);
  });
});

const sample = [
  "# Repo",
  "",
  "Intro text about the repo.",
  "",
  "## Session start",
  "",
  "1. Check `git status` and the branch. Read [the record layout](docs/agents/workflow.md).",
  "2. Check `bun --version` (1.4.4 or later).",
  "",
  "## Code",
  "",
  "Write all tooling in Bun and TypeScript. Stage files by name.",
  "",
].join("\n");

describe("removing the sections the user picks", () => {
  test("each picked section keeps only its orphan lines, and one commit holds AGENTS.md alone", async () => {
    const root = await gitRepo("remove", { "AGENTS.md": sample });
    await put(root, { [capabilitiesPath]: capabilities, "notes.md": "staged, not committed\n" });
    git(root, ["add", "notes.md"]);
    const before = gitOut(root, "rev-parse", "HEAD");
    const result = await overlap({ brain, root, dryRun: false, remove: ["Session start"] });
    expect(result.changes).toEqual([{ path: "AGENTS.md", action: "updated" }]);
    expect(await Bun.file(`${root}/AGENTS.md`).text()).toBe(
      [
        "# Repo",
        "",
        "Intro text about the repo.",
        "",
        "## Session start",
        "",
        "1. Read [the record layout](docs/agents/workflow.md).",
        "",
        "## Code",
        "",
        "Write all tooling in Bun and TypeScript. Stage files by name.",
        "",
      ].join("\n"),
    );
    expect(result.commit).toBe(gitOut(root, "rev-parse", "HEAD"));
    expect(gitOut(root, "rev-parse", "HEAD~1")).toBe(before);
    expect(gitOut(root, "show", "--name-only", "--format=", "HEAD")).toBe("AGENTS.md");
    expect(gitOut(root, "log", "-1", "--format=%s")).toBe(
      "docs: remove what brain now carries from AGENTS.md",
    );
    expect(gitOut(root, "status", "--porcelain")).toBe("A  notes.md\n?? docs/");
  });

  test("an AGENTS.md with CRLF line ends keeps them on every line", async () => {
    const root = await gitRepo("crlf", { "AGENTS.md": sample.replaceAll("\n", "\r\n") });
    await put(root, { [capabilitiesPath]: capabilities });
    await overlap({ brain, root, dryRun: false, remove: ["Session start"] });
    expect(await Bun.file(`${root}/AGENTS.md`).text()).toBe(
      [
        "# Repo",
        "",
        "Intro text about the repo.",
        "",
        "## Session start",
        "",
        "1. Read [the record layout](docs/agents/workflow.md).",
        "",
        "## Code",
        "",
        "Write all tooling in Bun and TypeScript. Stage files by name.",
        "",
      ].join("\r\n"),
    );
  });

  test("a section with no orphan line goes whole, but its heading stays above a section under it that stays", async () => {
    const root = await gitRepo("whole", {
      "AGENTS.md": [
        "# Repo",
        "",
        "## Session start",
        "",
        "Check `git status` and the branch.",
        "",
        "## Task end",
        "",
        "Stage files by name.",
        "",
        "### Release",
        "",
        "Ask Ann before a release.",
        "",
        "## Code",
        "",
        "Write all tooling in Bun and TypeScript.",
        "",
      ].join("\n"),
    });
    await overlap({ brain, root, dryRun: false, remove: ["Session start", "Task end"] });
    expect(await Bun.file(`${root}/AGENTS.md`).text()).toBe(
      [
        "# Repo",
        "",
        "## Task end",
        "",
        "### Release",
        "",
        "Ask Ann before a release.",
        "",
        "## Code",
        "",
        "Write all tooling in Bun and TypeScript.",
        "",
      ].join("\n"),
    );
  });

  test("the kept items of a numbered list are numbered again from the list's first number", async () => {
    const root = await gitRepo("numbers", {
      "AGENTS.md": [
        "## Session start",
        "",
        "1. Check `git status` and the branch.",
        "2. Read the record layout.",
        "3. Keep work you did not start.",
        "4. Ask Ann first.",
        "",
      ].join("\n"),
    });
    await overlap({ brain, root, dryRun: false, remove: ["Session start"] });
    expect(await Bun.file(`${root}/AGENTS.md`).text()).toBe(
      "## Session start\n\n1. Read the record layout.\n2. Ask Ann first.\n",
    );
  });

  test("a dry run returns each trimmed section and writes nothing", async () => {
    const root = await gitRepo("remove-dry", { "AGENTS.md": sample });
    await put(root, { [capabilitiesPath]: capabilities });
    const head = gitOut(root, "rev-parse", "HEAD");
    const result = await overlap({ brain, root, dryRun: true, remove: ["Session start"] });
    expect(result.changes).toEqual([{ path: "AGENTS.md", action: "updated" }]);
    expect(result.trimmed).toBe(
      "## Session start\n\n1. Read [the record layout](docs/agents/workflow.md).\n",
    );
    expect(result.commit).toBeNull();
    expect(await Bun.file(`${root}/AGENTS.md`).text()).toBe(sample);
    expect(gitOut(root, "rev-parse", "HEAD")).toBe(head);
  });

  test("an AGENTS.md with uncommitted changes, or one git does not track, is refused: exit 1, nothing written", async () => {
    const dirty = await gitRepo("dirty", { "AGENTS.md": sample });
    await Bun.write(`${dirty}/AGENTS.md`, `${sample}\nA new line.\n`);
    const changed = run(dirty, "--brain", brain, "--remove", "Session start");
    expect(changed.code).toBe(1);
    expect(changed.err).toContain("AGENTS.md has uncommitted changes");
    expect(await Bun.file(`${dirty}/AGENTS.md`).text()).toBe(`${sample}\nA new line.\n`);

    const untracked = await gitRepo("untracked", { "README.md": "repo\n" });
    await Bun.write(`${untracked}/AGENTS.md`, sample);
    const loose = run(untracked, "--brain", brain, "--remove", "Session start");
    expect(loose.code).toBe(1);
    expect(loose.err).toContain("AGENTS.md is not tracked by git");
    expect(await Bun.file(`${untracked}/AGENTS.md`).text()).toBe(sample);
  });

  test("a heading that names no offered section is bad usage", async () => {
    const root = await gitRepo("not-offered", { "AGENTS.md": sample });
    await expect(overlap({ brain, root, dryRun: true, remove: ["Code"] })).rejects.toThrow(
      UsageError,
    );
    const done = run(root, "--brain", brain, "--remove", "Code");
    expect(done.code).toBe(2);
    expect(done.err).toContain(
      '"Code" is not an offered section of AGENTS.md; offered: Session start',
    );
  });
});

describe("overlap.ts, the command", () => {
  test("the report prints each file, section and line, and writes nothing", async () => {
    const root = await gitRepo("command", {
      "AGENTS.md": sample,
      "CLAUDE.md": "## Session start\n\nCheck `git status` and the branch.\n",
    });
    await put(root, { [capabilitiesPath]: capabilities });
    const before = await snapshot(root);
    const done = run(root, "--brain", brain);
    expect(done.code).toBe(0);
    expect(done.out).toContain(
      [
        "AGENTS.md",
        "  kept     # Repo",
        "  offered  ## Session start  ->  protocol: Session start; capabilities.md: Toolchain",
        "    covered  Check `git status` and the branch.",
        "             = Check `git status` and the branch.",
        "    orphan   Read [the record layout](docs/agents/workflow.md).",
        "    moved    Check `bun --version` (1.4.4 or later).",
        "             = | `bun --version` | `>=1.4.4` | `AGENTS.md` |",
        "  kept     ## Code  (1 of 2 lines covered or moved)",
        "    covered  Stage files by name.",
      ].join("\n"),
    );
    expect(done.out).toContain("CLAUDE.md  (reported only: setup-brain never edits this file)");
    expect(done.out).toContain("other authors: none");
    expect(await snapshot(root)).toEqual(before);
  });

  test("with no AGENTS.md the report says so; an unknown flag is bad usage", async () => {
    const root = await folder("command-empty", { "README.md": "repo\n" });
    const done = run(root, "--brain", brain);
    expect(done.code).toBe(0);
    expect(done.out).toContain("AGENTS.md: none");
    expect(run(root, "--brain", brain, "--force").code).toBe(2);
  });
});

describe("brain's own AGENTS.md against the protocol the plugin ships", () => {
  test('"Stage the task\'s files by name." is an orphan line; the protocol\'s own "Stage files by name." is covered', async () => {
    const root = await folder("brain-change-discipline", {
      "AGENTS.md": [
        "# Working on brain",
        "",
        "## Change discipline",
        "",
        "- Bun 1.4.0 only. No Node runtime, no Python.",
        "- A failing test first, then the code, then `bun run check` green before the commit.",
        "- One commit per task. Stage the task's files by name.",
        "",
        "## Commits",
        "",
        "Stage files by name.",
        "",
      ].join("\n"),
    });
    const found = await overlap({ brain: plugin, root, dryRun: true });
    const lines = found.files[0]?.sections.flatMap((s) => s.lines) ?? [];
    expect(lines.find((line) => line.text === "Stage the task's files by name.")).toEqual({
      text: "Stage the task's files by name.",
      kind: "orphan",
    });
    expect(lines.find((line) => line.text === "Stage files by name.")).toEqual({
      text: "Stage files by name.",
      kind: "covered",
      home: "protocol: Task end",
      replacement: "Stage files by name.",
    });
  });
});

describe("the resume fixture: AGENTS.md at ac74fb5 (SPEC-workspace criterion 13)", () => {
  test("is the resume repo's AGENTS.md at ac74fb5, byte for byte", async () => {
    const bytes = await Bun.file(fixture).arrayBuffer();
    const sha1 = new Bun.CryptoHasher("sha1").update(bytes).digest("hex");
    expect(sha1).toBe("90f051b57420bce9f5192c6a0ada33a1ad6942e1");
  });

  test("capabilities.md takes the repo facts first; the four covered sections go; tooling and orphan lines stay; one commit holds AGENTS.md alone", async () => {
    const claude = "@AGENTS.md\n\n## Claude Code\n\nCheck `git status` and the branch.\n";
    const root = await gitRepo("resume", {
      "CLAUDE.md": claude,
      "package.json": JSON.stringify({
        name: "resume",
        dependencies: { "@acmelabs/design-system": "0.3.3", react: "19.3.1" },
      }),
      ".mcp.json": JSON.stringify({ mcpServers: { "acme-design-system": { command: "bun" } } }),
    });
    await cp(fixture, `${root}/AGENTS.md`);
    git(root, ["add", "AGENTS.md"]);
    git(root, ["commit", "-q", "-m", "AGENTS.md as the resume repo had it at ac74fb5"]);

    const skills = ["acme-design-system:choose-and-compose", "acme-design-system:data-layouts"];
    await writeCapabilities({ brain: plugin, root, skills, dryRun: false });
    const facts = await Bun.file(`${root}/${capabilitiesPath}`).text();
    expect(facts).toContain("| `bun --version` | `>=1.4.4` | `AGENTS.md` |");
    expect(facts).toContain("| `@acmelabs/design-system` | `acme-design-system:*` |");
    expect(facts).toContain("| `acme-design-system` | `.mcp.json` | one real read-only call |");
    expect(facts).not.toContain("tanstack");

    const found = await overlap({ brain: plugin, root, dryRun: true });
    const agents = found.files.find((file) => file.path === "AGENTS.md");
    const offered = agents?.sections.filter((s) => s.status === "offered").map((s) => s.heading);
    expect(offered).toEqual(["Session start", "Work through brain", "Libraries", "Task end"]);

    const result = await overlap({ brain: plugin, root, dryRun: false, remove: offered ?? [] });
    const after = await Bun.file(`${root}/AGENTS.md`).text();
    for (const kept of [
      "Write all tooling in Bun and TypeScript",
      "Read [the capability map](spec/README.md), then the spec,",
      "Read [the record layout](docs/agents/workflow.md).",
      "[CLAUDE.md](CLAUDE.md) has the Claude spellings.",
      "Use `bun run intent`, never `bunx intent` or `intent install`",
      "1. Tick the task's acceptance in [tasks/todo.md](tasks/todo.md).",
      "## Modules",
      "## Releases and approvals",
    ]) {
      expect(after).toContain(kept);
    }
    for (const gone of [
      "Check `bun --version` (1.4.4 or later).",
      "Load the `@acmelabs/design-system` skills it needs",
      "Ask the `acme-design-system` docs server",
      "Check `git status` and the branch.",
      "Update the spec when its facts change.",
    ]) {
      expect(after).not.toContain(gone);
    }
    expect(result.commit).toBe(gitOut(root, "rev-parse", "HEAD"));
    expect(gitOut(root, "show", "--name-only", "--format=", "HEAD")).toBe("AGENTS.md");
    expect(await Bun.file(`${root}/CLAUDE.md`).text()).toBe(claude);
  });
});
