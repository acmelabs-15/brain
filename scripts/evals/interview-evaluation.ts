/** Paired behavioral runs. Usage is documented in docs/evals/interview-recovery.md. */
import { mkdir } from "node:fs/promises";
import path from "node:path";

import { interviewCases, scaffoldInterview } from "./interview-cases";
import type { InterviewCase } from "./interview-cases";
import { runSession } from "./interview-driver";
import type { SessionResult } from "./interview-driver";

export type EvaluationOptions = {
  baseline: string;
  candidate: string;
  output: string;
  cases?: string[];
  timeoutSeconds?: number;
  maxCostUsd?: number;
};

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
  c: InterviewCase,
  plugin: string,
  output: string,
  options: EvaluationOptions,
): Promise<void> {
  const cwd = `${output}/fixture`;
  await scaffoldInterview(c, cwd, plugin);
  const sessions: SessionResult[] = [];
  const first = await runSession({
    cwd,
    plugin,
    output: `${output}/session-1`,
    prompt: c.prompt,
    answers: c.answers,
    commands: c.commands,
    timeoutSeconds: options.timeoutSeconds,
    maxCostUsd: options.maxCostUsd,
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
  await Bun.write(
    `${output}/timing.json`,
    JSON.stringify(
      {
        total_duration_seconds: sessions.reduce((sum, session) => sum + session.durationSeconds, 0),
        total_cost_usd: knownCost
          ? sessions.reduce((sum, session) => sum + (session.costUsd ?? 0), 0)
          : null,
        cost_complete: knownCost,
        sessions: sessions.map(({ outcome, costUsd, durationSeconds }) => ({
          outcome,
          costUsd,
          durationSeconds,
        })),
      },
      null,
      2,
    ),
  );
}

/** Launch each old/new pair together. Pair-level sequencing bounds concurrency to two. */
export async function runEvaluation(options: EvaluationOptions): Promise<void> {
  const selected = interviewCases.filter(
    (c) => options.cases === undefined || options.cases.includes(c.name),
  );
  if (selected.length === 0) {
    throw new Error("no interview cases selected");
  }
  const output = path.resolve(options.output);
  await mkdir(output, { recursive: true });
  await Bun.write(
    `${output}/evals.json`,
    JSON.stringify(
      {
        skill_name: "interview-me",
        evals: selected.map((c) => ({
          id: c.id,
          prompt: c.prompt,
          expected_output: c.expectations.join(" "),
          assertions: c.expectations,
          files: [],
        })),
      },
      null,
      2,
    ),
  );
  for (const c of selected) {
    const folder = `${output}/eval-${c.id}-${c.name}`;
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
