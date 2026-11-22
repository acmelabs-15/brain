---
id: RES-091
status: resolved # in-progress | resolved
kind: research
from: IDEA-016#23
date: 2026-11-21
outcome: answered
---
# RES-091: How the protocol, the router and the host deliveries carry status and waits

## Question
How do the protocol, the router, the host deliveries and the lifecycle checks carry status and waits into every session and host?

## Answer
Sufficient answer: with a source per claim, the record states what the protocol, the router and the workspace document say about status and waits, which generated files repeat which source text and the command that renders them, what the lifecycle checks pin, what the manifests and the CI workflows run, the files to edit and the files that are regenerated for a change to status or wait text, and every literal status value or wait word in these texts. It also states what was not established and names contrary evidence.

The evidence supports the full answer. All repo sources are files of this worktree at commit dfcab49b, read on 2026-11-21. Four official host pages were read on the same day. Three independent checks read the first version of this record; the section "Checks" says what each one found and what changed.

### Short answer
- The protocol holds no stored status value. Its Task end section says where status and waits go: the row's status and result link, red items and user waits in the active effort's rows and records, and a user-run step as a do row.
- The router (using-brain) holds no stored status value either. It routes by the state of the work and gives state reporting and effort selection to the workspace document.
- The workspace document is the one current text of this topic that names stored values. It names seven: `define`, `specced`, `done` and `parked` for an idea, `open`, `in-progress` and `resolved` for a row. It also defines the five lines of the status report.
- These texts leave out stored values that the code accepts: `superseded by NN` for a row, the three values of a decision record, the two status values of a research record and its outcome `answered`. A spec has no status field. A session learns these values from the templates, the skills and `brain check` (rows 17, 18 and 21).
- One renderer copies the protocol into three files and the plain-talk text into five. Each host gets the same protocol text by another path. Only Claude Code gets the computed status report at session start.
- Three kinds of session get less. A session with no repository (conversation mode) has no rows, no Session state and no CLI. A sub-agent gets the plain-talk block and its brief, and the build commands and the research brief do not name the protocol. A Claude Code session whose hook fails gets no Brain start text.
- The lifecycle checks pin words, not values: `Stage` for the lifecycle, `Phase` for a plan, 18 glossary terms, the six stage names, and a set of exact sentences in the protocol, the router and the workspace template. No test in `scripts/lifecycle` pins a sentence of Task end. One test outside that folder does: `scripts/setup/__tests__/overlap.test.ts` reads the shipped protocol.
- Among the three workflows, only the release workflow runs the workspace check (`brain check` on this repo's own records). The CI workflow for pull requests does not run it. Task end step 3 and the maintainer contract tell the agent to run it by hand.

### What the protocol says
The protocol source is `protocol/PROTOCOL.md`, 55 lines and 3,950 characters.

| Section | Lines | What it says about status and waits |
|---|---|---|
| Session start | 3-9 | Follow using-brain's Start once; continue its unfinished step when already active. Start restores the workspace document, Session state, project rules and current records. User scope and handoffs outrank "stale report suggestions". |
| Work through brain | 11-16 | Ask only about an unresolved user decision or missing permission, one question per call. Reuse settled requirements. Create numbered files only through `brain new-doc`. Give the user the command of a user-only skill. |
| Capability check | 18-33 | Four triggers: the start of a task and each stage change (define, plan, build, verify, review, ship); before a sub-agent starts; after a compaction or a long run of tool calls; before a guess at a convention. A server that does not answer stops the work that depends on it. Nothing is written to a row or record. |
| Sub-agent briefs | 35-45 | The brief names a progress file and a result file (`T10-result.md`). A sub-agent stops and reports when a server fails. It returns user questions in its result file. A task sub-agent replies pass or fail. A research row's sub-agent replies with its RES path only. |
| Task end | 47-55 | Five steps, below. |

The five steps of Task end, for work tracked in the workspace:

1. Update the row in the map or in `tasks/plan.md`: its status and result link. Only the main session writes rows.
2. Put research in its RES file and a decision in its DEC file. Update the spec when its facts change.
3. Run `brain check`. Fix each finding, or name it as red in the next step.
4. Keep the next action, red items and user waits in the active effort's rows and records. A user-run step is a do row with its exact command, blocking rows that need it. Run `brain status`.
5. Record what is committed, pushed or waiting for approval. Stage files by name. Use the installed `references/brain/commit-contract.md` for slices, task results and serialized integration.

Five limits of this text bear on the decide rows:

- Task end covers rows and records. It does not name an idea's `status:` field, a spec's status, a phase, or a wait on another effort.
- Step 1 says "its status" and names no value. The values come from the schema and the templates (row 17).
- Step 5 names a place for the commit only. It points to the commit contract, which puts the implementation commit in the plan row and in a separate state commit (`references/brain/commit-contract.md` line 9; row 22 owns that file). No text names a file or field for "pushed" or "waiting for approval".
- Step 4 says user waits live in rows and records. The status report's "Waiting on the user" line holds only decide rows on the frontier, and decide rows exist only in a map. So the line never shows a do row that the user must run. It never shows a plan row either: a plan has only the types `task` and `checkpoint`, and a checkpoint row stops the build for the user's review. For a spec in build the line is always "none".
- A red item has no stored form. Step 3 says "name it as red" and step 4 says "red items". The Red line of the report is worked out from three inputs: a missing workspace file, the count of check findings, and blocked research records. No template holds a field for a red item.

### What the router and the workspace document say
The router is `skills/using-brain/SKILL.md`. It owns the choice of the owning skill. It says the workspace owns state reporting and effort selection, and each workflow owns its recovery and completion (line 8).

- Start (lines 12-21) keeps the user's task, named effort, handoff, conditions and pending question. A computed report "does not override a newer instruction or supply approval". Start runs Session state once and is complete when the next action has an owner or the "exact blocker is known".
- Conversation mode (lines 16 and 82): with no project repository, repository setup, numbered files and the CLI do not apply, and "the map lives in the conversation". None of the carriers of this record applies there. A test pins the second sentence.
- The discovery tree (lines 27-45) routes by state: resume an idea, resume an approved spec task, a spec that needs tasks, an authorized release, a remaining user decision.
- Continued work (line 49): a named effort outranks branch-based selection. Several eligible efforts need one question. A status question keeps the next action and the pending question.
- Durable state (lines 78-82): interview-me owns the map, the frontier and the fog. The main session writes map and plan rows; research workers write their own records.
- Stages: the Lifecycle Sequence (lines 94-101) and the Commands table (lines 105-112) list six stages. The Quick Reference (lines 120-153) uses eight stage cells: Setup, the six stages, and Any.
- Status (line 116): "Status is a workspace procedure, not a skill."

The workspace document is `docs/agents/workspace.md`. It is byte-identical to the template `skills/setup-brain/workspace.md`. No automated check keeps the two equal (see Findings).

- Session state (lines 26-47) is a four-step procedure: get the report, show the five lines, give each problem a next action, return the report and the selected effort.
- The five lines (lines 35-41):

| Line | Meaning in the text |
|---|---|
| Stage | each reported effort and its stage from current rows: define, build or finished; "no active work" when none is selected |
| Last step | the highest-numbered resolved row and its result |
| Next step | the first frontier row, then rows in progress; a linked partial or blocked research record names that outcome |
| Red | missing workspace setup, workspace-check findings, blocked research records |
| Waiting on the user | decide rows on the frontier |

- Exceptions to the five lines. On a layout-1 repo the report is one line that tells the user to run setup-brain (line 32; `scripts/workspace/status.ts` 282-292). When the branch names no effort, the report shows every unfinished effort (line 31). "No active work" prints only when no effort is unfinished and the branch names none (`status.ts` 147-153 and 248-251); line 37 words this more loosely.
- The active effort (line 67): an idea with `status: define`, or a spec whose plan has a row that is `open` or `in-progress`. An idea with `status: specced` or `done` is finished. A `parked` idea "waits until the user names it".
- The selection order (lines 69-72): the effort the user or the handoff names, the git branch, the only effort that is not finished. Step 4 has a condition: ask the user "when continuing work requires a choice", and "a concrete new task does not require selecting an unrelated old effort first".
- Resume (lines 76-79): the frontier is every `open` row whose `Blocked by` rows are all `resolved`. A specced idea resumes through its spec. A done idea's `result:` names a DEC or a commit SHA.
- Row citation (line 59): rows have two-digit numbers local to their file, and a row is cited across files as `IDEA-004#03`.

The code agrees with this text on four points (row 19 owns the depth): the stage words and the five labels in `scripts/workspace/status.ts`, the rule for an unfinished idea with a known value in `scripts/workspace/effort.ts`, and the frontier in `scripts/workspace/map.ts`. It differs on a parked idea and on a superseded row; see Contrary evidence.

### How each host gets the text

| Session | Protocol | Plain talk | Status report at session start | Workspace document |
|---|---|---|---|---|
| Claude Code | the SessionStart hook names the path of `protocol/PROTOCOL.md` and tells the agent to read it in full | `output-styles/talk-plain.md` | yes: the hook adds the lines of `brain status --json` | the consumer's own copy, from setup-brain; the plugin's template when the file or its Session state section is missing |
| Gemini CLI | `GEMINI.md` lines 40-98, the extension's context file | `GEMINI.md` lines 1-38 (title at 1, body at 3-38) | no: the agent runs `brain status` in Session state | the same |
| Antigravity | `rules/protocol.md`, `trigger: always_on` | `rules/talk-plain.md` | no | the same |
| Codex | the `brain:protocol` block that setup-brain writes into the chosen `AGENTS.md`; no protocol text when the user selects no Codex scope | the `brain:plain-talk` block in the same file | no | the same |
| A sub-agent, on each host | only what its brief repeats; the build commands and the research brief do not name the protocol | the plain-talk block, copied into the prompt by the dispatching text | no | not read unless the brief says so |
| Conversation mode, no repository | the host's delivery as above | the same | none: no CLI | none: "the map lives in the conversation" |

Failure cases on Claude Code:

- Bun must be on `PATH` before the hook runs. "A failed hook does not load Brain's startup instructions" (`docs/install/prerequisites.md` 16-20). The session then gets no protocol path and no report.
- The status part can be one failure line in place of the report: `brain status` failed to start, failed with an exit code or a signal after 10 s, or gave output with no `report` list (`scripts/hooks/session-start.ts` 56-69).
- The hook cuts its text under 10,000 bytes and adds a line that says so (lines 15-16 and 73-94).

Host facts, each checked at the host's own page on 2026-11-21:

- Claude Code fires SessionStart for startup, resume, clear, compact and fork. `additionalContext` passes the hook's string into the context. The host caps that string at 10,000 characters. A sub-agent start is a separate event, SubagentStart; Brain registers SessionStart only (https://code.claude.com/docs/en/hooks; the first 100,000 of 294,008 characters were read).
- Gemini CLI loads the file that `contextFileName` names from the extension folder (https://geminicli.com/docs/extensions/reference/).
- Codex reads `AGENTS.md` from its home folder (`~/.codex`, or `CODEX_HOME`) and from the project root down to the working folder, once per run. It stops adding files when the combined size reaches 32 KiB by default (https://developers.openai.com/codex/guides/agents-md, served from https://learn.chatgpt.com/docs/agent-configuration/agents-md). Brain's two blocks are 4,027 and 2,218 bytes.
- Antigravity injects the full content of an `always_on` rule into the system prompt on every turn. It truncates a rule file over 24,000 bytes, and all global and `always_on` rules share a budget of 20,000 tokens (https://antigravity.google/docs/rules/). `rules/protocol.md` is 4,120 bytes.

### Source files and generated files
One command renders both sources: `bun run plain-talk:render`. With `-- --check` it writes nothing and exits 1 on a difference.

| Source | Template | Generated file | Lines that repeat the source |
|---|---|---|---|
| `protocol/PROTOCOL.md` | `plain-talk/templates/protocol-rule.md` | `rules/protocol.md` | 8-62 (source line + 7) |
| `protocol/PROTOCOL.md` | `plain-talk/templates/protocol-block.md` | `protocol/AGENTS-block.md` | 4-58 (source line + 3) |
| `protocol/PROTOCOL.md` | the block above | `GEMINI.md` | 43-97 (source line + 42), inside markers at 40 and 98 |
| `plain-talk/PLAIN-TALK.md` | `plain-talk/templates/output-style.md` | `output-styles/talk-plain.md` | 10-45 |
| `plain-talk/PLAIN-TALK.md` | `plain-talk/templates/gemini.md` | `GEMINI.md` | 3-38, under the template's title at line 1 |
| `plain-talk/PLAIN-TALK.md` | `plain-talk/templates/antigravity-rule.md` | `rules/talk-plain.md` | 7-42 |
| `plain-talk/PLAIN-TALK.md` | `plain-talk/templates/agents-block.md` | `plain-talk/AGENTS-block.md` | 4-39 |
| `plain-talk/PLAIN-TALK.md` | the block above | `AGENTS.md` | 35-70, inside markers at 32 and 71 |

Task end steps 1 to 5 are at these lines: `protocol/PROTOCOL.md` 51-55, `protocol/AGENTS-block.md` 54-58, `rules/protocol.md` 58-62, `GEMINI.md` 93-97.

Two more copies are made outside this repo, at setup time and not by the renderer:

- A consumer's Codex `AGENTS.md` gets the two blocks when the user runs setup-brain with a Codex scope.
- A consumer's `docs/agents/workspace.md` gets the template's text when setup-brain runs. A re-run keeps the repo's folder paths and `max_parallel`.

An installed copy with older status text gives no signal at session start. `brain status` reports only a missing workspace file or layout 1 (`scripts/workspace/status.ts` 286-292). The protocol falls back to the template only when the file or its Session state section is missing (`protocol/PROTOCOL.md` 7). Only a run of the setup writer with `--check` shows that a copy differs (`scripts/setup/write.ts` 40-42).

### What the lifecycle checks pin
`bun run lifecycle:check` runs `scripts/lifecycle/check-refs.ts`. `bun test` runs the ten test files in `scripts/lifecycle/__tests__`.

| Check or test | What it pins |
|---|---|
| `names.ts` retiredNames | The pattern `/\bPhase:/` on any line of any scanned text file, unless the line also holds `Stage:`. The pattern is case-sensitive, and `## Phase 2: Charges` passes because a number stands before the colon. "phase boundary" is retired; the word is "stage boundary". Exempt: paths that start with `tasks/`, `docs/research/` or `docs/intent/`, `CHANGELOG.md`, every `__tests__/` folder, vendored files, and a migrated plan or todo in a spec folder. `docs/agents/history/`, `docs/decisions/`, `docs/ideas/`, the templates and the skills are scanned. The check reads untracked files and runs in CI. |
| `names.ts` glossaryTerms | `GLOSSARY.md` must hold a `**Term**:` label for 18 terms: Idea, Effort, Destination, Map, Row, Decide row, Research row, Do row, Frontier, Fog, Claim, Decision record, Research record, Workspace, Layout 1, Protocol, Stage, Phase. Checkpoint is not in the list. The check tests the label only, not the text of an entry, so a status value in an entry is not pinned. |
| `router.ts` | Each skill named in the discovery tree or a Skill column exists. Each skill but using-brain has a Quick Reference row. The Stage cell is read and not tested. |
| `using-brain.test.ts` | Seven items in the protocol, in three tests (lines 35-38, 47, 139-140). Exact strings in the router, among them "Save partial answers and each record's next action before a pause" and "the map lives in the conversation". Strings in the workspace template and in the two status commands. The six stage names in order. Two files of a status skill do not exist. |
| `parallel-build.test.ts` | 21 patterns in three build texts: the frontier, the cap, one writer of plan rows and todo ticks, the checkpoint stop, the result file, the failed task. |
| `spec-folder.test.ts` | The build commands name `specs/SPEC-NNN-<slug>/`. |
| `names.test.ts`, `router.test.ts` | The behavior of the two checks above, with fixtures. |
| `subagent-block.test.ts` | Seven texts that start a sub-agent name `plain-talk/AGENTS-block.md`. No test pins that a sub-agent gets the protocol. |
| `agents.test.ts`, `check-refs.test.ts`, `check-refs.ts.test.ts`, `hooks.test.ts` | No status or wait text. "unresolved" there is a finding kind: a skill reference with no skill. |
| `render.test.ts` (in `scripts/plain-talk`) | The renderer's source list. The protocol is at most 4,000 characters. The protocol says "the user" and not a person's name. |
| `overlap.test.ts` (in `scripts/setup/__tests__`, outside the lifecycle folder) | Against the shipped protocol: "Stage files by name." is covered with the home "protocol: Task end" (588-618); the offered sections of the resume fixture are Session start, Work through brain, Libraries and Task end (650-653); "Update the spec when its facts change." is removed, so the shipped step 2 must cover it (669-677). |

The seven protocol items that `using-brain.test.ts` pins are: "including their declared dependencies", "Keep ask-user-question loaded", "unresolved user decision or missing permission", "Reuse settled requirements", "using-brain", a line that holds `workspace.md` and then `Session state`, and "file or its **Session state** section is missing". None is in Task end.

### What the manifests and the CI workflows run

| File | What it does | Workspace check |
|---|---|---|
| `.claude-plugin/plugin.json` | registers `./.claude/commands`, five agents and the hook file `./scripts/hooks/claude-code.json` | n/a |
| `gemini-extension.json` | names `GEMINI.md` as the context file | n/a |
| `plugin.json` (root, for Antigravity) | name and description only | n/a |
| `.codex-plugin/plugin.json` | names `./skills/` | n/a |
| `.github/workflows/ci.yml` | on a push to main and on each pull request: typecheck, lint, format check, `bun test`, sync check, render check, `lifecycle:check`, version check, `bun run validate` | not run |
| `.github/workflows/release.yml` | on a push to main and by hand: `bun run check`, then the release steps | run, through `bun run check` |
| `.github/workflows/evals.yml` | by hand or weekly: `claude plugin eval`, then the eval gate | not run |

`bun run check` is the one script that holds `workspace:check`, which is `bun scripts/brain.ts check`. So a status or wait finding in one of this repo's own records stops a release and does not stop a pull request.

Two texts tell an agent or a maintainer to run the check by hand. Task end step 3 says "Run `brain check`" (`protocol/PROTOCOL.md` 53). The maintainer contract says "After integration, run the full `bun run check` and `bun run validate` once" (`docs/maintainers/changes.md` 26).

### Files to edit for a change to status or wait text
The rule of this list: it holds every live file that holds, copies, names or pins the text of this topic's sources. The sources are the protocol, the router, the workspace document with its template, the plain-talk text and the lifecycle checks. A file is in the list when one of the searches in Findings ("The edit list") finds it, or when it renders or reads these texts.

The list does not hold the files that carry status values of their own: the schemas, the record templates, the other skills and the steps of the commands. Rows 17 to 25 own those lists, and row 05 joins all lists for the decided format. History is not edited: `docs/research/`, `docs/ideas/`, `docs/decisions/`, `docs/intent/`, `CHANGELOG.md`, `docs/agents/history/` and `tasks/`.

Sources of this topic, edited by hand:

- `protocol/PROTOCOL.md`: Task end, the user-wait rule, the stage list. It has 50 characters of room under the 4,000-character test.
- `skills/using-brain/SKILL.md`: routing by state, the stage lists, the status line. Its body is 12,937 bytes of the 24,000-byte limit.
- `skills/setup-brain/workspace.md`: Session state, the five lines, the active effort, Resume. Row 20 owns this template.
- `docs/agents/workspace.md`: Brain's own installed copy of that template. No renderer writes it and no check compares it. It must match the template by hand or by a run of the setup writer.
- `plain-talk/PLAIN-TALK.md`: only for the wording rule of a user question.
- `plain-talk/templates/protocol-rule.md` (its description line says what the protocol covers) and `plain-talk/templates/protocol-block.md` (the heading `## brain protocol` and the markers).
- `scripts/lifecycle/names.ts` (glossaryTerms, retiredNames): when a term is added, renamed or retired.

Hand-written copies and pointers, each with its owning row:

- `GLOSSARY.md` (row 25): when a term changes, and also when a value or a rule in an entry changes. Stage (10-12) holds the six stages. Idea (17-21) holds `define`, `specced`, `done` and `parked`. Map (33-35), Row (38-40), Decide row (43-45) and Frontier (57-59) hold "resolved", "status" and "open". Phase (69-71) and Checkpoint (74-76) hold the checkpoint wait. Protocol (106-108) says what the protocol covers. The lifecycle check does not catch a stale value here.
- `AGENTS.md` outside its plain-talk block (7-9, 22-23, 30) and `docs/agents.md`: maintainer text. `AGENTS.md` 22 says "confirmed requirements" for the same rule.
- `docs/maintainers/changes.md` 16: a copy of the user-wait rule ("Reuse settled requirements", "unresolved user choice or missing permission").
- `.claude/commands/status.md` and `commands/status.toml` (row 22): they name Session state, and `using-brain.test.ts` pins five strings in each.
- `.claude/commands/plan.md` 7, `.claude/commands/build.md` 9, `commands/planning.toml` 6 and `commands/build.toml` 8 (row 22): each names the section "Find the active effort" by its title.
- `references/brain/stage-boundaries.md` 5 (the six stages) and `references/brain/commit-contract.md` (Task end step 5 points to it) (row 22).
- `skills/setup-brain/SKILL.md` 10 and `skills/spec-driven-development/SKILL.md` 91: "Reuse settled requirements" (rows 20 and 22).
- `README.md` 80 and `docs/install/*.md`: the human description of the deliveries and of Session state (row 25).
- `specs/SPEC-009-workspace/spec.md` (45, 53, 109-115, 200-203, 315-319, 402-410) and `specs/SPEC-004-plain-talk/spec.md` (80-87, 104-121, 170-171): the specs of these texts. Task end step 2 says "Update the spec when its facts change". `specs/SPEC-001-evals/spec.md` 211 names "no active work" (row 27).
- Code that renders, reads or prints these texts: `scripts/plain-talk/render.ts` (the source list), `scripts/hooks/session-start.ts` (names the protocol path, passes the report lines), `scripts/setup/overlap.ts` (reads the protocol and the router's Start section at run time; its comment at 17-19 quotes "Stage files by name."), `scripts/setup/write.ts` (writes the blocks and the workspace document; row 20), `scripts/workspace/status.ts` (the five labels at 22-26 and 273-279, the stage words at 47, 117-120 and 248-251; row 19) and `scripts/workspace/effort.ts` (lines 1-7 restate the active-effort rule; row 19).

Tests, fixtures and graders that pin the text:

- `scripts/lifecycle/__tests__/using-brain.test.ts`, `names.test.ts`, `parallel-build.test.ts`, `router.test.ts` and `spec-folder.test.ts`, and `scripts/plain-talk/__tests__/render.test.ts`.
- `scripts/setup/__tests__/overlap.test.ts` (588-618, 650-653, 669-677): it reads the shipped protocol (row 20). A change to Task end text also changes what the overlap tool offers to remove from a consumer's `AGENTS.md`. The other tests of that file and `scripts/setup/__tests__/overlap.ts.test.ts` use a protocol of their own and do not move with the shipped text.
- `scripts/setup/__tests__/write.ts.test.ts` 19-20 and 201: "## Session state" and "brain status --json" in the written workspace file (row 20).
- `scripts/hooks/__tests__/session-start.test.ts`, `scripts/workspace/__tests__/status.test.ts` and `scripts/workspace/__tests__/status.ts.test.ts`: the report labels (row 19).
- Four fixture copies of an older workspace document, with `status: define`, `open`, `in-progress`, the `Blocked by` frontier sentence and "An idea with `status: specced` is done": `scripts/workspace/__tests__/fixtures/idea-mid-define`, `no-active-work` and `spec-mid-build` (`docs/agents/workspace.md` 38, 47, 49) and `plan-shapes` (44, 53, 55). The fixture READMEs and `idea-mid-define/docs/STATUS.md` hold the report words too (rows 19 and 24).
- `scripts/evals/__tests__/fresh-repo-resume.test.ts` 270-274, `evals/setup/fresh-repo-resume/graders/stage.md` and `next-step.md`, and `scripts/evals/__tests__/fixtures/interview-resume.reply-0.md`: the report labels (row 24).
- `evals/setup/migrate-08/scaffold.sh` 52 and its grader `agents-md-kept.md` 6: a copy of Task end step 3. `evals/lifecycle/no-overload/graders/no-lifecycle-skill.md` 9 holds the stage list (row 24).
- `skills/ask-user-question/evals/files/selection-fixture.md` 14 and 16: it names "Brain's workspace Session state procedure" and "Brain's protocol Task end procedure" (row 21).

Process files: `docs/maintainers/changes.md` is a required read before a change to instructions (`AGENTS.md` 17). Its steps 5 to 7 add an evaluation loop for a skill behavior change, such as an edit to the router. A user-facing change needs a Changeset.

Regenerated by `bun run plain-talk:render`:

- From the protocol: `rules/protocol.md`, `protocol/AGENTS-block.md`, `GEMINI.md`.
- From the plain-talk text: `output-styles/talk-plain.md`, `GEMINI.md`, `rules/talk-plain.md`, `plain-talk/AGENTS-block.md`, `AGENTS.md`.

Changed only in a consumer repo, by a new run of setup-brain: the Codex `AGENTS.md` blocks and the consumer's `docs/agents/workspace.md`.

Cannot be edited here:

- `skills/context-engineering/SKILL.md` is vendored.
- `scripts/setup/__tests__/fixtures/resume/AGENTS.md` is a copy of another repo's file, pinned byte for byte by a SHA-1 (`overlap.test.ts` 621-626). A change to Task end changes the expected results of the test, not the fixture.

### Literal status values and wait words in these texts

Stored values and fields:

| Word | Sense | Where |
|---|---|---|
| `status: define` | idea status, the effort is active | `docs/agents/workspace.md` 67 |
| `status: specced` | idea status, finished, a spec carries it on | `docs/agents/workspace.md` 67, 78 |
| `status: done` | idea status, finished with no spec | `docs/agents/workspace.md` 67, 79 |
| `parked` | idea status, waits until the user names it | `docs/agents/workspace.md` 67 |
| `open` | row status | `docs/agents/workspace.md` 67, 76; in prose in `docs/agents/history/STATUS.md` 5 ("Take no open row") |
| `in-progress` | row status | `docs/agents/workspace.md` 67; "rows in progress" 30, 39 |
| `resolved` | row status | `docs/agents/workspace.md` 38, 62, 76 |
| `superseded by NN` | row status, valid in code and in use | in none of these texts; `scripts/workspace/schema.ts` 210 |
| `proposed`, `accepted`, `superseded by DEC-NNN` | decision record status | in none of these texts; `scripts/workspace/schema.ts` 146-151 |
| `in-progress`, `resolved`, outcome `answered` | research record status and outcome | in none of these texts; `scripts/workspace/schema.ts` 175-176 |
| partial, blocked | outcome of a research record | `docs/agents/workspace.md` 32, 39, 40 |
| `Blocked by` | the column that names blocking rows | `docs/agents/workspace.md` 76; `names.test.ts` 322 |
| `result:` | the field of a done idea | `docs/agents/workspace.md` 79 |
| `sources:` | a spec's list of ideas, decisions and research | `docs/agents/workspace.md` 61, 78 |
| `migrated` | frontmatter key of a migrated plan or todo | `scripts/lifecycle/names.ts` 142, 149; `names.test.ts` 100 |
| task ticks, todo ticks, `- [ ]` | the tick of a task in `tasks/todo.md` | `docs/agents.md` 22; `parallel-build.test.ts` 35; `names.test.ts` 184-194, 274-284 |
| `tasks/done/` | a finished plan marked by its folder | `AGENTS.md` 30; `names.test.ts` 56 |
| `max_parallel` | the cap on sub-agents at once | `docs/agents/workspace.md` 8, 16 |
| "its status and result link" | what Task end step 1 updates on a row | `protocol/PROTOCOL.md` 51 |

One literal has two senses. `define` is the stored idea status (`docs/agents/workspace.md` 67) and a stage word (`docs/agents/workspace.md` 37, `protocol/PROTOCOL.md` 22, `GLOSSARY.md` 11).

Words that are worked out or reported:

| Word | Where |
|---|---|
| Stage line: define, build, finished, no active work | `docs/agents/workspace.md` 37 |
| stage names: define, plan, build, verify, review, ship | `protocol/PROTOCOL.md` 22; `skills/using-brain/SKILL.md` 94-99, 105-112 |
| stage cells: Setup, Any | `skills/using-brain/SKILL.md` 122, 149-153 |
| frontier | `docs/agents/workspace.md` 30, 39, 41, 43, 76; `skills/using-brain/SKILL.md` 80 |
| active effort, active, unfinished, finished, not finished | `protocol/PROTOCOL.md` 6, 54; `docs/agents/workspace.md` 31, 37, 65-71, 78-79; `skills/using-brain/SKILL.md` 12, 49 |
| several eligible efforts | `skills/using-brain/SKILL.md` 49 |
| red, red items | `protocol/PROTOCOL.md` 53, 54; `docs/agents/workspace.md` 30, 40, 47 |
| next action | `protocol/PROTOCOL.md` 54; `docs/agents/workspace.md` 32, 47; `skills/using-brain/SKILL.md` 21, 49, 80; `docs/agents.md` 50 |
| stale report suggestions; historical next-step text | `protocol/PROTOCOL.md` 9; `AGENTS.md` 9 |
| status-only request; layout-1 report | `docs/agents/workspace.md` 33; 32 |
| completed row or task; completed work; completion conditions | `skills/using-brain/SKILL.md` 90; `docs/agents/workspace.md` 77; `docs/agents.md` 51 |
| outcome (of a research worker or record) | `docs/agents.md` 15; `docs/agents/workspace.md` 39 |
| state update; state commits; close an unrelated row | `docs/agents.md` 33; `AGENTS.md` 23; `docs/agents.md` 46 |
| pass, fail; failed task keeps its worktree | `protocol/PROTOCOL.md` 45; `parallel-build.test.ts` 51 |
| pending (a review the host cannot run) | `docs/agents.md` 35 |
| in progress, still running (a background job); running research and uncertain effects | `docs/agents/workspace.md` 87; 76 |
| closed, shipped | `docs/agents/history/STATUS.md` 3 |
| worth reopening (a decision record that an output contradicts) | `docs/agents/domain.md` 21 |
| `unresolved` (a finding kind of the lifecycle check, another sense) | `scripts/lifecycle/check-refs.ts` 103; `scripts/lifecycle/finding.ts` 6 |

Wait words:

| Word | Where |
|---|---|
| user waits | `protocol/PROTOCOL.md` 54 |
| Waiting on the user | `docs/agents/workspace.md` 41; `docs/agents/history/STATUS.md` 7 |
| waiting for approval | `protocol/PROTOCOL.md` 55 |
| selection waits on the user; waits until the user names it | `docs/agents/workspace.md` 47, 67 |
| blocking rows that need it | `protocol/PROTOCOL.md` 54 |
| depends on; failed prerequisite; missing prerequisite and retry condition; exact blocker | `protocol/PROTOCOL.md` 33; `skills/using-brain/SKILL.md` 19; `docs/agents/workspace.md` 32; `docs/agents.md` 15; `skills/using-brain/SKILL.md` 21 |
| stops and reports when one fails | `protocol/PROTOCOL.md` 40 |
| unresolved user decision, missing permission, settled requirements | `protocol/PROTOCOL.md` 14; `skills/using-brain/SKILL.md` 76 |
| unresolved user decision, missing permission, confirmed requirements | `AGENTS.md` 22 |
| A user decision remains?; unresolved requirement; unresolved idea; unresolved user choices | `skills/using-brain/SKILL.md` 44; 51; 124; `docs/agents.md` 45 |
| pending question | `skills/using-brain/SKILL.md` 14, 49 |
| partial answers, partial results; before a pause; after interruption | `skills/using-brain/SKILL.md` 80, 90; `docs/agents.md` 50; `skills/using-brain/SKILL.md` 80; `docs/agents.md` 49 |
| approved (spec task, task, rows, next approved action) | `skills/using-brain/SKILL.md` 32, 34, 51, 95; `docs/agents/workspace.md` 47, 77 |
| approval and approvals (supply approval, required setup approvals, outstanding approvals, within approval); authorized | `skills/using-brain/SKILL.md` 14, 17, 90, 122; 19, 43, 99, 148 |
| unfinished step | `protocol/PROTOCOL.md` 6; `skills/using-brain/SKILL.md` 12 |
| a phase "that one checkpoint waits on" | `scripts/lifecycle/names.ts` 27 |
| checkpoint row on the frontier stops the build; stops the build, merges nothing | `parallel-build.test.ts` 37; 45 |
| Next, "Take no open row until that review ends", Later | `docs/agents/history/STATUS.md` 5-9 |
| current task status, next pending task; required approvals; uncommitted; depends on, "Do not infer approval"; human approval gates, completed task | `skills/context-engineering/SKILL.md` 128; 131; 133; 135; 125, 137 (vendored) |

### Contrary evidence
- "Parked" has two results, not only two wordings. The workspace document lists a parked idea apart from finished ideas (line 67). The code counts an idea as unfinished only when its status is exactly `define`; every other case is finished (`scripts/workspace/effort.ts` 47-57). Both keep a parked idea out of the unfinished efforts. They differ in three cases. A parked idea that the branch names prints `Stage: finished` (`effort.ts` 89-98, `status.ts` 117-120); the text has no "finished" for a parked idea. An idea with a missing, unreadable or unknown status is finished for the code; the text has no rule for it. An idea with any other value, `in-progress` included, is finished for today's code. No test covers a parked idea that the branch names; the code path was read, not run.
- A fourth row status is valid and in use, and no text of this topic carries it. `superseded by NN` passes the schema (`scripts/workspace/schema.ts` 210), a superseded row drops out of the graph, and a row that it blocks is stuck (`scripts/workspace/graph.ts` 4-5 and 13-14). Five rows of this worktree's maps use it. An agent that works out the frontier by hand (`docs/agents/workspace.md` 43) gets no rule for it.
- The owning spec contradicts the current texts. `specs/SPEC-009-workspace/spec.md` 109-115 says `docs/STATUS.md` "feeds the next-step and waiting lines", the hook "injects the five lines and that text", and `/brain:status` "is the `status` skill". Lines 200 and 402-408 say the hook injects the protocol. The current texts say the opposite: state comes from rows and records, the hook names the protocol's path, and status is not a skill.
- A stale comment. `scripts/plain-talk/render.ts` lines 38-39 say Claude Code gets the protocol from the hook, "which reads the source text itself". The hook does not read the text now. It names the path and tells the agent to read it (`scripts/hooks/session-start.ts` 99, 114). The hook put the text in its output until commit 2ca689f2.
- A budget whose stated reason has gone. `render.test.ts` 311-316, the Decisions row "The protocol's budget" (`docs/intent/workspace-and-stateful-interview.md` 756) and `specs/SPEC-004-plain-talk/spec.md` 170-171 keep the protocol at 4,000 characters to leave 6,000 of the hook's 10,000 for the status. The hook no longer carries the protocol. The test still holds, so a new Task end sentence has 50 characters of room.
- "Generated files name their sources" (`AGENTS.md` 16). Read as a claim about the files themselves, it is false: no rendered file holds a line that names its source, and the block markers name the block, not the file. Read as a claim about the repo, it holds: the next sentence names both sources, and `scripts/plain-talk/render.ts` 26-48 lists each target. Which sense the author meant is not established.
- The stage has three sets of values. The protocol and the router list six stages. The Quick Reference uses eight cells. The status report's Stage line prints define, build or finished.
- "User waits" in Task end step 4 is wider than the report's "Waiting on the user" line. The line holds decide rows on the frontier only. It shows no do row that the user runs and no checkpoint row.
- The vendored context-engineering skill is a second instruction on where state is saved. Its lines 123-137 tell the agent to persist "the current task status and the next pending task" and "required approvals" before it leaves a session, and not to infer approval "unless the durable artifact records it". The router routes to this skill (lines 70 and 132), and interview-me says "Follow context-engineering's boundary rules" (`skills/interview-me/SKILL.md` 207). Brain cannot edit this text.
- The retired status note names IDEA-003 and RES-068. Neither file exists. The note is history and no code reads it for state. The retired-name check does scan it.

### What I could not establish
- UNVERIFIED: that Antigravity loads the `rules/` folder of an installed plugin. The host page confirms what `always_on` does and lists workspace and global rule folders; the part read does not name a plugin's folder. Brain's install guide reports one dated observation (`docs/install/antigravity.md` 93-96, 2026-09-19).
- UNVERIFIED: that a sub-agent on Gemini CLI, Antigravity or Codex gets none of the host's every-turn text. The source is Brain's own build command (`commands/build.toml` 64). For Claude Code the host page lists SubagentStart as a separate event; the part read does not say that SessionStart stays silent for a sub-agent.
- Whether a consumer's installed copies (the Codex blocks, the workspace document) are current. The mechanism is known (see "Source files and generated files"); the state of each repo cannot be seen from this repo.
- Whether agents follow Task end in practice. That is observed behavior, which the evals own (row 24).
- Why the 4,000-character budget stays after the hook change. No record that I read says so.
- The Claude Code hooks page beyond its first 100,000 characters, and the Gemini CLI page in full. Both were read through a page query.

### Where this topic meets another
- Row 17: the stored values and the templates. The first value of an idea's `status:` comes from the `brain new-doc` template.
- Row 18: the frontier in code (`scripts/workspace/map.ts` 165-171) matches the workspace text. `superseded by NN` is in the code and not in the text.
- Row 19: `brain status` and the session-start hook. The hook passes only the `report` list of strings, under a cap of 10,000 bytes, so new status or wait data reaches a Claude Code session start only through those lines. The parked case and the "Waiting on the user" line belong here too.
- Row 20: the template `skills/setup-brain/workspace.md`, the Codex blocks, the overlap tool that reads the protocol at run time, and the retired status note.
- Row 21: interview-me's Resume and RESEARCH.md, which the protocol and the workspace document point to.
- Row 22: the status and build commands, `references/brain/stage-boundaries.md`, the commit contract and the vendored context-engineering skill.
- Row 24: the evals `evals/setup/migrate-08` and `evals/setup/fresh-repo-resume`, whose files copy Task end step 3 and the report labels.
- Row 25: the glossary. Its Idea entry holds the four idea values. It has no entry for a red item, a user wait or the status report.
- Row 28: the checkpoint as a user wait that the report does not show, and the `Phase:` rule of the retired-name check.

### Sites judged not relevant
Every site of the index is cited by a finding. These sites are cited but hold no status or wait of an idea, a spec, a phase or a row:

- `plain-talk/PLAIN-TALK.md` 36, `plain-talk/AGENTS-block.md` 39, `output-styles/talk-plain.md` 45: the wording of a user question, not its state.
- `skills/context-engineering/SKILL.md` 64-68, 113-121 and 253-312: an example rule for a consumer's own file, a progress summary in chat, question templates, and an inline plan in chat. Lines 123-137 are relevant; see Contrary evidence.
- `scripts/lifecycle/__tests__/names.test.ts` 184-194 and 274-284: unticked boxes inside fixtures for the retired-name check.
- `scripts/lifecycle/__tests__/router.test.ts`, all its sites, and `scripts/lifecycle/router.ts`: the Stage cell is the stage a skill is filed under, not the state of an item.
- `scripts/lifecycle/__tests__/parallel-build.test.ts` 30-34 and 36 (the worktree and merge rules), 74-120 and 122-131: isolation of parallel tasks, not their status. Line 35, the one-writer rule, is relevant.
- `scripts/lifecycle/__tests__/spec-folder.test.ts` 32-36: a git-cleanliness stop.
- `docs/agents/domain.md` 9: decision records with no status value. Lines 19-21 are relevant: they are the one rule of this topic on a decision that an output contradicts.
- `docs/agents/workspace.md` 8 and 16: the parallel cap.

### Checks
All three check results were present. Each issue was opened at its source before the record changed.

- Sources check: 9 issues reported, 9 confirmed and fixed, 0 rejected. Fixed: the count of pinned protocol strings (7, not 4) and lines 130-131 of the status-route test; the test outside the lifecycle folder that pins Task end; step 5 and the commit contract; the parked sentence; the missing literal words; "confirmed requirements" in `AGENTS.md` 22; the missing hand-written copies in the edit list; five inexact ranges and descriptions; the UNVERIFIED item on the workspace copy, now a finding.
- Coverage check: 11 issues reported, 11 confirmed and fixed, with two details rejected. Rejected: issue 8 says `overlap.test.ts` line 223 pins `["Task end", "kept", ["protocol: Task end"]]` against the shipped protocol; that assertion (lines 212-227) runs on the test's own small protocol (`scripts/setup/__tests__/overlap.test.ts` 21-40, 125-128 and 135-141). Rejected: issue 4 cites `scripts/workspace/templates/RES.md` line 9 for the outcome comment; it is line 10. Fixed: the edit list and the glossary condition (blocking); conversation mode; the exceptions of the report and the selection; the stored values that these texts leave out; the literal words; the durable part of the vendored skill; step 5; the five lifecycle tests that were not named; the spec that contradicts the texts; the callers of the check by hand.
- Contrary check: 13 issues reported, 13 confirmed and fixed, with two details rejected. Rejected: issue 3 cites `overlap.test.ts` line 648 for the offered sections; the assertion is at line 653. Rejected in part: issue 7 says the only red item an agent can store is a blocked research record; a check finding also comes from a stored file (`scripts/workspace/status.ts` 259-271 and 300-304), so the record says only that no template holds a field for a red item. Fixed: the parked sentence (blocking); the edit list (blocking); the pinned Task end text; the count of protocol strings; `superseded by NN`; the checkpoint as a user wait; the red item; the exact `Phase:` rule; the sub-agent and the missing tests; the literal words; the two items that could be established; the failure cases of the delivery; the two readings of "Generated files name their sources".

## Findings

### The protocol
- The protocol's Task end section applies to work tracked in the workspace and has five numbered steps. Source: protocol/PROTOCOL.md:47-55, checked 2026-11-21.
- Task end step 1 tells the agent to update the row in the map or in `tasks/plan.md`, "its status and result link", and says that only the main session writes rows while a sub-agent reports instead. Source: protocol/PROTOCOL.md:51, checked 2026-11-21.
- The protocol names no stored status value; "resolved" appears once with another sense (the resolved `brain` path, line 43) and "define" once as a stage name (line 22). Source: command `grep -nE "in-progress|specced|parked|superseded|\bopen\b|\bdone\b|status: " protocol/PROTOCOL.md` (no line, exit 1) and protocol/PROTOCOL.md:22 and 43, checked 2026-11-21.
- Task end step 2 puts research in its RES file and a decision in its DEC file and updates the spec when its facts change; it names no status field of an idea, a spec or a record. Source: protocol/PROTOCOL.md:52, checked 2026-11-21.
- Task end step 3 tells the agent to run `brain check` and to fix each finding or name it as red in the next step. Source: protocol/PROTOCOL.md:53, checked 2026-11-21.
- Task end step 4 keeps the next action, red items and user waits in the active effort's rows and records, makes a user-run step a do row with its exact command that blocks the rows that need it, and ends with `brain status`. Source: protocol/PROTOCOL.md:54, checked 2026-11-21.
- Task end step 5 has three sentences: record what is committed, pushed or waiting for approval; stage files by name; use the installed `references/brain/commit-contract.md` for slices, task results and serialized integration. Source: protocol/PROTOCOL.md:55, checked 2026-11-21.
- The commit contract says the main session alone updates plan rows and task ticks, records the implementation or integration commit with its verification evidence, and commits that state update separately; it names no place for "pushed" or "waiting for approval". Source: references/brain/commit-contract.md:9 and command `grep -nE "approv|wait|push" references/brain/commit-contract.md` (line 11 only, "An already approved build continues within that approval"), checked 2026-11-21.
- Session start tells the agent to follow using-brain's Start once and to continue its unfinished step when already active, and says Start restores `docs/agents/workspace.md`, Session state, project rules and current records before it routes the request. Source: protocol/PROTOCOL.md:5-6, checked 2026-11-21.
- When the workspace file or its Session state section is missing, the protocol sends the agent to the plugin's `skills/setup-brain/workspace.md` template and says setup-brain owns setup and migration. Source: protocol/PROTOCOL.md:7, checked 2026-11-21.
- The protocol ranks explicit user scope and handoffs above "stale report suggestions". Source: protocol/PROTOCOL.md:9, checked 2026-11-21.
- The protocol's rule for a wait on the user is to ask only about an unresolved user decision or missing permission, one question per call, and to reuse settled requirements. Source: protocol/PROTOCOL.md:14, checked 2026-11-21.
- Every numbered file (IDEA, SPEC, DEC, RES) is created only through `brain new-doc`, whose claim keeps each number to one agent. Source: protocol/PROTOCOL.md:15 and docs/agents/workspace.md:58, checked 2026-11-21.
- For a skill that only the user starts, such as handoff, the agent gives the user its command. Source: protocol/PROTOCOL.md:16, checked 2026-11-21.
- The capability check has four triggers: the start of a task and each stage change (the text lists the six stages define, plan, build, verify, review and ship), before a sub-agent starts, after a compaction or a long run of tool calls, and before a guess at a convention; it confirms "the brain skills for this stage". Source: protocol/PROTOCOL.md:18-31, checked 2026-11-21.
- When a server does not answer, the agent stops the work that depends on it and says what failed; the rule writes nothing to a row or a record. Source: protocol/PROTOCOL.md:33, checked 2026-11-21.
- A sub-agent's brief names the capability check at its start and at each stage change, says the sub-agent "stops and reports when one fails", and names a progress file (a task agent's scratch file or a research agent's RES file) and a result file named with the task ID first, such as `T10-result.md`. Source: protocol/PROTOCOL.md:37-43, checked 2026-11-21.
- A sub-agent returns user questions in its result file; a task sub-agent replies with that file's path and one line (pass or fail, the commit SHA, any question), and a research row's sub-agent replies with its RES path only. Source: protocol/PROTOCOL.md:45, checked 2026-11-21.

### The router
- The router's description says it restores Brain work at session start, resume, clear or compaction and when the user continues an idea or spec. Source: skills/using-brain/SKILL.md:3, checked 2026-11-21.
- The router owns the choice of the owning skill; it says the workspace owns state reporting and effort selection and each workflow owns its recovery and completion. Source: skills/using-brain/SKILL.md:8, checked 2026-11-21.
- Start runs once at a session boundary, an active router continues its unfinished step, and a new user message steers the current task unless it explicitly replaces it. Source: skills/using-brain/SKILL.md:12, checked 2026-11-21.
- Start step 1 keeps the user's task, named effort, handoff, conditions and pending question, and says a computed report does not override a newer instruction or supply approval. Source: skills/using-brain/SKILL.md:14, checked 2026-11-21.
- Start step 3 says that with no project repository the agent uses the selected workflow's conversation mode, where repository setup, numbered files and the CLI do not apply; the durable-state section adds that in conversation mode the map lives in the conversation. Source: skills/using-brain/SKILL.md:16 and 82, checked 2026-11-21.
- Start step 4 reads `docs/agents/workspace.md` in full, follows Session state once, falls back to the setup-brain template, and preserves required setup approvals. Source: skills/using-brain/SKILL.md:17, checked 2026-11-21.
- Start step 6 tells the agent, for continued work, to read the current records and enter the owning workflow's recovery procedure before it selects a row; a failed prerequisite stops only the work that needs it. Source: skills/using-brain/SKILL.md:19, checked 2026-11-21.
- Start is complete when the request is clear, the project context is restored or its exact blocker is known, and the next action has an owner. Source: skills/using-brain/SKILL.md:21, checked 2026-11-21.
- The discovery tree routes by the state of the work: resume an idea to interview-me (Resume before choosing a row), resume an approved spec task to incremental-implementation, a spec that needs tasks to planning-and-task-breakdown, an authorized release to shipping-and-launch, and a remaining user decision to ask-user-question; a direct information request is answered from its source with no idea, spec or plan made for it. Source: skills/using-brain/SKILL.md:23-47, checked 2026-11-21.
- For continued work the router honors an explicitly named effort before branch-based selection, asks one question when several efforts are eligible, and says a status question during active work reports that work and keeps its next action and pending question. Source: skills/using-brain/SKILL.md:49, checked 2026-11-21.
- A bounded repair reuses an existing approved spec or task; a new significant change without a spec goes to spec-driven-development, and an unresolved requirement goes to interview-me first. Source: skills/using-brain/SKILL.md:51, checked 2026-11-21.
- The router routes "Repair context or a confusing reply" to context-engineering and lists that skill in the Quick Reference under Build. Source: skills/using-brain/SKILL.md:70 and 132, checked 2026-11-21.
- The router's Decisions rule repeats the protocol's rule for a wait on the user and adds that small reversible choices stay with the agent. Source: skills/using-brain/SKILL.md:76, checked 2026-11-21.
- The router says interview-me owns its map, frontier, fog, continuous writes, recovery and Finish checks, and tells the agent to save partial answers and each record's next action before a pause. Source: skills/using-brain/SKILL.md:78-80, checked 2026-11-21.
- The router says the main session writes map and plan rows and research workers write their own records. Source: skills/using-brain/SKILL.md:82, checked 2026-11-21.
- A prototype row asks for runnable evidence before a design decision, and the user's choice goes in a DEC file that links the prototype's branch. Source: skills/using-brain/SKILL.md:86, checked 2026-11-21.
- Stage Boundaries tells the agent to preserve decisions, partial answers, research progress, verification evidence, changed files and outstanding approvals continuously, and to read `references/brain/stage-boundaries.md` at a completed row or task. Source: skills/using-brain/SKILL.md:90, checked 2026-11-21.
- The Lifecycle Sequence lists six stages (Define, Plan, Build, Verify, Review, Ship), with "approved rows and task blocks" for Plan and "results linked from the plan" for Build, and maps spec-driven-development's Stages 0 to 4 onto define, plan and build. Source: skills/using-brain/SKILL.md:94-101, checked 2026-11-21.
- The Commands and skills table has one row per stage, with its skills and its Claude Code and Gemini CLI commands. Source: skills/using-brain/SKILL.md:103-114, checked 2026-11-21.
- The router says status is a workspace procedure, not a skill: `/brain:status`, Gemini's `/status` and a status request in chat follow Session state, and the `brain status` CLI supplies the read-only report. Source: skills/using-brain/SKILL.md:116, checked 2026-11-21.
- The Quick Reference gives each skill a Stage cell with one of eight values: Setup, Define, Plan, Build, Verify, Review, Ship or Any; its summaries hold "migrate only within approval" and "an unresolved idea". Source: skills/using-brain/SKILL.md:120-153, checked 2026-11-21.
- The router names no stored status value and no Blocked by column. Source: command `grep -nE "in-progress|specced|parked|superseded|\bopen\b|\bdone\b|\bresolved\b|status: |Blocked by" skills/using-brain/SKILL.md` (no line, exit 1), checked 2026-11-21.

### The workspace document
- `docs/agents/workspace.md` is byte-identical to the template `skills/setup-brain/workspace.md`. Source: command `diff docs/agents/workspace.md skills/setup-brain/workspace.md` (exit 0), checked 2026-11-21.
- No test and no check script compares Brain's own `docs/agents/workspace.md` with the template: the one test that reads the repo's own copy asserts only the heading "## Session state", and `bun run check` holds no setup check. Source: scripts/lifecycle/__tests__/using-brain.test.ts:137, package.json:15 and command `grep -rnE "setup:write|write\.ts" package.json .github/workflows` (package.json:23 only, the script's own definition), checked 2026-11-21.
- Thirteen other test files name both the workspace document and its template; each one reads or writes the workspace document in a temporary fixture folder, so it compares a scaffold copy with the template and not the repo's own copy. Source: command `grep -rlE "docs/agents/workspace\.md" scripts --include='*.test.ts' | xargs grep -lE "setup-brain/workspace\.md"` (14 files, one of them using-brain.test.ts) and the line that sets the folder in each file (for example scripts/setup/__tests__/write.test.ts:45, scripts/evals/__tests__/adr-is-dec.test.ts:132, scripts/setup/__tests__/migrate.test.ts:15 and 159-160, scripts/workspace/__tests__/new-doc.test.ts:29 and 83 and scripts/workspace/__tests__/plan.test.ts:28 and 176), checked 2026-11-21.
- The workspace document says setup-brain writes it, and the setup writer's header says a re-run keeps the repo's folder paths and `max_parallel` and brings the rest of the template's text. Source: docs/agents/workspace.md:12 and scripts/setup/write.ts:30-31, checked 2026-11-21.
- `max_parallel` is the most sub-agents that run at once (tasks in a build, or research rows in an interview); it is 8 when absent and `BRAIN_MAX_PARALLEL` overrides it. Source: docs/agents/workspace.md:8 and 16, checked 2026-11-21.
- Session state is used at session start, after clearing or resuming a session, and when the user asks where work stands. Source: docs/agents/workspace.md:28, checked 2026-11-21.
- Session state step 1 reuses the report the session-start hook supplied or runs `brain status`, which writes no file, and names `brain status --json` for each effort's frontier, rows in progress, full red items and the specs an idea produced. Source: docs/agents/workspace.md:30, checked 2026-11-21.
- Session state step 2 shows the five lines as printed; the report uses the effort the git branch names, or every unfinished effort when the branch names none, and the agent asks through ask-user-question when the choice is the user's. Source: docs/agents/workspace.md:31, checked 2026-11-21.
- Session state step 3 gives each reported problem a next action: a layout-1 report needs setup-brain's migration, a missing workspace file needs setup-brain, and for blocked research the agent reads the record for the missing prerequisite and retry condition. Source: docs/agents/workspace.md:32, checked 2026-11-21.
- Session state step 4 returns the report and the selected effort to the caller, and says a status-only request reports without starting or changing work. Source: docs/agents/workspace.md:33, checked 2026-11-21.
- The workspace table defines five lines: Stage (define, build or finished, or no active work), Last step (the highest-numbered resolved row and its result), Next step (the first frontier row, then rows in progress, and a linked partial or blocked research record), Red (missing workspace setup, workspace-check findings and blocked research records) and Waiting on the user (decide rows on the frontier). Source: docs/agents/workspace.md:35-41, checked 2026-11-21.
- With no Bun or plugin path, the agent reads the idea's map or the spec's plan and computes the frontier by hand. Source: docs/agents/workspace.md:43, checked 2026-11-21.
- Session state is complete when each red item has a supported next action and the effort is selected or its selection waits on the user; an explicit request or handoff outranks a report's suggested next step, and "Continue" resumes the next approved action only after the owning workflow reconciles the current records. Source: docs/agents/workspace.md:47, checked 2026-11-21.
- The Files section says a research record holds the findings for one research or do row, a spec lists its ideas, decisions and research in `sources:` with links one way, a resolved map row links to the DEC or RES file that resolved it, and `brain check` reports every file that breaks these rules. Source: docs/agents/workspace.md:51-63, checked 2026-11-21.
- For a missing or older workspace the agent uses the template's defaults or procedure and reports that setup is needed, and the status command itself creates no files. Source: docs/agents/workspace.md:45, checked 2026-11-21.
- The Background work section says silence is not "still running" and tells the agent to check a job's status before it reports the job as in progress; this is the status of a background job, not of a row. Source: docs/agents/workspace.md:85-87, checked 2026-11-21.
- Rows in a map or a plan have two-digit numbers local to their file, and a row is cited as `IDEA-004#03`. Source: docs/agents/workspace.md:59, checked 2026-11-21.
- The active effort is an idea with `status: define` or a spec whose `tasks/plan.md` has a row that is `open` or `in-progress`; an idea with `status: specced` or `done` is finished, and a `parked` idea waits until the user names it. Source: docs/agents/workspace.md:67, checked 2026-11-21.
- The active effort is chosen in this order: the effort the user or the handoff names, the git branch name, the only idea or spec that is not finished; step 4 asks the user "when continuing work requires a choice" and says a concrete new task does not require selecting an unrelated old effort first. Source: docs/agents/workspace.md:69-72, checked 2026-11-21.
- Resume of an idea goes through interview-me's Resume before a row is chosen; Resume reconciles saved answers, linked records, running research and uncertain effects, and the text defines the frontier as every `open` row whose `Blocked by` rows are all `resolved`. Source: docs/agents/workspace.md:76, checked 2026-11-21.
- Resume of a spec reads `spec.md`, `tasks/plan.md`, `tasks/todo.md` and the result records, and reconciles completed work with actual changes before a task repeats. Source: docs/agents/workspace.md:77, checked 2026-11-21.
- An idea with `status: specced` resumes through the spec that lists it in `sources:`, and an idea with `status: done` has a `result:` that names a `DEC-NNN` or a commit SHA. Source: docs/agents/workspace.md:78-79, checked 2026-11-21.
- A sub-agent writes its result to a file named after its task or record, the ID first: `T10-result.md`, `RES-032-<slug>.md`. Source: docs/agents/workspace.md:83, checked 2026-11-21.
- The protocol, the router and the workspace document do not say who writes an idea's `status:` field or when: the only three lines with `status:` describe values. Source: command `grep -n "status:" protocol/PROTOCOL.md skills/using-brain/SKILL.md docs/agents/workspace.md` (docs/agents/workspace.md:67, 78 and 79 only), checked 2026-11-21.
- The first value of an idea's status comes from the `brain new-doc` template, which writes `status: define` with the comment `define | specced | done | parked`. Source: scripts/workspace/templates/IDEA.md:3 and protocol/PROTOCOL.md:15, checked 2026-11-21.
- The protocol, the router and the workspace document do not hold the word superseded. Source: command `grep -nE "superseded" docs/agents/workspace.md protocol/PROTOCOL.md skills/using-brain/SKILL.md` (no line, exit 1), checked 2026-11-21.

### The code behind the workspace text
- The status code agrees with the workspace table on the stage words and the labels: the stage is define for an idea, build for a spec and finished for a finished effort, and the five labels are `Stage:`, `Last step:`, `Next step:`, `Red:` and `Waiting on the user:`. Source: scripts/workspace/status.ts:47, 117-120 and 273-279, checked 2026-11-21.
- The first line reads "no active work" only when the report names no effort, which is the case when no effort is unfinished and the branch names none; with several unfinished efforts and no branch match, each one is printed. Source: scripts/workspace/status.ts:147-153 and 248-251 and scripts/workspace/effort.ts:99-104, checked 2026-11-21.
- On a repo with no workspace config and layout-1 files, the report is one line ("This repo is on layout 1 ... run setup-brain to migrate") in place of the five. Source: scripts/workspace/status.ts:282-292, checked 2026-11-21.
- The code counts an idea as unfinished only when its frontmatter is readable and its status is exactly `define`; every other case, a parked idea, a missing status and an unknown value included, is `finished: true`. Source: scripts/workspace/effort.ts:47-57, checked 2026-11-21.
- A spec is unfinished when a plan row is open or in-progress. Source: scripts/workspace/effort.ts:73 and scripts/workspace/graph.ts:17-20, checked 2026-11-21.
- The branch selects an effort by name, ID or slug whether it is finished or not, and a selected finished effort prints the stage `finished`. Source: scripts/workspace/effort.ts:89-98 and scripts/workspace/status.ts:117-120, checked 2026-11-21.
- One test shows a finished spec that the branch names printing "Stage: finished", and one test shows that no line names a parked idea when the branch names none; no test covers a parked idea that the branch names. Source: scripts/workspace/__tests__/status.test.ts:138 and 232-238 and command `grep -rnE "parked" scripts/workspace/__tests__/*.ts scripts/hooks/__tests__/*.ts` (status.test.ts lines 138, 186-191, 212-216, 302, 362 and 368 only), checked 2026-11-21.
- The frontier in code is every open row whose blockers are all resolved, as the workspace text says. Source: scripts/workspace/map.ts:165-171, checked 2026-11-21.
- The code accepts a fourth row status, `superseded by NN`: the schema pattern and the row type hold it, a superseded row drops out of the graph, and a row that a superseded row blocks never reaches a wave. Source: scripts/workspace/schema.ts:209-210, scripts/workspace/map.ts:20-22 and 86-89 and scripts/workspace/graph.ts:4-5 and 13-14, checked 2026-11-21.
- Five rows in this worktree's maps hold `superseded by NN`: four in IDEA-016 and one in IDEA-015; both files are uncommitted records of this branch. Source: command `grep -cE "\| *superseded by [0-9]{2} *\|" docs/ideas/IDEA-015-views-mod.md docs/ideas/IDEA-016-effort-blocked-by.md` (1 and 4), checked 2026-11-21.
- A decision record's status is proposed, accepted or superseded by DEC-NNN; a research record's status is in-progress or resolved and its outcome is answered, partial or blocked; a spec's frontmatter has `spec` and `sources` and no status field. Source: scripts/workspace/schema.ts:146-151, 175-176 and 185-195 and scripts/workspace/templates/DEC.md:3, RES.md:3 and 10 and spec.md:1-4, checked 2026-11-21.
- A plan's rows have only the types task and checkpoint, and "Waiting on the user" keeps only frontier rows of the types interview, prototype and ideate, so the line names no plan row. Source: scripts/workspace/schema.ts:216-225 and scripts/workspace/status.ts:29 and 130, checked 2026-11-21.
- Two tests show "Waiting on the user: none" and an empty waiting list for a spec in build. Source: scripts/workspace/__tests__/status.test.ts:353 and scripts/hooks/__tests__/session-start.test.ts:262-270, checked 2026-11-21.
- A checkpoint row is a wait on the user: it "stops the build for the user's review", and "No new task starts until the user says yes". Source: .claude/commands/build.md:80 and skills/incremental-implementation/SKILL.md:226, checked 2026-11-21.
- The Red line is worked out from three inputs: a missing workspace file, the count of `brain check` findings, and blocked research records; the JSON list of red items holds the same three kinds. Source: scripts/workspace/status.ts:259-271 and 300-304, checked 2026-11-21.
- No record template holds a field or a word for a red item. Source: command `grep -rniE "\bred\b" scripts/workspace/templates` (no line, exit 1), checked 2026-11-21.

### The deliveries
- The renderer's first source, `plain-talk/PLAIN-TALK.md`, renders to `output-styles/talk-plain.md`, `GEMINI.md`, `rules/talk-plain.md` and `plain-talk/AGENTS-block.md`, and its block goes into `AGENTS.md`. Source: scripts/plain-talk/render.ts:27-36, checked 2026-11-21.
- The renderer's second source, `protocol/PROTOCOL.md`, renders to `rules/protocol.md` and `protocol/AGENTS-block.md`, and its block goes into `GEMINI.md`. Source: scripts/plain-talk/render.ts:37-47, checked 2026-11-21.
- `bun run plain-talk:render` writes the outputs, and `bun run plain-talk:render -- --check` exits 1 when an output differs from a fresh render. Source: scripts/plain-talk/render.ts:4-5 and 161-170 and package.json:22, checked 2026-11-21.
- The renderer puts the trimmed source body into each template's `{{body}}` slot, so each generated file holds the source text word for word. Source: scripts/plain-talk/render.ts:50-57, checked 2026-11-21.
- Every generated file matches its source in this worktree. Source: command `bun run plain-talk:render -- --check` (printed "every output matches the source text"), checked 2026-11-21.
- `protocol/AGENTS-block.md` repeats the whole protocol in lines 4 to 58 between the `brain:protocol` markers, so its sites are the source sites three lines lower (Session start 8-12, the user-wait rule 17, new-doc 18, the user-only skill 19, the capability check 25-36, sub-agent briefs 40-48, Task end 54-58). Source: protocol/AGENTS-block.md:1-59, checked 2026-11-21.
- `rules/protocol.md` repeats the whole protocol in lines 8 to 62 under frontmatter with `trigger: always_on`, so its sites are the source sites seven lines lower (Session start 10-16, the user-wait rule 21, new-doc 22, the capability check 25-40, sub-agent briefs 42-52, Task end 54-62). Source: rules/protocol.md:1-62, checked 2026-11-21.
- `GEMINI.md` holds the plain-talk title at line 1, the plain-talk body in lines 3 to 38 and the protocol block in lines 40 to 98, so its protocol sites are the source sites 42 lines lower (Session start 45-51, the user-wait rule 56, new-doc 57, the capability check 60-75, sub-agent briefs 77-87, Task end 89-97). Source: GEMINI.md:1-98, checked 2026-11-21.
- The template `plain-talk/templates/protocol-rule.md` holds hand-written frontmatter whose description says the protocol covers how a session starts, checks its skills and servers, briefs sub-agents "and ends a task"; the template `plain-talk/templates/protocol-block.md` holds the hand-written heading `## brain protocol` between the markers. Source: plain-talk/templates/protocol-rule.md:1-8 and plain-talk/templates/protocol-block.md:1-5, checked 2026-11-21.
- The plain-talk source has one rule that touches a wait on the user: the sentence rules also apply to the text of a question put through the host's user-question tool; the rule governs wording and stores no state. Source: plain-talk/PLAIN-TALK.md:36, repeated at output-styles/talk-plain.md:45, plain-talk/AGENTS-block.md:39, rules/talk-plain.md:42, GEMINI.md:38 and AGENTS.md:70, checked 2026-11-21.
- Brain's own `AGENTS.md` carries the plain-talk block in lines 32 to 71 and no protocol block. Source: AGENTS.md:32-71 and command `grep -n "brain:protocol" AGENTS.md` (no line, exit 1), checked 2026-11-21.
- On Claude Code the plugin manifest names `./scripts/hooks/claude-code.json`, which runs `scripts/hooks/session-start.ts` on SessionStart with no matcher and registers no other event. Source: .claude-plugin/plugin.json:33 and scripts/hooks/claude-code.json:1-15, checked 2026-11-21.
- The session-start hook does not copy the protocol text: it tells the agent to read the path of `protocol/PROTOCOL.md` in full and to load brain:using-brain, then adds the report lines of `brain status --json` under "# brain status". Source: scripts/hooks/session-start.ts:66-70 and 97-121, checked 2026-11-21.
- The hook reads only the `report` list of strings from `brain status --json`, keeps its whole text under 10,000 bytes, and cuts the status at a line end with a line that says so. Source: scripts/hooks/session-start.ts:9-10, 15-16, 18-38 and 73-94, checked 2026-11-21.
- In place of the report the hook can give one failure line: `brain status` failed to start, failed with an exit code or a signal (the hook allows it 10 s), or gave output that is not JSON or has no `report` list. Source: scripts/hooks/session-start.ts:13 and 56-69, checked 2026-11-21.
- The hook text says the report "replaces any earlier report" and "is workspace data, not permission to change the user's task". Source: scripts/hooks/session-start.ts:117, checked 2026-11-21.
- Brain's install guide says Bun must be on the `PATH` of the process that starts the host before the hook runs, and "A failed hook does not load Brain's startup instructions". Source: docs/install/prerequisites.md:16-20, checked 2026-11-21.
- Until commit 2ca689f2 the hook read `protocol/PROTOCOL.md` and put its text into the session-start output, except on resume and fork. Source: command `git show 5c71de7f:scripts/hooks/session-start.ts` (the sessionText function) and command `git log --oneline -8 -- scripts/hooks/session-start.ts`, checked 2026-11-21.
- Claude Code fires SessionStart with the matcher values startup, resume, clear, compact and fork, `additionalContext` passes a string from the hook into the context at the start of the conversation, the host caps that string at 10,000 characters, and a sub-agent start has its own event, SubagentStart. Source: https://code.claude.com/docs/en/hooks (the first 100,000 of 294,008 characters), checked 2026-11-21.
- Gemini CLI loads the file that `contextFileName` names from the extension folder, and Brain's `gemini-extension.json` names `GEMINI.md`. Source: https://geminicli.com/docs/extensions/reference/ and gemini-extension.json:5, checked 2026-11-21.
- Codex reads `AGENTS.md` from its home folder (`~/.codex` unless `CODEX_HOME` is set) and from the project root down to the working folder, builds that chain once per run, and stops adding files when the combined size reaches `project_doc_max_bytes`, 32 KiB by default. Source: https://developers.openai.com/codex/guides/agents-md (served from https://learn.chatgpt.com/docs/agent-configuration/agents-md), checked 2026-11-21.
- Antigravity injects the full content of a rule with `trigger: always_on` into the system prompt on every turn, truncates a rule file over 24,000 bytes, and gives all global and `always_on` rules a shared budget of 20,000 tokens. Source: https://antigravity.google/docs/rules/, checked 2026-11-21.
- The generated delivery files are small against these host limits: `rules/protocol.md` 4,120 bytes, `rules/talk-plain.md` 2,190, `protocol/AGENTS-block.md` 4,027, `plain-talk/AGENTS-block.md` 2,218 and `GEMINI.md` 6,190. Source: command `wc -c rules/protocol.md rules/talk-plain.md protocol/AGENTS-block.md plain-talk/AGENTS-block.md GEMINI.md`, checked 2026-11-21.
- Brain's install guides say Antigravity gets the protocol from `rules/protocol.md` the same way as `rules/talk-plain.md`, with `trigger: always_on`, and report one observation of 2026-09-19 that a session listed `rules/talk-plain.md` from the installed plugin. Source: docs/install/antigravity.md:18-21 and 93-96 and rules/protocol.md:1-4, checked 2026-11-21.
- On Codex the setup writer puts `plain-talk/AGENTS-block.md` and `protocol/AGENTS-block.md` into the `AGENTS.md` of the scope the user chose and reads no block when no Codex scope is given; the Codex manifest itself names only `./skills/`. Source: scripts/setup/write.ts:35-38 and 296-300 and .codex-plugin/plugin.json:12, checked 2026-11-21.
- The setup writer never touches a consumer's `CLAUDE.md` or `GEMINI.md`, and with `--check` it writes nothing and exits 1 when a file differs from what a run would write. Source: scripts/setup/write.ts:39-42, checked 2026-11-21.
- Only Claude Code gets the computed status report at session start, because Brain's hooks are for Claude Code only. Source: scripts/lifecycle/hooks.ts:1-6 and README.md:48, checked 2026-11-21.
- The build commands put the plain-talk block at the top of each sub-agent's prompt "because the output style never reaches a sub-agent" (Claude Code) and "because the host's every-turn text never reaches a subagent" (Gemini CLI). Source: .claude/commands/build.md:64 and commands/build.toml:64, checked 2026-11-21.
- The build commands, the research brief, the researcher agent and the agent brief reference do not name the protocol. Source: command `grep -cE "protocol|PROTOCOL" .claude/commands/build.md commands/build.toml skills/interview-me/RESEARCH.md claude/agents/researcher.md references/brain/agent-brief.md` (0 in each), checked 2026-11-21.
- The two status commands send the agent to Session state in `docs/agents/workspace.md`, and the Gemini command's description names the five lines as stage, last step, next step, red items and decisions waiting on the user. Source: .claude/commands/status.md:1-7 and commands/status.toml:1-7, checked 2026-11-21.
- The setup overlap tool reads `protocol/PROTOCOL.md` at run time and uses each protocol section as a home that can cover a line of a consumer's rules file; when the protocol names the router's path it also reads the router's Start section. Source: scripts/setup/overlap.ts:23 and 343-365, checked 2026-11-21.
- An eval scaffold repeats Task end step 3 word for word, and its grader pins the same sentence. Source: evals/setup/migrate-08/scaffold.sh:50-53 and evals/setup/migrate-08/graders/agents-md-kept.md:6, checked 2026-11-21.
- A setup fixture, a copy of another repo's `AGENTS.md`, repeats "Update the spec when its facts change." and the first two sentences of step 5; a test pins the fixture byte for byte by its SHA-1. Source: scripts/setup/__tests__/fixtures/resume/AGENTS.md:69-73 and scripts/setup/__tests__/overlap.test.ts:621-626, checked 2026-11-21.
- A status report in a brain workspace is not marked when the installed workspace document holds older text: `brain status` flags only a missing workspace file or layout 1, and the protocol falls back to the template only when the file or its Session state section is missing. Source: scripts/workspace/status.ts:286-292 and protocol/PROTOCOL.md:7, checked 2026-11-21.

### The lifecycle checks
- `bun run lifecycle:check` runs `scripts/lifecycle/check-refs.ts`, which joins six checks: skill references, retired names, glossary terms, the agent list, hook files and the router. Source: scripts/lifecycle/check-refs.ts:144-153 and package.json:24, checked 2026-11-21.
- retiredNames holds five patterns, and two concern lifecycle words: `/\bPhase:/u`, case-sensitive and tested on every line (allowed on a line that also has `Stage:`), and "phase boundary" (allowed on a line that also names the stage form). Source: scripts/lifecycle/names.ts:32-60 and 168-173, checked 2026-11-21.
- The comment in names.ts fixes the vocabulary: the lifecycle word is stage, and phase stays for a plan's tasks that one checkpoint waits on. Source: scripts/lifecycle/names.ts:18-31, checked 2026-11-21.
- The retired-name check skips paths that start with `tasks/`, `docs/research/`, `docs/intent/` or `CHANGELOG.md`, every path that holds `__tests__/`, vendored files, and a spec folder's plan or todo whose frontmatter has the `migrated` key; `docs/agents/history/`, `docs/decisions/` and `docs/ideas/` are not in that list. Source: scripts/lifecycle/names.ts:87-88, 133-151 and 160-167, checked 2026-11-21.
- The retired-name check reads tracked and untracked files (`git ls-files --cached --others --exclude-standard`), and the CI workflow runs it through `lifecycle:check`. Source: scripts/lifecycle/names.ts:114-116 and .github/workflows/ci.yml:23, checked 2026-11-21.
- glossaryTerms lists 18 terms that `GLOSSARY.md` must define as `**Term**:` entries, among them Effort, Row, Decide row, Research row, Do row, Frontier, Fog, Claim, Protocol, Stage and Phase; Checkpoint is not in the list, and the check tests only that the label is present. Source: scripts/lifecycle/names.ts:62-85 and 179-193, checked 2026-11-21.
- No file of `scripts/lifecycle` outside its tests holds a stored status value. Source: command `grep -nE "\"open\"|in-progress|\"resolved\"|specced|parked|superseded|\bdone\b" scripts/lifecycle/*.ts` (no line, exit 1), checked 2026-11-21.
- No file of this topic holds the word superseded. Source: a case-insensitive search for "superseded" in the 25 files of this topic's file list and in scripts/plain-talk/render.ts (26 files, no hit), checked 2026-11-21.
- The router check parses the Stage and Skill cells of the Quick Reference but tests only skill names: each name in the discovery tree or a Skill column needs a skill folder, and each skill but using-brain needs a Quick Reference row. Source: scripts/lifecycle/router.ts:1-5, 13-14, 47-56 and 101-131, checked 2026-11-21.
- names.test.ts tests the `migrated` exemption with a fixture whose frontmatter is `spec: <ID>` and `migrated: 0.8`, and its exemption test holds a fixture path `tasks/done/x/plan.md`. Source: scripts/lifecycle/__tests__/names.test.ts:54-60 and 98-133, checked 2026-11-21.
- names.test.ts holds old todo fixtures with unticked boxes (`- [ ] T23`, `- [ ] T24`) only to show that history may keep retired names. Source: scripts/lifecycle/__tests__/names.test.ts:184-194 and 274-284, checked 2026-11-21.
- names.test.ts tests that a `Phase: define` line is a finding, that each form of phase boundary is a finding, that a line with the stage form passes, and that history and test folders may keep the old words. Source: scripts/lifecycle/__tests__/names.test.ts:287-317 and 332-352, checked 2026-11-21.
- names.test.ts tests that phase in the plan sense passes, with the sample lines "A checkpoint's phase is the tasks it checks: list them in its Blocked by.", "### Checkpoint: phase 1", "## Phase 2: Charges" and "Phases that share a wave: none.". Source: scripts/lifecycle/__tests__/names.test.ts:319-330, checked 2026-11-21.
- names.test.ts builds a full glossary from glossaryTerms, tests a missing Fog, Stage and Phase entry, and runs both checks on the shipped repo. Source: scripts/lifecycle/__tests__/names.test.ts:19 and 354-396, checked 2026-11-21.
- router.test.ts builds Quick Reference fixtures with the stage cells Define, Any, On-ramp, Plan and Ship, and asserts the parsed pairs and the skill findings; a fixture tree routes "Resuming?" to `brain status` and "Recording a decision?" to a DEC file to show that such arrows name no skill. Source: scripts/lifecycle/__tests__/router.test.ts:22-47, 59-60, 70-99, 107-141 and 158-190, checked 2026-11-21.
- using-brain.test.ts pins seven items in the protocol, in three tests: "including their declared dependencies", "Keep ask-user-question loaded", "unresolved user decision or missing permission" and "Reuse settled requirements" (lines 35-38), "using-brain" (line 47), and a line with `workspace.md` and then `Session state` plus "file or its **Session state** section is missing" (lines 139-140). Source: scripts/lifecycle/__tests__/using-brain.test.ts:33-39, 47 and 138-140, checked 2026-11-21.
- using-brain.test.ts pins that the workspace template holds "interview-me's **Resume**" and "Return the report and selected effort to the caller" and does not hold "With no active work, route the user's request through using-brain". Source: scripts/lifecycle/__tests__/using-brain.test.ts:43-55, checked 2026-11-21.
- using-brain.test.ts pins three router lines for routing by state: "A significant new change has clear intent? → spec-driven-development", "Missing intent or a binding requirement? → interview-me" and "Reuse settled requirements and explicit delegation". Source: scripts/lifecycle/__tests__/using-brain.test.ts:57-63, checked 2026-11-21.
- using-brain.test.ts pins the router's interview section: Resume before continuing an idea, "Save partial answers and each record's next action before a pause", "Reconcile saved answers and results before choosing the next frontier row" and the pattern "the map lives in the conversation". Source: scripts/lifecycle/__tests__/using-brain.test.ts:65-81, checked 2026-11-21.
- using-brain.test.ts pins that the router's prototype section names a prototype row and a DEC file. Source: scripts/lifecycle/__tests__/using-brain.test.ts:83-93, checked 2026-11-21.
- using-brain.test.ts pins the six stage names: a pattern on `references/brain/stage-boundaries.md` and the exact list Define, Plan, Build, Verify, Review, Ship for the Lifecycle Sequence. Source: scripts/lifecycle/__tests__/using-brain.test.ts:95-113 and references/brain/stage-boundaries.md:5, checked 2026-11-21.
- using-brain.test.ts pins where spec-driven-development's Stages 0 to 4 fall in the lifecycle. Source: scripts/lifecycle/__tests__/using-brain.test.ts:115-120, checked 2026-11-21.
- using-brain.test.ts pins the status route: the files `skills/status/SKILL.md` and `skills/status/agents/openai.yaml` do not exist; both status commands hold `docs/agents/workspace.md`, "Session state", "brain status", "file or its **Session state** section is missing" and "Keep any existing workspace settings"; the template holds "## Session state" and "brain status --json"; Brain's own workspace document holds "## Session state". Source: scripts/lifecycle/__tests__/using-brain.test.ts:122-141, checked 2026-11-21.
- No test in `scripts/lifecycle` or `scripts/plain-talk` pins a sentence of Task end. Source: command `grep -rnE "Task end|red items|user waits|waiting for approval|result link" scripts/lifecycle scripts/plain-talk` (no line, exit 1), checked 2026-11-21.
- A test outside the lifecycle folder pins Task end against the shipped protocol: `overlap.test.ts` sets `plugin` to the repo root, expects "Stage files by name." to be covered with the home "protocol: Task end", expects the offered sections of the resume fixture to be Session start, Work through brain, Libraries and Task end, and expects "Update the spec when its facts change." to be removed. Source: scripts/setup/__tests__/overlap.test.ts:15-16, 588-618, 650-653 and 669-677, checked 2026-11-21.
- The other tests of `overlap.test.ts` run on a small protocol of their own, "so the report tests do not move when brain's own protocol text changes", and `overlap.ts.test.ts` writes its protocol into a fixture plugin folder. Source: scripts/setup/__tests__/overlap.test.ts:21-40, 125-128 and 135-141 and scripts/setup/__tests__/overlap.ts.test.ts:16-18, checked 2026-11-21.
- `scripts/lifecycle/__tests__` holds ten test files; the five that the first version of this record did not name are agents.test.ts, check-refs.test.ts, check-refs.ts.test.ts, hooks.test.ts and subagent-block.test.ts. Source: command `ls scripts/lifecycle/__tests__` (10 files), checked 2026-11-21.
- Those five tests hold no status or wait text; "unresolved" in check-refs.test.ts is the finding kind for a skill reference with no skill. Source: command `grep -nE "blocked|resolved|in-progress|pending|waiting|parked|superseded" scripts/lifecycle/__tests__/agents.test.ts scripts/lifecycle/__tests__/check-refs.test.ts scripts/lifecycle/__tests__/check-refs.ts.test.ts scripts/lifecycle/__tests__/hooks.test.ts scripts/lifecycle/__tests__/subagent-block.test.ts` (check-refs.test.ts:51, 65 and 67 only) and scripts/lifecycle/check-refs.ts:103 and scripts/lifecycle/finding.ts:6, checked 2026-11-21.
- subagent-block.test.ts pins that seven texts that start a sub-agent name `plain-talk/AGENTS-block.md`; it pins nothing about the protocol. Source: scripts/lifecycle/__tests__/subagent-block.test.ts:3-23, checked 2026-11-21.
- parallel-build.test.ts matches 21 patterns against three build texts (`.claude/commands/build.md`, `commands/build.toml`, `skills/incremental-implementation/SKILL.md`), among them every task on the frontier at once, the `max_parallel` cap and `BRAIN_MAX_PARALLEL`, one writer of plan rows and todo ticks (line 35), "checkpoint row on the frontier stops the build" (line 37), the `T<NN>-result.md` result file, a reply of the path plus one line, "stops the build, merges nothing" (line 45) and "failed task keeps its worktree" (line 51). Source: scripts/lifecycle/__tests__/parallel-build.test.ts:3-53 and 65-72, checked 2026-11-21.
- parallel-build.test.ts also tests the worktree isolation and fallback texts of the build commands and the dated amendment of a Decisions row in `docs/intent/workspace-and-stateful-interview.md`. Source: scripts/lifecycle/__tests__/parallel-build.test.ts:74-131, checked 2026-11-21.
- spec-folder.test.ts asserts that both build commands hold `specs/SPEC-NNN-<slug>/`, so that work in the active spec folder stays out of the clean-baseline stop. Source: scripts/lifecycle/__tests__/spec-folder.test.ts:32-36, checked 2026-11-21.
- render.test.ts caps `protocol/PROTOCOL.md` at 4,000 characters to leave 6,000 of the hook's 10,000 for the status, and the file holds 3,950 characters now. Source: scripts/plain-talk/__tests__/render.test.ts:311-316 and command `bun -e 'console.log((await Bun.file("protocol/PROTOCOL.md").text()).length)'` (3950), checked 2026-11-21.
- The Decisions row "The protocol's budget" and the plain-talk spec give the same reason for the 4,000-character budget, and the row sends a new rule to using-brain or to the workspace document. Source: docs/intent/workspace-and-stateful-interview.md:756 and specs/SPEC-004-plain-talk/spec.md:170-171, checked 2026-11-21.
- render.test.ts pins the renderer's real source list, that the protocol says "the user", and that it does not hold the name Peter. Source: scripts/plain-talk/__tests__/render.test.ts:269-294 and 318-322, checked 2026-11-21.
- A comment in render.ts says Claude Code gets the protocol from the session-start hook, "which reads the source text itself". Source: scripts/plain-talk/render.ts:38-40, checked 2026-11-21.
- The lifecycle check and the tests of this topic pass in this worktree. Source: commands `bun run lifecycle:check` (no finding) and `bun test scripts/lifecycle scripts/plain-talk` (205 pass, 0 fail), checked 2026-11-21.
- The router's body is 12,937 bytes, under the 24,000-byte limit that the lifecycle check sets for a skill body. Source: scripts/lifecycle/check-refs.ts:22 and 119-128 and command `bun -e` on skills/using-brain/SKILL.md (body bytes 12937), checked 2026-11-21.

### The manifests and the CI workflows
- The Claude Code manifest registers `./.claude/commands`, five agents (four review personas and `./claude/agents/researcher.md`) and the hook file. Source: .claude-plugin/plugin.json:23-33, checked 2026-11-21.
- The other manifests hold no status text: the root `plugin.json` holds a name and a description, `gemini-extension.json` names the context file, `.codex-plugin/plugin.json` names `./skills/`, and the two marketplace files name the plugin. Source: plugin.json:1-4, gemini-extension.json:1-6, .codex-plugin/plugin.json:1-28, .claude-plugin/marketplace.json:1-18 and .agents/plugins/marketplace.json:1-22, checked 2026-11-21.
- `ci.yml` runs on a push to main and on each pull request, and runs typecheck, lint, the format check, `bun test`, the sync check, the render check, `lifecycle:check`, the version check and `bun run validate`; it runs neither `bun run check` nor `workspace:check`. Source: .github/workflows/ci.yml:3-27, checked 2026-11-21.
- `release.yml` runs on a push to main and by hand, and its "Run checks" step runs `bun run check`. Source: .github/workflows/release.yml:17-20 and 52-53, checked 2026-11-21.
- `bun run check` includes `bun run workspace:check`, which is `bun scripts/brain.ts check`. Source: package.json:15 and 26, checked 2026-11-21.
- `evals.yml` runs by hand or once a week, and runs `claude plugin eval` and the eval gate; it runs neither the tests nor the workspace check. Source: .github/workflows/evals.yml:7-31, 63-92 and 131-134, checked 2026-11-21.
- Among the scripts, skills, commands, references, rules and docs that ship or guide work, only package.json holds `workspace:check`. Source: command `grep -rl "workspace:check" package.json scripts skills commands .claude references protocol rules docs/agents docs/maintainers docs/install README.md AGENTS.md` (package.json only), checked 2026-11-21.
- Two texts tell a maintainer to run the repository check by hand: the maintainer contract says "After integration, run the full `bun run check` and `bun run validate` once", and `AGENTS.md` calls `bun run check` the repository check. Source: docs/maintainers/changes.md:26 and AGENTS.md:28, checked 2026-11-21.
- `bun run validate` runs Claude's plugin validator on the plugin and on its manifest, and agy's when it is installed; it reads no workspace record. Source: scripts/validate.ts:14-26, checked 2026-11-21.

### The edit list
- These live files hold a sentence of Task end: the protocol and its three generated copies, `AGENTS.md`, `evals/setup/migrate-08/scaffold.sh` and its grader `agents-md-kept.md`, `scripts/setup/__tests__/fixtures/resume/AGENTS.md`, `scripts/setup/__tests__/overlap.test.ts` and `scripts/setup/overlap.ts`. Source: command `grep -rlE "status and result link|red items and user waits|name it as red|waiting for approval|Update the spec when its facts change|Stage files by name" AGENTS.md README.md GEMINI.md GLOSSARY.md .claude commands claude docs/agents docs/agents.md docs/install docs/maintainers evals output-styles plain-talk protocol references rules scripts skills specs` (10 files), checked 2026-11-21.
- These live files hold the user-wait rule: the protocol and its three generated copies, `AGENTS.md` (as "confirmed requirements"), `docs/maintainers/changes.md` (as "unresolved user choice or missing permission"), `scripts/lifecycle/__tests__/using-brain.test.ts`, `skills/setup-brain/SKILL.md`, `skills/spec-driven-development/SKILL.md` and `skills/using-brain/SKILL.md`. Source: the same command with the pattern `unresolved user decision or missing permission|unresolved user choice or missing permission|Reuse settled requirements|Reuse confirmed requirements` (10 files) and AGENTS.md:22, docs/maintainers/changes.md:16, skills/setup-brain/SKILL.md:10 and skills/spec-driven-development/SKILL.md:91, checked 2026-11-21.
- These live files name Session state: the two status commands, the workspace document and its template, the protocol and its three generated copies, `README.md`, `skills/using-brain/SKILL.md`, `scripts/lifecycle/__tests__/using-brain.test.ts`, `scripts/setup/__tests__/write.ts.test.ts` and `skills/ask-user-question/evals/files/selection-fixture.md`. Source: the same command with the pattern `Session state` (13 files) and README.md:80, scripts/setup/__tests__/write.ts.test.ts:19-20 and 201 and skills/ask-user-question/evals/files/selection-fixture.md:14 and 16, checked 2026-11-21.
- These live files name "Find the active effort": the workspace document and its template, four commands (`.claude/commands/plan.md:7`, `.claude/commands/build.md:9`, `commands/planning.toml:6`, `commands/build.toml:8`), four fixture copies of the workspace document under `scripts/workspace/__tests__/fixtures/`, and a code comment in `scripts/workspace/effort.ts`. Source: the same command with the pattern `Find the active effort` (11 files), checked 2026-11-21.
- The four fixture copies of the workspace document hold older text with the same values: `status: define`, `open`, `in-progress`, the `Blocked by` frontier sentence with `resolved`, and the sentence that an idea with `status: specced` "is done". Source: scripts/workspace/__tests__/fixtures/idea-mid-define/docs/agents/workspace.md:38, 47 and 49 (the same lines in no-active-work and spec-mid-build) and scripts/workspace/__tests__/fixtures/plan-shapes/docs/agents/workspace.md:44, 53 and 55, checked 2026-11-21.
- These live files hold a label or a stage word of the report: the workspace document and its template, `scripts/workspace/status.ts`, seven tests (`status.test.ts`, `status.ts.test.ts`, `session-start.test.ts`, `fresh-repo-resume.test.ts`, `names.test.ts`, `using-brain.test.ts` and `write.ts.test.ts`), two eval graders, one eval reply fixture, three fixture READMEs, one fixture status note, `specs/SPEC-001-evals/spec.md`, `specs/SPEC-009-workspace/spec.md` and its migrated `tasks/todo.md`, and the retired note `docs/agents/history/STATUS.md`. Source: the same command with the pattern `Waiting on the user|no active work|Last step:|Next step:|Stage: (define|build|finished)` (21 files), checked 2026-11-21.
- These live files hold the six-stage list: the protocol and its three generated copies, `references/brain/stage-boundaries.md`, `scripts/lifecycle/__tests__/using-brain.test.ts` and `evals/lifecycle/no-overload/graders/no-lifecycle-skill.md`; the glossary's Stage entry holds the list over two lines. Source: the same command with the pattern `define, plan, build, verify, review` (7 files) and GLOSSARY.md:10-12, checked 2026-11-21.
- These live files name the protocol file by its path: `AGENTS.md`, `scripts/hooks/session-start.ts` and its test, `scripts/lifecycle/__tests__/using-brain.test.ts`, `scripts/plain-talk/render.ts` and its test, `scripts/setup/overlap.ts` and its two tests, `specs/SPEC-004-plain-talk/spec.md`, `specs/SPEC-009-workspace/spec.md` and its `tasks/todo.md`. Source: the same command with the pattern `PROTOCOL\.md` (12 files), checked 2026-11-21.
- The glossary holds status values and wait rules in the text of its entries: the six stages (Stage), `define`, `specced`, `done` and `parked` (Idea), "Each resolved row" (Map), "a status, the rows that block it" (Row), "A row the user resolves" (Decide row), "Every open row whose blocking rows are all resolved" (Frontier), and the checkpoint wait (Phase, Checkpoint). Source: GLOSSARY.md:10-12, 17-21, 33-35, 38-40, 43-45, 57-59, 69-71 and 74-76, checked 2026-11-21.
- The glossary has 19 entries and none for a red item, a user wait or the status report. Source: commands `grep -c '^\*\*' GLOSSARY.md` (19) and `grep -niE "red item|user wait|status report|waiting on the user" GLOSSARY.md` (no line, exit 1), checked 2026-11-21.
- The workspace spec describes an older design of these texts: `docs/STATUS.md` "feeds the next-step and waiting lines", the SessionStart hook "injects the five lines and that text", `/brain:status` "is the `status` skill", and the hook "injects the protocol". Source: specs/SPEC-009-workspace/spec.md:109-115, 200 and 402-408, checked 2026-11-21.
- The plain-talk spec lists the renderer's sources, templates and generated files and the 4,000-character budget of the protocol. Source: specs/SPEC-004-plain-talk/spec.md:80-87, 104-121 and 170-171, checked 2026-11-21.
- The maintainer contract is a required read before a change to instructions, skills, commands or host behavior, and its steps 5 to 7 add verification, an evaluation loop for a skill behavior change, the scoped checks and a Changeset. Source: AGENTS.md:17 and docs/maintainers/changes.md:18-20, checked 2026-11-21.

### Maintainer text, history and the vendored skill
- Brain's `AGENTS.md` tells a maintainer to read the user's current handoff before choosing work from older records, and ranks current user scope and a newer handoff above "historical next-step text". Source: AGENTS.md:7-9, checked 2026-11-21.
- `AGENTS.md` sends an unresolved user decision or missing permission through brain:ask-user-question, says "Reuse confirmed requirements", and points to the commit contract for "verified slices, task results, integration and state commits". Source: AGENTS.md:22-23, checked 2026-11-21.
- `AGENTS.md` says each module has a spec folder with `spec.md`, `tasks/plan.md` and `tasks/todo.md`, and that `tasks/done/context-scope/` retains a completed historical plan. Source: AGENTS.md:30, checked 2026-11-21.
- `AGENTS.md` says "Generated files name their sources" and names both sources in its next sentence; no rendered file holds a line that names its source, and render.ts lists each target of each source. Source: AGENTS.md:16, scripts/plain-talk/render.ts:26-48 and command `grep -niE "generated|rendered from|do not edit|source:" rules/protocol.md rules/talk-plain.md protocol/AGENTS-block.md plain-talk/AGENTS-block.md output-styles/talk-plain.md GEMINI.md` (no line, exit 1), checked 2026-11-21.
- `docs/agents.md` says the consumer workspace document owns state reporting and effort selection, interview-me owns the map and gives one research row to each worker, and the research brief defines the worker's record, continuous progress, outcome, retry condition and reply. Source: docs/agents.md:8-15, checked 2026-11-21.
- `docs/agents.md` says the main session alone writes plan rows and task ticks, the caller owns the combined verdict and the state update, and a review that the host cannot run is reported as pending. Source: docs/agents.md:20-23 and 32-35, checked 2026-11-21.
- `docs/agents.md` says workers return unresolved user choices to the main session, a worker's result gives no permission to close an unrelated row, partial results keep their next action after an interruption, and only the owning workflow decides that its completion conditions hold. Source: docs/agents.md:44-51, checked 2026-11-21.
- `docs/agents/domain.md` names no status value; it tells skills to read the decision records for their area, one `DEC-NNN-<slug>.md` file per decision with `kind: architecture` for an architecture decision, and to flag an output that contradicts a decision record and say "why it is worth reopening". Source: docs/agents/domain.md:9 and 19-21, checked 2026-11-21.
- `docs/agents/history/STATUS.md` is a retired hand-written status note with four prose lines: every phase of the SPEC-009 plan "is closed" and 0.12.1 "shipped", a "Next:" line that ends "Take no open row until that review ends", a "Waiting on the user:" line and a "Later:" line. Source: docs/agents/history/STATUS.md:3-9, checked 2026-11-21.
- The setup writer moves a legacy `docs/STATUS.md` to `docs/agents/history/STATUS.md` byte for byte, and its comment says history never supplies current status. Source: scripts/setup/write.ts:34 and 263-266, checked 2026-11-21.
- The retired note names IDEA-003 and RES-068, and neither file is in the worktree. Source: commands `ls docs/ideas` and `ls docs/research` (no IDEA-003 file, no RES-068 file), checked 2026-11-21.
- `skills/context-engineering/SKILL.md` is vendored, and Brain's rules keep vendored files byte-identical. Source: upstream.lock.json:131-134 and AGENTS.md:14, checked 2026-11-21.
- Three parts of the vendored context-engineering skill are chat-level and name no Brain field: an "Ask before modifying database schema" example, a progress summary in chat ("So far we've completed X, Y, Z. Now working on W."), CONFUSION and MISSING REQUIREMENT question templates, and an inline plan that runs "unless you redirect". Source: skills/context-engineering/SKILL.md:64-68, 113-121 and 253-312, checked 2026-11-21.
- One part of the vendored skill is a rule on durable state: before leaving a session the agent persists the accepted scope and decisions in the spec or plan, "the current task status and the next pending task", and "unresolved questions, risks, and required approvals"; it records that changes are uncommitted, does not infer approval "unless the durable artifact records it", and an external harness must "preserve human approval gates, and distinguish a completed task from a crashed process". Source: skills/context-engineering/SKILL.md:123-137, checked 2026-11-21.
- interview-me makes that rule operative for a session boundary: its Session boundary section tells the agent to follow "context-engineering's boundary rules". Source: skills/interview-me/SKILL.md:207, checked 2026-11-21.

## Follow-ups
- Should the 4,000-character budget of the protocol stay, now that the session-start hook names the protocol's path and no longer carries its text? The decision bears on where a new status or wait rule can go.
- Should a check keep `docs/agents/workspace.md` equal to `skills/setup-brain/workspace.md`, and should the stale comment in `scripts/plain-talk/render.ts` and the line "Generated files name their sources" in `AGENTS.md` be corrected?
- Should `specs/SPEC-009-workspace/spec.md` be brought in line with the current hook, the status procedure and the retired status note, as Task end step 2 asks?
- Does Antigravity load the `rules/` folder of an installed plugin on every turn? The host page read here confirms `always_on` and does not name a plugin's folder.

## Next action
None.
