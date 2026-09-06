---
package: matt
path: docs/engineering/code-review.md
type: doc
bytes: 10553
unit: inv-matt-4
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/engineering/code-review.md, sha256: 124f2e73633621d31e199b6e3ccf05df0fca692c79080f1ebf1222688e098dd0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# docs/engineering/code-review.md

## Purpose — required, verbatim
> "`code-review` reviews the diff between `HEAD` and a fixed point you name (a commit, a branch, a tag, `main`, `HEAD~5`) along two axes. **Standards** asks whether the code follows how this repo writes code. **Spec** asks whether the code does what the originating issue or [spec](https://www.aihero.dev/ai-coding-dictionary/spec) asked for. Each axis runs in its own [sub-agent](https://www.aihero.dev/ai-coding-dictionary/subagent) so neither sees the other's reasoning." — docs/engineering/code-review.md:3

## Design intent — required
Provides comprehensive user-facing documentation and architectural rationale for the `code-review` skill. Explains the two-axis evaluation model (**Standards** and **Spec**), each executed in an isolated sub-agent without mutual reasoning leakage, preventing blended verdicts where conventional compliance hides functional divergence or vice versa. Mandates an explicit fixed reference point (e.g. `main`, `HEAD~5`) and pre-validates git refs to fail fast on empty diffs. Articulates the standards hierarchy where repository documentation (`CODING_STANDARDS.md`, `CONTRIBUTING.md`) strictly overrides the twelve Fowler smell baselines. Addresses critical operational issues including name collisions with Claude Code's built-in `/code-review`, recursive delegation loops spawning runaway sub-agents, confirmation bias in authoring sessions, lack of non-deterministic convergence loops, and the necessity of committed git states for three-dot diffs.

## Phase — required
matt:review

## Inputs — required
- A named fixed point reference (a commit, branch, tag, `main`, `HEAD~5`).
- The git diff (`<fixed-point>...HEAD`, three-dot diff measured from the merge-base).
- Repository standards documentation (`CODING_STANDARDS.md`, `CONTRIBUTING.md`, and similar files).
- Originating issue or specification file (discovered from commit issue references via `docs/agents/issue-tracker.md`, an explicit path argument, or discovery under `docs/`, `specs/`, or `.scratch/`).
- Interactive user answers when prompting for fixed points or spec files.

## Outputs — required
- Two unmerged review reports under `## Standards` and `## Spec`, each identifying breaches, smells, scope creep, or missing requirements with byte-exact citations.
- Worst issue identification per axis (without declaring an overall winner).
- Refusal to start on invalid ref or empty diff.

## Invokes — required
- skill tdd — docs/engineering/code-review.md:15
- skill implement — docs/engineering/code-review.md:16
- skill improve-codebase-architecture — docs/engineering/code-review.md:17
- skill diagnosing-bugs — docs/engineering/code-review.md:18
- doc docs/agents/issue-tracker.md — docs/engineering/code-review.md:28
- skill setup-matt-pocock-skills — docs/engineering/code-review.md:33
- skill to-spec — docs/engineering/code-review.md:91
- skill to-tickets — docs/engineering/code-review.md:91
- skill ask-matt — docs/engineering/code-review.md:94

## Invoked by — required
- doc CHANGELOG.md — CHANGELOG.md:163

## Concepts named — required, verbatim
- `code-review` — docs/engineering/code-review.md:3 — defined here
- `fixed point` — docs/engineering/code-review.md:3, 20 — defined here
- `Standards` — docs/engineering/code-review.md:3 — defined here
- `Spec` — docs/engineering/code-review.md:3 — defined here
- `spec` — docs/engineering/code-review.md:3 — used here
- `sub-agent` — docs/engineering/code-review.md:3 — used here
- `ticket` — docs/engineering/code-review.md:5 — used here
- `agent` — docs/engineering/code-review.md:9 — used here
- `PR` — docs/engineering/code-review.md:9 — used here
- `CODING_STANDARDS.md` — docs/engineering/code-review.md:24 — used here
- `CONTRIBUTING.md` — docs/engineering/code-review.md:24 — used here
- `docs/agents/issue-tracker.md` — docs/engineering/code-review.md:28 — used here
- `smell baseline` — docs/engineering/code-review.md:40 — defined here
- `primary source` — docs/engineering/code-review.md:44 — used here
- `Mysterious Name` — docs/engineering/code-review.md:46 — used here
- `Duplicated Code` — docs/engineering/code-review.md:46 — used here
- `Feature Envy` — docs/engineering/code-review.md:46 — used here
- `Data Clumps` — docs/engineering/code-review.md:46 — used here
- `Primitive Obsession` — docs/engineering/code-review.md:46 — used here
- `Repeated Switches` — docs/engineering/code-review.md:46 — used here
- `Shotgun Surgery` — docs/engineering/code-review.md:46 — used here
- `Divergent Change` — docs/engineering/code-review.md:46 — used here
- `Speculative Generality` — docs/engineering/code-review.md:46 — used here
- `Message Chains` — docs/engineering/code-review.md:46 — used here
- `Middle Man` — docs/engineering/code-review.md:46 — used here
- `Refused Bequest` — docs/engineering/code-review.md:46 — used here
- `context` — docs/engineering/code-review.md:52 — used here
- `harness` — docs/engineering/code-review.md:52 — used here
- `session` — docs/engineering/code-review.md:58 — used here
- `confirmation bias` — docs/engineering/code-review.md:60 — used here
- `three-dot` — docs/engineering/code-review.md:76 — defined here
- `build chain` — docs/engineering/code-review.md:88 — defined here

## Structure
- ## What it does — docs/engineering/code-review.md:1
- ## When to reach for it — docs/engineering/code-review.md:7
- ## Prerequisites — docs/engineering/code-review.md:22
- ## The two axes — docs/engineering/code-review.md:35
- ## Common questions — docs/engineering/code-review.md:48
- ## It's working if — docs/engineering/code-review.md:78
- ## Where it fits — docs/engineering/code-review.md:86

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — docs/engineering/code-review.md:52 — Command name collision with Claude Code's built-in `/code-review` tool (which hunts bugs in diffs), causing shadow conflicts where marketplace installations require namespace prefixing (`mattpocock-skills:`) and local installs override the built-in.
- script-bug — docs/engineering/code-review.md:56 — Recursive delegation bug: sub-agent prompts do not forbid delegation, allowing spawned sub-agents to invoke `/code-review` again and fan out into runaway agent loops of 50+ agents.
- other — docs/engineering/code-review.md:60 — Confirmation bias hazard: running reviews in the same session that authored the code causes the reviewing agent to inherit the author's assumptions rather than conducting an independent review.
- doc-drift — docs/engineering/code-review.md:68 — Sub-agent findings are aggregated verbatim without re-verifying claims against source files, occasionally citing incorrect locations or overstating impacts.
- doc-drift — docs/engineering/code-review.md:72 — Non-deterministic findings: the Standards axis smell evaluations produce new findings across repeated runs with no convergence guarantee.
- doc-drift — docs/engineering/code-review.md:76 — Uncommitted working-tree and staged changes are completely invisible to reviews because git diff `<fixed-point>...HEAD` evaluates only committed changes from the merge base.

## Observations
Separates repository standards from spec alignment and insists on worst-issue summaries per axis without declaring an overall winner, preventing passing standards from masking missing requirements. Emphasizes that repository documentation is the primary source and always overrides Fowler code smell baselines. Explicitly warns against running reviews in the authoring context. Note on three-dot diff: at line 76, the source defines the diff mechanism as `three-dot` (`It diffs \`<fixed-point>...HEAD\`, three-dot`), measuring exclusively from the merge base.

## Context cost
10553 bytes, approximately 2550 tokens.
