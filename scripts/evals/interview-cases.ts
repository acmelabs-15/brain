/** Fixtures for the real tool-driven interview evaluation. Answers belong only to the host. */
import { mkdir } from "node:fs/promises";

import type { ScriptedAnswer } from "./interview-driver";

export type InterviewCase = {
  id: number;
  name: string;
  prompt: string;
  rows: string[];
  answers: ScriptedAnswer[];
  intent?: string;
  destination?: string;
  files?: Record<string, string>;
  freshResume?: boolean;
  noRepo?: boolean;
  commands?: string[];
  expectations: string[];
};

const decision = (row: string, text: string) => `---
id: DEC-001
status: accepted
kind: decision
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-001#${row}
evidence: []
decided: 2026-11-05 by Sam
---
# DEC-001: Export format

${text}
`;

const record = (status: string, kind: string, row: string, body: string) => `---
id: RES-001
status: ${status}
kind: ${kind}
from: IDEA-001#${row}
date: 2026-11-05
---
# RES-001: Export preparation

${body}
`;

export const interviewCases: InterviewCase[] = [
  {
    id: 1,
    name: "answers-and-delegation",
    prompt: "/brain:interview-me Continue the export idea.",
    rows: [
      "| 01 | Export notes as CSV or Markdown? | interview | open | — | — |",
      "| 02 | Export on demand or once each day? | interview | open | 01 | — |",
      "| 03 | Keep the last export or every daily export? | interview | open | 02 | — |",
    ],
    answers: [
      {
        question: "CSV|Markdown|format",
        answer:
          "You choose CSV or Markdown. Both meet my needs. I delegate this format choice to you.",
      },
      { question: "daily|day|demand|schedule|often", answer: "Export once each day." },
    ],
    expectations: [
      "The format delegation is preserved and row 01 resolves before the schedule question.",
      "The daily export answer has a decision record before the retention question.",
      "Rows 01 and 02 each link to their own accepted record with the matching from field.",
      "The next question concerns retention; no unanswered row is resolved.",
    ],
  },
  {
    id: 2,
    name: "partial-answer-fresh-resume",
    prompt: "/brain:interview-me Continue the export idea.",
    rows: [
      "| 01 | Which note fields must exports preserve: edit dates and links? | interview | open | — | — |",
      "| 02 | Export on demand or once each day? | interview | open | 01 | — |",
    ],
    answers: [
      {
        question: "dates|fields|links",
        answer: "Preserve the edit dates. I have not decided whether links belong in the export.",
      },
    ],
    freshResume: true,
    expectations: [
      "The settled edit-date requirement and unresolved link choice are saved before the follow-up.",
      "Row 01 remains open while links are undecided.",
      "A fresh process with no prior chat asks only about the remaining link choice.",
      "No intent confirmation is written from a partial answer.",
    ],
  },
  {
    id: 3,
    name: "superseded-blocker-late-research",
    prompt:
      "/brain:interview-me Continue the export idea. The old research worker has now returned docs/research/RES-001-old-format.md.",
    rows: [
      "| 01 | Can the old XML exporter preserve links? | research | superseded by 03 | — | — |",
      "| 02 | Export on demand or once each day? | interview | open | 01 | — |",
      "| 03 | Use CSV or Markdown for the new export? | interview | resolved | — | DEC-001 |",
    ],
    files: {
      "docs/decisions/DEC-001-export-format.md": decision(
        "03",
        "Sam chose Markdown. The old XML exporter is outside this idea.",
      ),
      "docs/research/RES-001-old-format.md": record(
        "resolved",
        "research",
        "01",
        "## Question\nCan the old XML exporter preserve links?\n\n## Findings\n- The retired XML exporter preserved links. Source: src/old-export.ts:1, checked 2026-11-05.\n\n## Follow-ups\n- Should we extend the retired XML exporter?",
      ),
      "src/old-export.ts": "export const preservesLinks = true;\n",
    },
    answers: [],
    expectations: [
      "Row 01 stays superseded after its late research result arrives.",
      "Row 02's obsolete blocking link is repaired using the replacement decision.",
      "The first question concerns row 02; the interview does not enter Finish.",
      "The obsolete XML follow-up is not reopened as current work.",
    ],
  },
  {
    id: 4,
    name: "interrupted-do-row",
    prompt: "/brain:interview-me Continue the export idea after the interrupted setup.",
    rows: [
      "| 01 | Create the local test account needed to choose export ownership | task | in-progress | — | — |",
      "| 02 | Should exports belong to the account owner or each device? | interview | open | 01 | — |",
    ],
    files: {
      "docs/research/RES-001-account.md": record(
        "in-progress",
        "task",
        "01",
        "## Question\nCreate a test account so row 02 can choose ownership.\n\n## Findings\n- The setup command was started; inspect receipt.json before any retry. Source: create-resource.ts:1, checked 2026-11-05.\n\n## Progress\nCommand: bun create-resource.ts. It creates a new resource on every run. The process stopped before checking the receipt.\nNext: inspect receipt.json and verify that its state is ready.\n\n## Follow-ups\n- None.",
      ),
      "receipt.json": '{"created":1,"resource":"account-001","state":"ready"}\n',
      "create-resource.ts":
        'const receipt = await Bun.file("receipt.json").json(); await Bun.write("receipt.json", JSON.stringify({...receipt, created: receipt.created + 1}));\n',
    },
    commands: ["bun create-resource.ts"],
    answers: [],
    expectations: [
      "The agent inspects the existing receipt and keeps its created count at one.",
      "The original research record resolves without creating a replacement record.",
      "Row 01 resolves from the receipt before the ownership question is asked.",
    ],
  },
  {
    id: 5,
    name: "clear-approval",
    prompt: "/brain:interview-me Finish the export decision interview.",
    rows: ["| 01 | Export as CSV or Markdown? | interview | resolved | — | DEC-001 |"],
    destination:
      "An accepted decision about the export format. No spec or implementation is needed.",
    files: {
      "docs/decisions/DEC-001-export-format.md": decision(
        "01",
        "Sam chose Markdown for personal note exports.",
      ),
    },
    answers: [
      {
        question: "confirm|correct|want|intent|agree|approve|reflect|right",
        answer: "Sounds good, proceed with that decision.",
      },
    ],
    expectations: [
      "The clear approval confirms the presented intent once.",
      "The idea ends with status done and result DEC-001.",
      "The agent asks no second approval question just because the answer says sounds good.",
      "No spec or implementation is created.",
    ],
  },
  {
    id: 6,
    name: "no-repo-unavailable-research",
    prompt:
      "/brain:interview-me Help me decide a format for exporting my personal notes. This session has no repository. I need to know whether a private vendor portal supports Markdown import, but neither its contents nor access is available here. Keep that fact unresolved while we settle my own preferences. I want an interview, not a file or implementation.",
    rows: [],
    noRepo: true,
    answers: [
      {
        question: "format|Markdown|CSV|read|notes|use|goal|want",
        answer:
          "I want to read the exported notes without a special application. I prefer Markdown. Vendor import support remains unknown.",
      },
    ],
    expectations: [
      "The map and the partial answer remain in the conversation without numbered files.",
      "Unavailable vendor support remains unresolved and does not become an invented finding.",
      "The agent does not repeatedly restart unavailable research.",
      "The next question follows the user's remaining preference or missing source, without confirming unknown intent.",
    ],
  },
  {
    id: 7,
    name: "conditional-approval",
    prompt: "/brain:interview-me Finish the export decision interview.",
    rows: ["| 01 | Export as CSV or Markdown? | interview | resolved | — | DEC-001 |"],
    destination:
      "An accepted decision about the export format. No spec or implementation is needed.",
    files: {
      "docs/decisions/DEC-001-export-format.md": decision(
        "01",
        "Sam chose Markdown for personal note exports.",
      ),
    },
    answers: [
      {
        question: "confirm|correct|want|intent|agree|approve|reflect|right",
        answer:
          "Sounds good, provided the destination app can import every link. I do not know whether it can.",
      },
    ],
    expectations: [
      "The new condition about importing every link is saved in the idea.",
      "The idea stays in define with no current intent confirmation.",
      "The unknown import capability remains an open row or fog and keeps Finish closed.",
      "The next question or blocker concerns the missing destination-app information, not approval wording.",
    ],
  },
];

/** Each run receives its own fixture. Fresh-resume uses the same files and a new Claude process. */
export async function scaffoldInterview(
  c: InterviewCase,
  cwd: string,
  plugin: string,
): Promise<void> {
  await mkdir(cwd, { recursive: true });
  if (c.noRepo) {
    return;
  }
  const init = Bun.spawnSync(["git", "init", "--quiet"], { cwd });
  if (init.exitCode !== 0) {
    throw new Error(init.stderr.toString());
  }
  await mkdir(`${cwd}/docs/agents`, { recursive: true });
  await Bun.write(
    `${cwd}/docs/agents/workspace.md`,
    await Bun.file(`${plugin}/skills/setup-brain/workspace.md`).text(),
  );
  await Bun.write(
    `${cwd}/docs/agents/domain.md`,
    "# Domain docs\nUse GLOSSARY.md when it exists. Decision records live in docs/decisions.\n",
  );
  await Bun.write(
    `${cwd}/docs/agents/capabilities.md`,
    "# Capabilities\nBun 1.4.x. No library skills or servers are needed.\n",
  );
  await Bun.write(
    `${cwd}/README.md`,
    "# Notes export\nSam is deciding how personal notes are exported. This is an interview fixture.\n",
  );
  const intent =
    c.intent ??
    "- Outcome: choose how Sam exports personal notes.\n- User: Sam alone.\n- Why now: Sam needs an export before changing note applications.\n- Success: the export can be read outside the current application.\n- Constraint: the export works locally, without a new service.\n- Out of scope: implementing export or changing the application.";
  await mkdir(`${cwd}/docs/ideas`, { recursive: true });
  await Bun.write(
    `${cwd}/docs/ideas/IDEA-001-export.md`,
    `---\nid: IDEA-001\nstatus: define\n---\n# IDEA-001: Export notes\n\n## Intent\n${intent}\n\n## Destination\n${c.destination ?? "A spec for exporting personal notes; this interview settles the remaining choices."}\n\n## Notes\nLoad ask-user-question, domain-modeling and context-engineering each session. The user is Sam.\n\n## Map\n| # | Question | Type | Status | Blocked by | Result |\n|---|---|---|---|---|---|\n${c.rows.join("\n")}\n\n## Not yet specified\nNone.\n\n## Out of scope\nImplementation.\n`,
  );
  for (const [file, content] of Object.entries(c.files ?? {})) {
    await mkdir(`${cwd}/${file.split("/").slice(0, -1).join("/")}`, { recursive: true });
    await Bun.write(`${cwd}/${file}`, content);
  }
}
