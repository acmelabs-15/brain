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
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/code-review/SKILL.md

## Purpose — required, verbatim
> "Two-axis review of the diff between `HEAD` and a fixed point the user supplies:" — skills/engineering/code-review/SKILL.md:6

## Design intent — required
Executes a structured code review across two decoupled, non-interfering axes: Standards (conformance to repository coding guidelines and a fixed 12-smell Fowler baseline) and Spec (faithful execution of originating user requirements or issue tickets). Spawns parallel, isolated subagents for each axis to prevent context pollution, aggregating findings side-by-side without blending or averaging scores so convention compliance cannot mask unmet requirements.

## Phase — required
cross-phase

## Inputs — required
- Git diff between `HEAD` and user-specified fixed point (`git diff <fixed-point>...HEAD`) and commit log (`git log <fixed-point>..HEAD --oneline`)
- Originating issue or spec (retrieved via commit message references, user path, or local docs under `docs/`, `specs/`, or `.scratch/`)
- Repository coding standards (`CODING_STANDARDS.md`, `CONTRIBUTING.md`)
- Fowler code smell baseline (12 heuristics from _Refactoring_ ch.3)

## Outputs — required
- Side-by-side dual-axis report presented under `## Standards` and `## Spec` headings
- Axis summary identifying total findings and the worst issue within each axis, without selecting a single blended winner

## Invokes — required
- doc docs/agents/issue-tracker.md — skills/engineering/code-review/SKILL.md:13
- skill setup-matt-pocock-skills — skills/engineering/code-review/SKILL.md:13

## Invoked by — required
- doc README.md — README.md:212
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:26
- config .claude-plugin/plugin.json — .claude-plugin/plugin.json:37

## Concepts named — required, verbatim
- `code-review` — skills/engineering/code-review/SKILL.md:2 — defined here
- `Standards` — skills/engineering/code-review/SKILL.md:8 — defined here
- `Spec` — skills/engineering/code-review/SKILL.md:9 — defined here
- `parallel sub-agents` — skills/engineering/code-review/SKILL.md:11 — defined here
- `fixed point` — skills/engineering/code-review/SKILL.md:17 — defined here
- `merge-base` — skills/engineering/code-review/SKILL.md:21 — used here
- `issue references` — skills/engineering/code-review/SKILL.md:29 — used here
- `smell baseline` — skills/engineering/code-review/SKILL.md:38 — defined here
- `code smells` — skills/engineering/code-review/SKILL.md:38 — used here
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
- `Standards sub-agent prompt` — skills/engineering/code-review/SKILL.md:60 — defined here
- `Spec sub-agent prompt` — skills/engineering/code-review/SKILL.md:66 — defined here
- `scope creep` — skills/engineering/code-review/SKILL.md:70 — defined here

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
- missing-path · skills/engineering/code-review/SKILL.md:13: references docs/agents/issue-tracker.md which does not exist in repository (actual template is at skills/engineering/setup-matt-pocock-skills/issue-tracker.md).

## Observations
- Embeds Martin Fowler's 12 code smells directly into the Standards subagent prompt payload to provide an out-of-the-box heuristic baseline without requiring external documentation.
- Enforces an explicit under-400-word constraint per subagent report to keep review output digestible.
- Prohibits cross-axis reranking to preserve visibility into whether a defect stems from specification divergence or stylistic violation.

## Context cost
6589 bytes (~1647 tokens). Executable skill specification.
