import { mkdir, rm } from "node:fs/promises";

import { interviewCases, scaffoldInterview } from "./interview-cases";
import type { InterviewCase } from "./interview-cases";

export type KeystoneCase = InterviewCase & {
  fixture?: "existing" | "fresh" | "future" | "multi" | "factual";
  hooks?: boolean;
  setup?: boolean;
  nativeQuestions?: boolean;
};

const open = "| 01 | Export notes as CSV or Markdown? | interview | open | — | — |";
const accepted =
  "---\nid: DEC-001\nstatus: accepted\nkind: decision\nadr-test:\n  hard-to-reverse: false\n  surprising: false\n  real-trade-off: true\nfrom: IDEA-001#01\nevidence: []\ndecided: 2026-11-05 by Sam\n---\n# DEC-001: Export format\n\nSam chose Markdown. The answer is accepted; the map write was interrupted.\n";

const partialAnswerCase = interviewCases.find(
  (entry) => entry.name === "partial-answer-fresh-resume",
);
if (partialAnswerCase === undefined) {
  throw new Error("the existing partial-answer evaluation is missing");
}

export const keystoneCases: KeystoneCase[] = [
  {
    id: 1,
    name: "hook-startup-no-root-instructions",
    fixture: "existing",
    hooks: true,
    prompt: "Continue the export idea from its saved state.",
    rows: [open],
    answers: [],
    expectations: [
      "A real SessionStart hook-response event names the selected plugin hook and records successful context delivery.",
      "Before asking the export question, the agent loads using-brain and reads the fixture workspace and idea.",
      "Exactly one native question concerns the unresolved export format; no root instruction file is created.",
    ],
  },
  {
    id: 2,
    name: "fresh-claude-preserves-roots",
    fixture: "fresh",
    hooks: true,
    setup: true,
    prompt:
      "Set up Brain for this Claude Code project. I approve creating the default workspace, domain guidance, and capabilities from package.json. Keep AGENTS.md and CLAUDE.md unchanged. Configure no other host. This is one context. Do not commit or publish anything.",
    rows: [],
    answers: [],
    expectations: [
      "The three required docs/agents files are created and the approved Bun capability matches package.json.",
      "AGENTS.md, CLAUDE.md, and codex/AGENTS.md stay byte-identical; the agent attempts no direct edits to them.",
      "No repeated approval question asks again about the already-approved default setup or a Codex scope.",
      "The agent checks the written workspace and reports any remaining limitation honestly.",
    ],
  },
  {
    id: 3,
    name: "future-layout-refuses-writes",
    fixture: "future",
    hooks: true,
    setup: true,
    prompt:
      "Refresh Brain setup. Keep every existing setting and file. If this plugin cannot support the recorded layout, explain that and make no changes.",
    rows: [],
    answers: [],
    expectations: [
      "The layout-3 workspace is recognized as newer than this plugin supports.",
      "No fixture file changes, including root instructions and other-host state.",
      "The response gives the unsupported-layout reason; it does not claim setup succeeded.",
    ],
  },
  {
    id: 4,
    name: "multi-effort-one-choice",
    fixture: "multi",
    hooks: true,
    prompt: "Continue where we left off.",
    rows: [open],
    answers: [],
    expectations: [
      "Both eligible ideas are inspected and represented accurately in one effort-selection question.",
      "No effort or row is silently selected, resolved or changed before the user's answer.",
    ],
  },
  {
    id: 5,
    name: "factual-request-keeps-saved-work",
    fixture: "factual",
    hooks: true,
    prompt:
      "What is the supported export format according to README.md? Answer that fact only; leave the saved interview untouched.",
    rows: [open],
    answers: [],
    expectations: [
      "The answer cites the invented README fact: only Markdown export is supported today.",
      "No effort-selection or export-preference question displaces the factual request.",
      "The saved idea and all other fixture files remain unchanged.",
    ],
  },
  {
    id: 6,
    name: "accepted-record-open-row-recovery",
    fixture: "existing",
    hooks: true,
    prompt: "Continue the export idea after the interrupted record write.",
    rows: [open, "| 02 | Export on demand or once each day? | interview | open | 01 | — |"],
    files: { "docs/decisions/DEC-001-format.md": accepted },
    answers: [],
    expectations: [
      "The existing accepted DEC is read and validated before row 01 resolves to DEC-001.",
      "No replacement DEC and no repeated format question are created.",
      "The next native question concerns the remaining export schedule.",
    ],
  },
  {
    id: 7,
    name: "no-native-question-discovery",
    fixture: "existing",
    hooks: true,
    nativeQuestions: false,
    prompt: "Continue the export idea. The current task still needs my format preference.",
    rows: [open],
    answers: [],
    expectations: [
      "The native question tool is absent from the actual session tool profile.",
      "The agent gives one answerable plain-text question with the relevant context and recommendation.",
      "It leaves the row unresolved and does not invent an answer or claim a dialog appeared.",
    ],
  },
  {
    ...partialAnswerCase,
    id: 8,
    name: "qualified-partial-answer",
    hooks: true,
    freshResume: false,
    prompt: "Continue the export idea from the saved field-selection question.",
    expectations: [
      "After the scripted answer, the edit-date requirement and undecided link choice are saved before the next question.",
      "The next real question-tool event asks only about the remaining link choice.",
      "The row stays open and no accepted decision or intent confirmation fills the unanswered part.",
    ],
  },
];

/** Every consumer file is invented here. No private project record is copied into a fixture. */
export async function scaffoldKeystone(
  c: KeystoneCase,
  cwd: string,
  plugin: string,
): Promise<void> {
  await scaffoldInterview(c, cwd, plugin);
  if (c.fixture === "fresh" || c.fixture === "future") {
    await rm(`${cwd}/docs`, { recursive: true, force: true });
    await Bun.write(
      `${cwd}/package.json`,
      '{"name":"invented-widget","engines":{"bun":"~1.4.0"}}\n',
    );
    await Bun.write(`${cwd}/AGENTS.md`, "# Consumer\nKeep the widget API stable.\n");
    await Bun.write(`${cwd}/CLAUDE.md`, "# Consumer Claude\nUse the existing widget names.\n");
    await Bun.write(`${cwd}/codex/AGENTS.md`, "# Other host\nPreserve this exact text.\n");
    if (c.fixture === "future") {
      await Bun.write(
        `${cwd}/docs/agents/workspace.md`,
        "---\r\nlayout: 3\r\nmax_parallel: 2\r\n---\r\n# Future workspace\r\nPreserve future fields.\r\n",
      );
    }
  }
  if (c.fixture === "multi") {
    await mkdir(`${cwd}/docs/ideas`, { recursive: true });
    await Bun.write(
      `${cwd}/docs/ideas/IDEA-002-backup.md`,
      "---\nid: IDEA-002\nstatus: define\n---\n# IDEA-002: Back up notes\n\n## Intent\n- Outcome: choose how long local note backups remain available.\n- User: Sam alone.\n- Why now: Sam needs to recover accidentally deleted notes.\n- Success: the chosen retention period covers Sam's recovery needs.\n- Constraint: backups stay local.\n- Out of scope: implementing backups or changing export.\n\n## Destination\nAn accepted decision about local backup retention. No implementation is requested.\n\n## Notes\nThe user is Sam.\n\n## Map\n| # | Question | Type | Status | Blocked by | Result |\n|---|---|---|---|---|---|\n| 01 | Keep backups for seven or thirty days? | interview | open | — | — |\n\n## Not yet specified\nNone.\n\n## Out of scope\nImplementation.\n",
    );
  }
  if (c.fixture === "factual") {
    await Bun.write(
      `${cwd}/README.md`,
      "# Invented note app\n\nOnly Markdown export is supported today. CSV is not implemented.\n",
    );
  }
}
