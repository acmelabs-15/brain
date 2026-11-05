import { existsSync, lstatSync, realpathSync } from "node:fs";
/** Real Claude tool events with a scripted user; this does not test native dialog rendering. */
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

type ObjectValue = Record<string, unknown>;
export type ScriptedAnswer = { question: string; answer: string };
export type SessionOptions = {
  cwd: string;
  plugin: string;
  output: string;
  prompt: string;
  answers: ScriptedAnswer[];
  commands?: string[];
  timeoutSeconds?: number;
  maxCostUsd?: number;
  /** Enable the selected plugin's real hooks; ambient settings remain disabled. */
  hooks?: boolean;
  /** Omit the native question tool to test supported discovery/fallback behavior. */
  nativeQuestions?: boolean;
  allowedSkills?: string[];
  /** Allow only the setup scripts and generated guidance in addition to interview records. */
  setup?: boolean;
};

export const selectedBrainSkills = [
  "api-and-interface-design",
  "ask-user-question",
  "browser-testing-with-devtools",
  "ci-cd-and-automation",
  "code-review-and-quality",
  "code-simplification",
  "codebase-design",
  "constraint-driven-development",
  "context-engineering",
  "debugging-and-error-recovery",
  "deprecation-and-migration",
  "documentation-and-adrs",
  "domain-modeling",
  "doubt-driven-development",
  "frontend-ui-engineering",
  "git-workflow-and-versioning",
  "handoff",
  "idea-refine",
  "incremental-implementation",
  "interview-me",
  "observability-and-instrumentation",
  "performance-optimization",
  "planning-and-task-breakdown",
  "prototype",
  "security-and-hardening",
  "setup-brain",
  "shipping-and-launch",
  "source-driven-development",
  "spec-driven-development",
  "test-driven-development",
  "using-brain",
  "wait-what",
  "writing-for-agents",
].map((name) => `brain:${name}`);

export const selectedBrainInvocations = [
  ...selectedBrainSkills,
  ...[
    "build",
    "code-simplify",
    "constraints",
    "plan",
    "review",
    "ship",
    "spec",
    "status",
    "test",
    "webperf",
  ].map((name) => `brain:${name}`),
];

export function allowedSkill(input: ObjectValue, selected = selectedBrainInvocations): boolean {
  return typeof input.skill === "string" && selected.includes(input.skill);
}
export type SessionResult = {
  outcome: string;
  questions: string[];
  answers: string[];
  events: ObjectValue[];
  durationSeconds: number;
  costUsd: number | null;
};

function object(value: unknown): ObjectValue {
  return typeof value === "object" && value !== null ? (value as ObjectValue) : {};
}

/** Keep the host's returned input paired with the model's actual question. */
export function answerQuestion(input: ObjectValue, answer: string): ObjectValue {
  const { questions } = input;
  if (!Array.isArray(questions) || questions.length !== 1) {
    throw new Error("the scripted user accepts exactly one question per call");
  }
  const { question } = object(questions[0]);
  if (typeof question !== "string" || question.length === 0) {
    throw new Error("question text is missing");
  }
  return { behavior: "allow", updatedInput: { ...input, answers: { [question]: answer } } };
}

function setupArgsAllowed(script: string, args: string[], cwd: string): boolean {
  const flags = new Set(
    script === "write" ? ["--dry-run", "--check", "--no-codex"] : ["--dry-run"],
  );
  const values: Record<string, (value: string) => boolean> = {
    "--root": (value) => value === ".",
    ...(script === "write"
      ? {
          "--layout": (value: string) => ["single", "multi"].includes(value),
          "--codex-home": (value: string) => value === path.join(cwd, "codex"),
          "--codex-scope": (value: string) => ["global", "project"].includes(value),
        }
      : {
          "--skills": (value: string) =>
            // This is catalog data for matching dependencies, not permission to invoke a skill.
            value
              .split(",")
              .every(
                (name) =>
                  name === "" ||
                  selectedBrainInvocations.includes(name) ||
                  name === "plugin-authoring",
              ),
          "--omit": (value: string) => value === "bun",
        }),
  };
  const seen = new Set<string>();
  for (let i = 0; i < args.length; i += 1) {
    const flag = args[i] ?? "";
    if (flags.has(flag)) {
      seen.add(flag);
      continue;
    }
    i += 1;
    const value = args[i];
    const check = values[flag];
    if (check === undefined || value === undefined || !check(value)) {
      return false;
    }
    seen.add(flag);
  }
  const confinedHome = script !== "write" || seen.has("--codex-home") || seen.has("--no-codex");
  return confinedHome && seen.has("--root") && (script === "write" || seen.has("--skills"));
}

/** A small argument grammar for the two trusted setup scripts; no arbitrary program or root. */
function allowedSetupCommand(command: string, scripts: string, cwd: string): boolean {
  for (const script of ["write", "capabilities"]) {
    const file = `${scripts}/setup/${script}.ts`;
    const prefix = [`bun "${file}" `, `bun '${file}' `, `bun ${file} `].find((value) =>
      command.startsWith(value),
    );
    if (prefix === undefined) {
      continue;
    }
    const rest = command.slice(prefix.length).trim();
    const parts = rest.match(/"[^"\\]*"|'[^'\\]*'|[^\s"']+/gu) ?? [];
    if (parts.join(" ") !== rest.replaceAll(/\s+/gu, " ")) {
      return false;
    }
    const args = parts.map((part) => (/^["']/u.test(part) ? part.slice(1, -1) : part));
    return setupArgsAllowed(script, args, cwd);
  }
  return false;
}

/** The test host approves only its own local CLI commands, without shell composition. */
export function allowedCommand(
  command: string,
  brain: string,
  commands: string[] = [],
  setup = false,
  cwd?: string,
): boolean {
  if (/[\n\r;$`&|<>]/u.test(command)) {
    return false;
  }
  if (
    commands.includes(command) ||
    /^(?:pwd|ls -la|bun --version|git status --short(?: --branch| --untracked-files=all)?|git branch --show-current)$/u.test(
      command,
    )
  ) {
    return true;
  }
  if (
    setup &&
    cwd !== undefined &&
    allowedSetupCommand(command, path.dirname(brain), path.resolve(cwd))
  ) {
    return true;
  }
  const prefixes = [`bun "${brain}" `, `bun '${brain}' `, `bun ${brain} `];
  const prefix = prefixes.find((value) => command.startsWith(value));
  if (prefix === undefined) {
    return false;
  }
  const rest = command.slice(prefix.length);
  return (
    /^(?:check|status)(?: --json)?$/u.test(rest) ||
    rest === "--help" ||
    /^new-doc (?:IDEA|DEC|RES) [a-z0-9]+(?:-[a-z0-9]+)*(?: --title (?:"[^"\\]*"|'[^'\\]*'))?$/u.test(
      rest,
    )
  );
}

async function snapshot(cwd: string, output: string): Promise<void> {
  const files: Record<string, string> = {};
  for await (const file of new Bun.Glob("**/*").scan({ cwd, onlyFiles: true, dot: false })) {
    if (file.startsWith("node_modules/") || file.startsWith(".git/")) {
      continue;
    }
    if (/\.(?:md|json|ts)$/u.test(file)) {
      files[file] = await Bun.file(`${cwd}/${file}`).text();
    }
  }
  await Bun.write(output, JSON.stringify(files, null, 2));
}

function canonical(file: string): string {
  let parent = file;
  const suffix: string[] = [];
  while (!existsSync(parent)) {
    suffix.unshift(path.basename(parent));
    const next = path.dirname(parent);
    if (next === parent) {
      return file;
    }
    parent = next;
  }
  return path.join(realpathSync(parent), ...suffix);
}

function inside(file: string, cwd: string): boolean {
  if (file.startsWith("~")) {
    return false;
  }
  const absolute = canonical(path.resolve(cwd, file));
  const root = canonical(cwd);
  return absolute === root || absolute.startsWith(`${root}/`);
}

function artifactPath(relative: string): boolean {
  return (
    relative === "GLOSSARY.md" ||
    (relative.endsWith(".md") &&
      /^docs\/(?:ideas|decisions|research)\/[A-Za-z0-9][A-Za-z0-9._-]*\.md$/u.test(relative))
  );
}

/** Records are writable; fixture source, runtime configuration and completion receipts are not. */
export function allowedArtifactWrite(input: ObjectValue, cwd: string, setup = false): boolean {
  const { file_path: file } = input;
  if (typeof file !== "string" || file.startsWith("~") || /(?:^|\/)\.\.(?:\/|$)/u.test(file)) {
    return false;
  }
  const absolute = path.resolve(cwd, file);
  const relative = path.relative(path.resolve(cwd), absolute);
  const writable = (name: string) =>
    artifactPath(name) ||
    (setup &&
      ["docs/agents/workspace.md", "docs/agents/domain.md", "docs/agents/capabilities.md"].includes(
        name,
      ));
  if (!writable(relative)) {
    return false;
  }
  try {
    const root = canonical(path.resolve(cwd));
    let segment = root;
    for (const part of relative.split(path.sep)) {
      segment = path.join(segment, part);
      const stat = lstatSync(segment, { throwIfNoEntry: false });
      if (stat?.isSymbolicLink()) {
        return false;
      }
      if (stat === undefined) {
        break;
      }
    }
    return writable(path.relative(root, canonical(absolute)));
  } catch {
    return false;
  }
}

/** Read defaults are the fixture; only the selected plugin is an additional read root. */
export function allowedRead(
  tool: string,
  input: ObjectValue,
  cwd: string,
  plugin: string,
): boolean {
  const value = tool === "Read" ? input.file_path : (input.path ?? cwd);
  if (typeof value !== "string" || value.length === 0) {
    return false;
  }
  const file = path.resolve(cwd, value);
  if (value.startsWith("~") || !(inside(file, cwd) || inside(file, plugin))) {
    return false;
  }
  const glob = tool === "Glob" ? input.pattern : input.glob;
  return typeof glob !== "string" || !/^(?:\/|~)|(?:^|\/)\.\.(?:\/|$)/u.test(glob);
}

/** Arguments and environment are inspectable without starting a model process. */
export function sessionInvocation(options: SessionOptions): {
  args: string[];
  env: Record<string, string | undefined>;
} {
  const cwd = path.resolve(options.cwd);
  const plugin = path.resolve(options.plugin);
  const tools = ["Read", "Write", "Edit", "Glob", "Grep", "Bash", "Skill"];
  if (options.nativeQuestions !== false) {
    tools.push("AskUserQuestion");
  }
  const settings = {
    disableAllHooks: options.hooks !== true,
    autoMemoryEnabled: false,
    claudeMdExcludes: ["**"],
    disableBundledSkills: true,
    permissions: { ask: tools },
  };
  const excludedEnv = new Set([
    "BUN_OPTIONS",
    "NODE_OPTIONS",
    "BASH_ENV",
    "ENV",
    "CLAUDE_ENV_FILE",
  ]);
  const env: Record<string, string | undefined> = {
    ...Object.fromEntries(
      Object.entries(process.env).filter(
        ([key]) => !excludedEnv.has(key) && !key.startsWith("GIT_"),
      ),
    ),
    GIT_CEILING_DIRECTORIES: cwd,
    GIT_CONFIG_NOSYSTEM: "1",
    GIT_CONFIG_GLOBAL: "/dev/null",
    CODEX_HOME: `${cwd}/codex`,
    XDG_CACHE_HOME: `${cwd}/.eval-cache`,
    CLAUDE_CODE_DISABLE_CLAUDE_MDS: "1",
    CLAUDE_CODE_DISABLE_AUTO_MEMORY: "1",
    CLAUDE_CODE_DISABLE_BUNDLED_SKILLS: "1",
    CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD: "0",
    CLAUDE_CODE_AUTO_CONNECT_IDE: "false",
  };
  const args = [
    "claude",
    "--print",
    "--input-format",
    "stream-json",
    "--output-format",
    "stream-json",
    "--verbose",
    "--include-hook-events",
    "--permission-prompt-tool",
    "stdio",
    "--permission-mode",
    "manual",
    "--restricted",
    "--setting-sources",
    "",
    "--strict-mcp-config",
    "--mcp-config",
    '{"mcpServers":{}}',
    "--settings",
    JSON.stringify(settings),
    "--tools",
    tools.join(","),
    "--plugin-dir",
    plugin,
    "--add-dir",
    plugin,
    "--no-chrome",
    "--max-budget-usd",
    String(options.maxCostUsd ?? 2),
    "--no-session-persistence",
    "--append-system-prompt",
    `This is a controlled behavior evaluation. Work only in the invented consumer fixture. ${
      options.nativeQuestions === false
        ? "This host exposes no native question tool. "
        : "The host supplies a scripted user through AskUserQuestion. "
    }Run one command per Bash call; shell composition is disabled by this test host. The brain CLI is bun "${plugin}/scripts/brain.ts". The user is Sam. ${options.setup ? `Every setup writer command, including --dry-run and --check, must include --codex-home "${cwd}/codex" or --no-codex. The codex folder is invented other-host state inside this fixture; never use a real host configuration path.` : ""}`,
  ];
  return { args, env };
}

/** Run a bounded test session. Every submitted answer and pre-question file state is saved. */
export async function runSession(options: SessionOptions): Promise<SessionResult> {
  const cwd = path.resolve(options.cwd);
  const plugin = path.resolve(options.plugin);
  const brain = `${plugin}/scripts/brain.ts`;
  await mkdir(options.output, { recursive: true });
  const events: ObjectValue[] = [];
  const questions: string[] = [];
  const answers: string[] = [];
  let outcome = "incomplete";
  let costUsd: number | null = null;
  const started = performance.now();
  const invocation = sessionInvocation(options);
  const child = Bun.spawn(invocation.args, {
    cwd,
    stdin: "pipe",
    stdout: "pipe",
    stderr: "pipe",
    env: invocation.env,
  });
  const send = (value: ObjectValue) => child.stdin.write(`${JSON.stringify(value)}\n`);
  let drainTimer: ReturnType<typeof setTimeout> | undefined;
  const stop = (reason: string) => {
    if (outcome === "incomplete") {
      outcome = reason;
      send({ type: "control_request", request_id: "stop", request: { subtype: "interrupt" } });
      drainTimer = setTimeout(() => child.kill(), 5000);
    }
  };
  const deadline = setTimeout(
    () => stop("harness_timeout"),
    (options.timeoutSeconds ?? 480) * 1000,
  );
  const stderr = new Response(child.stderr).text();
  send({
    type: "control_request",
    request_id: "init",
    request: { subtype: "initialize", hooks: {}, sdkMcpServers: [] },
  });

  async function respond(event: ObjectValue): Promise<void> {
    if (outcome !== "incomplete") {
      return;
    }
    const request = object(event.request);
    const input = object(request.input);
    const tool = String(request.tool_name ?? "");
    let response: ObjectValue = {
      behavior: "deny",
      message: "This tool is outside the bounded evaluation fixture.",
    };
    if (tool === "AskUserQuestion") {
      const asked = Array.isArray(input.questions) ? input.questions : [];
      const question = String(object(asked[0]).question ?? "");
      questions.push(question);
      await snapshot(cwd, `${options.output}/question-${questions.length}-files.json`);
      const scripted = options.answers[answers.length];
      if (scripted === undefined) {
        stop("next_question_observed");
        return;
      }
      if (asked.length !== 1 || !new RegExp(scripted.question, "iu").test(question)) {
        stop("unexpected_question");
        return;
      }
      response = answerQuestion(input, scripted.answer);
      answers.push(scripted.answer);
    } else if (
      tool === "Bash" &&
      allowedCommand(String(input.command ?? ""), brain, options.commands, options.setup, cwd)
    ) {
      response = { behavior: "allow", updatedInput: input };
    } else if (
      ["Write", "Edit"].includes(tool) &&
      allowedArtifactWrite(input, cwd, options.setup)
    ) {
      response = { behavior: "allow", updatedInput: input };
    } else if (["Read", "Glob", "Grep"].includes(tool) && allowedRead(tool, input, cwd, plugin)) {
      response = { behavior: "allow", updatedInput: input };
    } else if (tool === "Skill" && allowedSkill(input, options.allowedSkills)) {
      response = { behavior: "allow", updatedInput: input };
    }
    const message = {
      type: "control_response",
      response: { subtype: "success", request_id: event.request_id, response },
    };
    await appendFile(`${options.output}/host.jsonl`, `${JSON.stringify(message)}\n`);
    send(message);
  }

  let buffer = "";
  const decoder = new TextDecoder();
  try {
    for await (const chunk of child.stdout) {
      buffer += decoder.decode(chunk, { stream: true });
      let at: number;
      while ((at = buffer.indexOf("\n")) >= 0) {
        const line = buffer.slice(0, at);
        buffer = buffer.slice(at + 1);
        if (!line.trim()) {
          continue;
        }
        const event = object(JSON.parse(line));
        events.push(event);
        await appendFile(`${options.output}/trace.jsonl`, `${line}\n`);
        if (String(event.subtype ?? "").startsWith("hook_")) {
          await appendFile(`${options.output}/hook-events.jsonl`, `${line}\n`);
        }
        if (event.type === "control_response" && object(event.response).request_id === "init") {
          if (object(event.response).subtype === "success") {
            send({ type: "user", message: { role: "user", content: options.prompt } });
          } else {
            stop("initialization_failed");
          }
        } else if (
          event.type === "control_request" &&
          object(event.request).subtype === "can_use_tool"
        ) {
          await respond(event);
        } else if (event.type === "result") {
          costUsd = typeof event.total_cost_usd === "number" ? event.total_cost_usd : null;
          if (outcome === "incomplete") {
            outcome = event.is_error === true ? "model_error" : "result_observed";
          }
          child.kill();
        }
      }
    }
  } finally {
    clearTimeout(deadline);
    clearTimeout(drainTimer);
    child.kill();
    await child.exited;
    await Bun.write(`${options.output}/stderr.txt`, await stderr);
    await snapshot(cwd, `${options.output}/final-files.json`);
  }
  const result = {
    outcome,
    questions,
    answers,
    events,
    durationSeconds: (performance.now() - started) / 1000,
    costUsd,
  };
  await Bun.write(`${options.output}/session.json`, JSON.stringify(result, null, 2));
  return result;
}

if (import.meta.main) {
  const [optionsPath] = process.argv.slice(2);
  if (optionsPath === undefined) {
    throw new Error("usage: bun scripts/evals/interview-driver.ts <session-options.json>");
  }
  const result = await runSession((await Bun.file(optionsPath).json()) as SessionOptions);
  console.log(
    JSON.stringify({
      outcome: result.outcome,
      questions: result.questions.length,
      durationSeconds: result.durationSeconds,
      costUsd: result.costUsd,
    }),
  );
}
