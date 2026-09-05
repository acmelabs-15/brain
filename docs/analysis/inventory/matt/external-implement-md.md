---
package: matt
path: external/implement.md
type: external-doc
bytes: 362825
unit: inv-matt-19
deprecated: false
aliases: []
memo_inputs:
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/implement.md

## Purpose — required, verbatim
> "Build a finished spec into code, test-first." — external/implement.md:2

## Design intent — required
`implement` builds work that has already been decided, turning an upstream ticket, spec, or settled conversational plan into code, tests, and a git commit without reopening or redesigning the plan. It prevents an agent from redesigning settled architecture or scope during implementation, keeping execution faithful to upstream decisions. It enforces a disciplined test-driven implementation cycle by driving `tdd` at pre-agreed seams (public boundaries), typechecking frequently, running the full test suite, running `code-review`, and committing the vertical slice to the current branch. What would be lost without it: without `implement`, pointing a fresh coding agent at a feature with a prompt like "build this" often leads to the agent redesigning the solution on the fly, skipping test-first discipline, creating brittle tests coupled to internal implementation rather than public seams, and failing to verify the work against repository standards.

## Phase — required
matt:The Main Flow ("The Main Flow" — external/implement.md:5; "is the build step of the main chain, second from the end:" — external/implement.md:71)

## Inputs — required
- Originating specification, ticket, or agreed plan:
  - "ticket" — external/implement.md:25
  - "spec" — external/implement.md:25
  - "plan you just agreed in the conversation" — external/implement.md:25
  - "ticket on the tracker" — external/implement.md:30
  - "issue URL or" — external/implement.md:61
- Pre-agreed seams:
  - "pre-agreed seams" — external/implement.md:39
  - "the public boundary you observe behaviour at, without reaching inside." — external/implement.md:46
- Active git branch:
  - "commits to the branch you are on." — external/implement.md:33
- Tracker configuration:
  - "configured by" — external/implement.md:34 (configured by `setup-matt-pocock-skills`)

## Outputs — required
- Git commit on current branch:
  - "commits to the current branch." — external/implement.md:25
  - "turn that into a commit." — external/implement.md:26
  - "a commit on your current branch" — external/implement.md:67
  - "vertical slice through every layer" — external/implement.md:68
- Code and tests:
  - "writes the code, drives" — external/implement.md:25
- Verification runs:
  - "Typecheck often, run single test files as it goes." — external/implement.md:40
  - "Run the full test suite once, at the end." — external/implement.md:41
  - "then commit to the current branch." — external/implement.md:42
- Non-outputs (explicitly omitted by design):
  - "has no completion step. It ends at the commit and never touches the work item" — external/implement.md:50
  - "does not act on the findings" — external/implement.md:50
  - "does not tick the" — external/implement.md:50
  - "boxes on the originating issue." — external/implement.md:50
  - "Not built in. It commits straight to the current branch" — external/implement.md:54 (no pull request mode)

## Invokes — required
- skill tdd — external/implement.md:25
- skill code-review — external/implement.md:25
- skill ask-matt — external/implement.md:28
- skill to-tickets — external/implement.md:28
- skill grill-with-docs — external/implement.md:30
- skill grill-me — external/implement.md:30
- skill setup-matt-pocock-skills — external/implement.md:34
- skill wayfinder — external/implement.md:74
- skill to-spec — external/implement.md:74

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `implement` — external/implement.md:25 — defined here
- `The Main Flow` — external/implement.md:5 — used here
- `ticket` — external/implement.md:25 — used here
- `spec` — external/implement.md:25 — used here
- `plan` — external/implement.md:25 — used here
- `conversation` — external/implement.md:25 — used here
- `tdd` — external/implement.md:25 — used here
- `code-review` — external/implement.md:25 — used here
- `agent` — external/implement.md:26 — used here
- `disable-model-invocation` — external/implement.md:28 — used here
- `ask-matt` — external/implement.md:28 — used here
- `to-tickets` — external/implement.md:28 — used here
- `session` — external/implement.md:30 — used here
- `clearing` — external/implement.md:30 — used here
- `grill-with-docs` — external/implement.md:30 — used here
- `grill-me` — external/implement.md:30 — used here
- `model` — external/implement.md:31 — used here
- `SKILL.md` — external/implement.md:31 — used here
- `setup-matt-pocock-skills` — external/implement.md:34 — used here
- `red-green slice` — external/implement.md:39 — used here
- `tracer-bullet` — external/implement.md:44 — used here
- `vertical slice` — external/implement.md:44 — used here
- `context window` — external/implement.md:44 — used here
- `seam` — external/implement.md:46 — defined here
- `public boundary` — external/implement.md:46 — defined here
- `pre-agreed` — external/implement.md:47 — defined here
- `acceptance criteria` — external/implement.md:49 — used here
- `GitHub Issues` — external/implement.md:50 — used here
- `frontier` — external/implement.md:50 — used here
- `subagent` — external/implement.md:52 — used here
- `Git worktrees` — external/implement.md:52 — used here
- `worktrees` — external/implement.md:52 — used here
- `fixed-point` — external/implement.md:56 — used here
- `tokens` — external/implement.md:59 — used here
- `effort` — external/implement.md:59 — used here
- `fail-closed` — external/implement.md:61 — used here
- `main chain` — external/implement.md:71 — used here
- `blocking edges` — external/implement.md:73 — used here
- `wayfinder` — external/implement.md:74 — used here
- `to-spec` — external/implement.md:74 — used here
- `map` — external/implement.md:74 — used here
- `What it does` — external/implement.md:24 — used here
- `When to reach for it` — external/implement.md:27 — used here
- `Prerequisites` — external/implement.md:32 — used here
- `What one run does` — external/implement.md:35 — used here
- `Pre-agreed seams` — external/implement.md:45 — used here
- `Common questions` — external/implement.md:48 — used here
- `its-working-if` — external/implement.md:62 — used here
- `Where it fits` — external/implement.md:70 — used here

## Structure
- "The /implement Skill" — external/implement.md:24 (h1)
- "What it does" — external/implement.md:24 (h2)
- "When to reach for it" — external/implement.md:27 (h2)
- "Prerequisites" — external/implement.md:32 (h2)
- "What one run does" — external/implement.md:35 (h2)
- "Pre-agreed seams" — external/implement.md:45 (h2)
- "Common questions" — external/implement.md:48 (h2)
- "It&#x27;s working if" — external/implement.md:62 (h2)
- "Where it fits" — external/implement.md:70 (h2)
- "Related reading" — external/implement.md:75 (h2)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan: "https://aihero.dev/skills-implement" — external/implement.md:1 — external documentation snapshot is not referenced or invoked by any file in the source repository.
- doc-drift: "nudges the" — external/implement.md:31 and "to go hunting for a file that doesn&#x27;t exist." — external/implement.md:31 — in-repo SKILL.md prompt leads model to search for missing files when the plan lives only in conversation context.
- cross-file-contradiction: "reviews" — external/implement.md:56, "excludes staged and working-tree changes." — external/implement.md:56, and "runs it before committing, so unless an interim commit already exists there is nothing in that diff to review." — external/implement.md:56 — implement invokes code-review before committing, but code-review checks committed diff against HEAD, observing an empty diff.
- other: "The word &quot;pre-agreed&quot; is doing real work, and it is also the skill&#x27;s weakest joint." — external/implement.md:47 and "is the skill that asks, and it refuses to write a test at an unconfirmed seam." — external/implement.md:47 — missing seam agreement mechanism causes tdd to refuse or degrades the run into unstructured coding.
- other: "has no completion step. It ends at the commit and never touches the work item" — external/implement.md:50, "does not act on the findings" — external/implement.md:50, and "boxes on the originating issue." — external/implement.md:50 — lacks ticket completion, leaving issues open and criteria unchecked, which stalls dependency chains.
- other: "One invocation, one ticket." — external/implement.md:52 and "worse than unsupported:" — external/implement.md:52 — lack of concurrency control causes git index/stash collisions across parallel sessions in a single repository.
- other: "is resolved against whatever numbered list the agent can see" — external/implement.md:61 and "The resolution is confident rather than fail-closed" — external/implement.md:61 — ticket reference resolution is not fail-closed and can bind to unrelated numbered lists in conversation context.

## Observations
- The page is an HTML snapshot of `https://aihero.dev/skills-implement` fetched 2026-09-05, built using Next.js with Tailwind CSS styling (`ah-prose-*`).
- Details the install command via the skills CLI: `npx skills@latest add mattpocock/skills --skill=implement` (external/implement.md:24).
- Highlights the architectural separation between planning/decision skills (`grill-with-docs`, `to-spec`, `to-tickets`) and execution (`implement`), emphasizing that `implement` assumes settled intent and never reopens debate.
- Identifies the core unit of work as a tracer-bullet vertical slice sized for a single fresh context window, requiring context clearing between tickets.
- Exposes critical integration challenges in the workflow: code-review diff visibility before commit, lack of tracker writeback/completion, and lack of multi-session git isolation.

## Context cost
362825 bytes (~90706 tokens at 4 bytes/token). Follows 0 invoked files. Total: 362825 bytes (~90706 tokens).
