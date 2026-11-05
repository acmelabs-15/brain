/** Paired behavioral runs. Usage is documented in docs/evals/interview-recovery.md. */
import { mkdir, rm } from "node:fs/promises";
import path from "node:path";

import { interviewCases, scaffoldInterview } from "./interview-cases";
import { runSession } from "./interview-driver";
import type { SessionResult } from "./interview-driver";
import { keystoneCases, scaffoldKeystone } from "./keystone-cases";
import type { KeystoneCase } from "./keystone-cases";
import { verifySnapshot, verifySnapshotSource } from "./keystone-snapshot";

export type EvaluationOptions = {
  baseline: string;
  candidate: string;
  output: string;
  cases?: string[];
  timeoutSeconds?: number;
  maxCostUsd?: number;
  suite?: "interview" | "keystone";
  approved?: boolean;
  budgetLedger?: string;
  totalBudgetUsd?: number;
  candidateSource?: string;
};

type BudgetState = {
  reservedUsd: number;
  reservations: { amount: number; at: string; kind?: string }[];
  blocked?: boolean;
  observations?: unknown[];
  blockedReason?: string;
};

function validBudget(state: BudgetState): boolean {
  if (
    !Number.isFinite(state.reservedUsd) ||
    state.reservedUsd < 0 ||
    !Array.isArray(state.reservations)
  ) {
    return false;
  }
  if (state.reservations.some((entry) => !Number.isFinite(entry?.amount) || entry.amount <= 0)) {
    return false;
  }
  const total = state.reservations.reduce((sum, entry) => sum + entry.amount, 0);
  return Math.abs(total - state.reservedUsd) < 1e-9;
}

/** Reserve configured process thresholds; observed overruns block later pairs and increase the ledger. */
export async function reserveBudget(file: string, amount: number, maximum: number): Promise<void> {
  if (!(amount > 0 && maximum > 0 && maximum <= 32 && Number.isFinite(amount))) {
    throw new Error("invalid bounded evaluation budget");
  }
  await mkdir(path.dirname(file), { recursive: true });
  const lock = `${file}.lock`;
  await mkdir(lock);
  try {
    const ledger = Bun.file(file);
    const state = (await ledger.exists())
      ? ((await ledger.json()) as BudgetState)
      : { reservedUsd: 0, reservations: [] };
    if (state.blocked === true || !validBudget(state) || state.reservedUsd + amount > maximum) {
      throw new Error("evaluation budget exhausted or ledger invalid");
    }
    state.reservedUsd += amount;
    state.reservations.push({ at: new Date().toISOString(), amount });
    await Bun.write(file, JSON.stringify(state, null, 2));
  } finally {
    await rm(lock, { recursive: true });
  }
}

/** CLI spend limits are accrued-cost thresholds; stop if an arm exceeds its reservation or reports no cost. */
export async function settleBudget(
  file: string,
  costs: (number | null)[],
  perArm: number,
): Promise<void> {
  const lock = `${file}.lock`;
  await mkdir(lock);
  try {
    const state = (await Bun.file(file).json()) as BudgetState;
    if (!validBudget(state)) {
      throw new Error("evaluation budget ledger invalid");
    }
    const unknown = costs.some((cost) => cost === null || !Number.isFinite(cost) || cost < 0);
    const overrun = costs.some((cost) => cost !== null && cost > perArm);
    const extra = costs.reduce<number>(
      (total, cost) =>
        total + (cost === null || !Number.isFinite(cost) ? 0 : Math.max(0, cost - perArm)),
      0,
    );
    if (extra > 0) {
      state.reservedUsd += extra;
      state.reservations.push({
        amount: extra,
        at: new Date().toISOString(),
        kind: "observed-overrun",
      });
    }
    state.observations = [
      ...(state.observations ?? []),
      { at: new Date().toISOString(), costs, perArm },
    ];
    if (unknown || overrun) {
      state.blocked = true;
      state.blockedReason = unknown ? "cost_unreported" : "process_threshold_exceeded";
    }
    await Bun.write(file, JSON.stringify(state, null, 2));
    if (state.blocked) {
      throw new Error(`stop further paid pairs: ${state.blockedReason}`);
    }
  } finally {
    await rm(lock, { recursive: true });
  }
}

function transcript(sessions: SessionResult[]): string {
  return sessions
    .map((session, index) => {
      const lines = [`# Session ${index + 1}`, `Outcome: ${session.outcome}`];
      for (const [at, question] of session.questions.entries()) {
        lines.push(`\n## Question ${at + 1}\n${question}`);
        const answer = session.answers[at];
        lines.push(
          answer === undefined
            ? "\nNo answer submitted; the test stops at this question."
            : `\nScripted user: ${answer}`,
        );
      }
      const text = session.events.flatMap((event) => {
        const message = event.message as
          | { content?: { type: string; text?: string }[] }
          | undefined;
        return event.type === "assistant" && Array.isArray(message?.content)
          ? message.content.filter((part) => part.type === "text").map((part) => part.text ?? "")
          : [];
      });
      lines.push(`\n## Agent messages\n${text.join("\n\n")}`);
      return lines.join("\n");
    })
    .join("\n\n");
}

async function runCase(
  c: KeystoneCase,
  plugin: string,
  output: string,
  options: EvaluationOptions,
): Promise<{ costUsd: number | null }> {
  const cwd = `${output}/fixture`;
  await (options.suite === "keystone"
    ? scaffoldKeystone(c, cwd, plugin)
    : scaffoldInterview(c, cwd, plugin));
  const initial = `${output}/initial-files.json`;
  // The same evidence shape is used for before/after grading of read-only cases.
  const initialFiles: Record<string, string> = {};
  for await (const file of new Bun.Glob("**/*").scan({ cwd, onlyFiles: true, dot: false })) {
    if (/\.(?:md|json|ts)$/u.test(file)) {
      initialFiles[file] = await Bun.file(`${cwd}/${file}`).text();
    }
  }
  await Bun.write(initial, JSON.stringify(initialFiles, null, 2));
  const sessions: SessionResult[] = [];
  const first = await runSession({
    cwd,
    plugin,
    output: `${output}/session-1`,
    prompt: c.prompt,
    answers: c.answers,
    commands: c.commands,
    timeoutSeconds: options.timeoutSeconds,
    maxCostUsd: options.maxCostUsd ?? (options.suite === "keystone" ? 1.5 : 2),
    hooks: c.hooks,
    nativeQuestions: c.nativeQuestions,
    setup: c.setup,
  });
  sessions.push(first);
  if (c.freshResume && first.outcome === "next_question_observed") {
    sessions.push(
      await runSession({
        cwd,
        plugin,
        output: `${output}/session-2`,
        prompt: "/brain:interview-me Continue the export idea where we left off.",
        answers: [],
        timeoutSeconds: options.timeoutSeconds,
        maxCostUsd: options.maxCostUsd,
      }),
    );
  }
  await mkdir(`${output}/outputs`, { recursive: true });
  await Bun.write(`${output}/outputs/transcript.md`, transcript(sessions));
  const last = sessions.at(-1);
  if (last !== undefined) {
    await Bun.write(
      `${output}/outputs/files.json`,
      await Bun.file(`${output}/session-${sessions.length}/final-files.json`).text(),
    );
  }
  const knownCost = sessions.every((session) => session.costUsd !== null);
  const costUsd = knownCost
    ? sessions.reduce((sum, session) => sum + (session.costUsd ?? 0), 0)
    : null;
  await Bun.write(
    `${output}/timing.json`,
    JSON.stringify(
      {
        total_duration_seconds: sessions.reduce((sum, session) => sum + session.durationSeconds, 0),
        total_cost_usd: costUsd,
        cost_complete: knownCost,
        sessions: sessions.map(({ outcome, costUsd: sessionCostUsd, durationSeconds }) => ({
          outcome,
          costUsd: sessionCostUsd,
          durationSeconds,
        })),
      },
      null,
      2,
    ),
  );
  return { costUsd };
}

function requireBoundedApproval(options: EvaluationOptions): void {
  if (
    options.suite === "keystone" &&
    (options.approved !== true ||
      !options.budgetLedger ||
      (options.maxCostUsd ?? 1.5) > 1.5 ||
      (options.timeoutSeconds ?? 480) > 480)
  ) {
    throw new Error(
      "keystone runs need explicit approval, one shared budget ledger, at most $1.50 and 480 seconds per process",
    );
  }
}

/** Launch each old/new pair together. Pair-level sequencing bounds concurrency to two. */
export async function runEvaluation(options: EvaluationOptions): Promise<void> {
  requireBoundedApproval(options);
  if (options.suite === "keystone") {
    await Promise.all([
      verifySnapshot(path.resolve(options.baseline)),
      verifySnapshot(path.resolve(options.candidate)),
    ]);
    if (options.candidateSource) {
      await verifySnapshotSource(
        path.resolve(options.candidateSource),
        path.resolve(options.candidate),
      );
    }
  }
  const selected = (options.suite === "keystone" ? keystoneCases : interviewCases).filter(
    (c) => options.cases === undefined || options.cases.includes(c.name),
  );
  if (selected.length === 0) {
    throw new Error("no interview cases selected");
  }
  if (options.cases?.some((name) => !selected.some((c) => c.name === name))) {
    throw new Error("an evaluation case name is unknown");
  }
  const output = path.resolve(options.output);
  await mkdir(output, { recursive: true });
  await Bun.write(
    `${output}/evals.json`,
    JSON.stringify(
      {
        skill_name: options.suite === "keystone" ? "brain-keystones" : "interview-me",
        evals: (options.suite === "keystone" ? keystoneCases : selected).map((c) => ({
          id: c.id,
          prompt: c.prompt,
          expected_output: c.expectations.join(" "),
          expectations: c.expectations,
          files: [],
        })),
      },
      null,
      2,
    ),
  );
  for (const c of selected) {
    const folder = `${output}/eval-${c.id}-${c.name}`;
    if (await Bun.file(`${folder}/eval_metadata.json`).exists()) {
      throw new Error(`evaluation output already exists: ${folder}`);
    }
    if (options.suite === "keystone") {
      await reserveBudget(
        options.budgetLedger as string,
        2 * (options.maxCostUsd ?? 1.5),
        options.totalBudgetUsd ?? 32,
      );
    }
    await mkdir(folder, { recursive: true });
    await Bun.write(
      `${folder}/eval_metadata.json`,
      JSON.stringify(
        { eval_id: c.id, eval_name: c.name, prompt: c.prompt, assertions: c.expectations },
        null,
        2,
      ),
    );
    console.log(`Starting old/new pair: ${c.name}`);
    const results = await Promise.allSettled([
      runCase(c, path.resolve(options.candidate), `${folder}/with_skill`, options),
      runCase(c, path.resolve(options.baseline), `${folder}/old_skill`, options),
    ]);
    for (const [index, result] of results.entries()) {
      if (result.status === "rejected") {
        const arm = index === 0 ? "with_skill" : "old_skill";
        await Bun.write(`${folder}/${arm}/harness-error.txt`, String(result.reason));
        console.error(`${c.name}/${arm}: ${String(result.reason)}`);
      }
    }
    if (options.suite === "keystone") {
      await settleBudget(
        options.budgetLedger as string,
        results.map((result) => (result.status === "fulfilled" ? result.value.costUsd : null)),
        options.maxCostUsd ?? 1.5,
      );
    }
    console.log(`Finished old/new pair: ${c.name}`);
  }
}

if (import.meta.main) {
  const [optionsPath] = process.argv.slice(2);
  if (optionsPath === undefined) {
    throw new Error("usage: bun scripts/evals/interview-evaluation.ts <evaluation-options.json>");
  }
  await runEvaluation((await Bun.file(optionsPath).json()) as EvaluationOptions);
}
