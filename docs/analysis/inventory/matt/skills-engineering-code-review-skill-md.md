---
package: matt
path: skills/engineering/code-review/SKILL.md
type: skill
bytes: 6589
unit: inv-matt-37
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/code-review/SKILL.md, sha256: 47f4e52c21694def9c7c11cbfbf891ca35eac7a93e395797515be3c8a409ae50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/code-review/SKILL.md

## Purpose — required, verbatim
> "Two-axis review of the diff between `HEAD` and a fixed point the user supplies:" — skills/engineering/code-review/SKILL.md:6

## Design intent — required
Conducts structured, unpolluted code reviews across two independent axes: Standards (adherence to repository coding standards and a comprehensive Fowler smell baseline) and Spec (verifying faithful implementation of originating issue/spec requirements without scope creep). Dispatches parallel sub-agents for each axis to prevent cognitive interference, then aggregates findings under distinct headings without cross-axis reranking. Serves as the terminal quality gate closing out the `/implement` workflow before commits, as well as a standalone review tool on branches and pull requests.

## Phase — required
cross-phase

## Inputs — required
Fixed-point git reference (commit, branch, tag, `HEAD~5`), repository diff (`git diff <fixed-point>...HEAD`), commit log (`git log <fixed-point>..HEAD --oneline`), originating issue/spec (from commit messages, arguments, or `docs/`, `specs/`, `.scratch/`), and repository coding standards (`CODING_STANDARDS.md`, `CONTRIBUTING.md`).

## Outputs — required
Consolidated markdown review report containing separate `## Standards` and `## Spec` findings, concluding with an itemized summary of findings per axis.

## Invokes — required
- doc docs/agents/issue-tracker.md — skills/engineering/code-review/SKILL.md:13
- skill setup-matt-pocock-skills — skills/engineering/code-review/SKILL.md:13

## Invoked by — required
- doc README.md — README.md:201
- doc README.md — README.md:212
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:26
- skill implement — skills/engineering/implement/SKILL.md:13
- skill tdd — skills/engineering/tdd/SKILL.md:38
- skill implement-spec — skills/in-progress/implement-spec/SKILL.md:31
- doc docs/engineering/code-review.md — docs/engineering/code-review.md:3

## Concepts named — required, verbatim
- `Two-axis review` — skills/engineering/code-review/SKILL.md:6 — defined here
- `Standards` — skills/engineering/code-review/SKILL.md:8 — defined here
- `Spec` — skills/engineering/code-review/SKILL.md:9 — defined here
- `parallel sub-agents` — skills/engineering/code-review/SKILL.md:11 — defined here
- `fixed point` — skills/engineering/code-review/SKILL.md:17 — defined here
- `smell baseline` — skills/engineering/code-review/SKILL.md:38 — defined here
- `Fowler code smells` — skills/engineering/code-review/SKILL.md:38 — used here
- `Mysterious Name` — skills/engineering/code-review/SKILL.md:45 — defined here
- `Duplicated Code` — skills/engineering/code-review/SKILL.md:46 — defined here
- `Feature Envy` — skills/engineering/code-review/SKILL.md:47 — defined here
- `Data Clumps` — skills/engineering/code-review/SKILL.md:48 — defined here
- `Primitive Obsession` — skills/engineering/code-review/SKILL.md:49 — defined here
- `Repeated Switches` — skills/engineering/code-review/SKILL.md:50 — defined here
- `Shotgun Surgery` — skills/engineering/code-review/SKILL.md:51 — defined here
- `Divergent Change` — skills/engineering/code-review/SKILL.md:52 — defined here
- `Speculative Generality` — skills/engineering/code-review/SKILL.md:53 — defined here
- `Message Chains` — skills/engineering/code-review/SKILL.md:54 — defined here
- `Middle Man` — skills/engineering/code-review/SKILL.md:55 — defined here
- `Refused Bequest` — skills/engineering/code-review/SKILL.md:56 — defined here
- `Standards sub-agent` — skills/engineering/code-review/SKILL.md:60 — defined here
- `Spec sub-agent` — skills/engineering/code-review/SKILL.md:66 — defined here

## Structure
- `## Process` — skills/engineering/code-review/SKILL.md:15
- `### 1. Pin the fixed point` — skills/engineering/code-review/SKILL.md:17
- `### 2. Identify the spec source` — skills/engineering/code-review/SKILL.md:25
- `### 3. Identify the standards sources` — skills/engineering/code-review/SKILL.md:34
- `### 4. Spawn both sub-agents in parallel` — skills/engineering/code-review/SKILL.md:58
- `### 5. Aggregate` — skills/engineering/code-review/SKILL.md:74
- `## Why two axes` — skills/engineering/code-review/SKILL.md:80

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — skills/engineering/code-review/SKILL.md:58: Sub-agent prompts do not restrict recursive delegation, leading to runaway sub-agent spawns if sub-agents re-invoke code review (documented in docs/engineering/code-review.md:54-56).
- cross-file-contradiction — skills/engineering/code-review/SKILL.md:21: Uses git diff against HEAD which ignores uncommitted working changes, contradicting implement workflow which invokes review prior to committing (documented in docs/engineering/implement.md:63-65).
- other — skills/engineering/code-review/SKILL.md:2: Skill name collides directly with Claude Code built-in /code-review command, shadowing it or requiring marketplace prefixing (documented in docs/engineering/code-review.md:50-52).

## Observations
Incorporates Fowler's catalog of 12 classic code smells directly into the prompt definition for the Standards sub-agent, providing a universal baseline that operates even when a repository lacks explicit `CODING_STANDARDS.md`. Mandates that repo-documented standards always take precedence over the smell baseline. Enforces that findings across the two axes must never be merged or reranked against each other.

## Context cost
6589 bytes, 88 lines, approximately 1500 tokens.
