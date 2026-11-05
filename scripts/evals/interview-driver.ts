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
};
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

/** The test host approves only its own local CLI commands, without shell composition. */
export function allowedCommand(command: string, brain: string, commands: string[] = []): boolean {
  if (/[\n\r;$`&|<>]/u.test(command)) {
    return false;
  }
  if (
    commands.includes(command) ||
    /^(?:pwd|bun --version|git status --short|git branch --show-current)$/u.test(command)
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
export function allowedArtifactWrite(input: ObjectValue, cwd: string): boolean {
  const { file_path: file } = input;
  if (typeof file !== "string" || file.startsWith("~") || /(?:^|\/)\.\.(?:\/|$)/u.test(file)) {
    return false;
  }
  const absolute = path.resolve(cwd, file);
  const relative = path.relative(path.resolve(cwd), absolute);
  if (!artifactPath(relative)) {
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
    return artifactPath(path.relative(root, canonical(absolute)));
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
  const child = Bun.spawn(
    [
      "claude",
      "--print",
      "--input-format",
      "stream-json",
      "--output-format",
      "stream-json",
      "--verbose",
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
      '{"disableAllHooks":true,"autoMemoryEnabled":false,"permissions":{"ask":["Read","Glob","Grep","Write","Edit","Bash"]}}',
      "--tools",
      "Read,Write,Edit,Glob,Grep,Bash,Skill,AskUserQuestion",
      "--plugin-dir",
      plugin,
      "--add-dir",
      plugin,
      "--max-budget-usd",
      String(options.maxCostUsd ?? 2),
      "--no-session-persistence",
      "--append-system-prompt",
      "This is a controlled interview evaluation. The host supplies a live scripted user through AskUserQuestion. " +
        "Use the loaded skill normally. Work only in the fixture folder. " +
        `The brain CLI is bun "${brain}". The user is Sam.`,
    ],
    {
      cwd,
      stdin: "pipe",
      stdout: "pipe",
      stderr: "pipe",
      env: { ...process.env, GIT_CEILING_DIRECTORIES: cwd },
    },
  );
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
      allowedCommand(String(input.command ?? ""), brain, options.commands)
    ) {
      response = { behavior: "allow", updatedInput: input };
    } else if (["Write", "Edit"].includes(tool) && allowedArtifactWrite(input, cwd)) {
      response = { behavior: "allow", updatedInput: input };
    } else if (["Read", "Glob", "Grep"].includes(tool) && allowedRead(tool, input, cwd, plugin)) {
      response = { behavior: "allow", updatedInput: input };
    } else if (tool === "Skill") {
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
