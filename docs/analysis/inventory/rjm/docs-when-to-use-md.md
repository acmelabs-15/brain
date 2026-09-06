---
package: rjm
path: docs/when-to-use.md
type: doc
bytes: 7161
unit: inv-rjm-194
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: docs/when-to-use.md, sha256: b1010165adfde7358c21c0b295d842c982690d7c5a74e28d1e830df2346ba6b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/when-to-use.md

## Purpose — required, verbatim
> "This is a fitness guide. It maps task shapes to the lifecycle commands (`/spec`, `/plan`, `/build`, `/test`, `/review`, `/ship`) so you run the right phases for the work in front of you and skip the ones that add cost without value." — docs/when-to-use.md:3-6

## Design intent — required
Provides a decision framework and fitness rubric for selecting appropriate subsets of the six lifecycle commands (`/spec`, `/plan`, `/build`, `/test`, `/review`, `/ship`) based on the specific shape and risk profile of a task. It prevents dogmatic over-engineering on trivial tasks (e.g. typos, simple doc updates, mechanical renames) while enforcing rigorous full-chain execution where skipping early phases would lead to catastrophic churn (such as spec-less guardrail modifications or hotfixes that repeat prior failures).

## Phase — required
cross-phase

## Inputs — required
- "Each row is a task shape. The columns are the six lifecycle commands." — docs/when-to-use.md:19
- "[docs/workflow-commands.md](./workflow-commands.md)" — docs/when-to-use.md:13
- "[docs/task-classification-guide.md](./task-classification-guide.md)" — docs/when-to-use.md:14
- "[docs/ideation-workflow.md](./ideation-workflow.md)" — docs/when-to-use.md:97
- "`.agents/retrospective/`" — docs/when-to-use.md:99

## Outputs — required
- "it tells you which phases to run before you route." — docs/when-to-use.md:15
- "How to read the fitness table" — docs/when-to-use.md:17

## Invokes — required
- command /spec — docs/when-to-use.md:4
- command /plan — docs/when-to-use.md:4
- command /build — docs/when-to-use.md:4
- command /test — docs/when-to-use.md:4
- command /review — docs/when-to-use.md:4
- command /ship — docs/when-to-use.md:4
- doc docs/workflow-commands.md — docs/when-to-use.md:13
- doc docs/task-classification-guide.md — docs/when-to-use.md:14

## Invoked by — required
- doc docs/when-to-use.md — README.md:544
- doc docs/when-to-use.md — docs/task-classification-guide.md:382

## Concepts named — required, verbatim
`fitness guide` — docs/when-to-use.md:3 — defined here
`lifecycle commands` — docs/when-to-use.md:3 — used here
`task shapes` — docs/when-to-use.md:3 — defined here
`fitness table` — docs/when-to-use.md:17 — defined here
`Scaled delivery` — docs/when-to-use.md:27 — defined here
`Compliance or guardrail change` — docs/when-to-use.md:28 — defined here
`Defect mitigation` — docs/when-to-use.md:29 — defined here
`Hotfix` — docs/when-to-use.md:30 — defined here
`Customer-facing generated artifact` — docs/when-to-use.md:31 — defined here
`Exploratory spike` — docs/when-to-use.md:32 — defined here
`Documentation-only change` — docs/when-to-use.md:33 — defined here
`Context black hole` — docs/when-to-use.md:34 — defined here
`Anti-recommendations` — docs/when-to-use.md:36 — defined here
`deciding questions` — docs/when-to-use.md:74 — defined here

## Structure
# When to Use the Lifecycle Commands — docs/when-to-use.md:1
## How to read the fitness table — docs/when-to-use.md:17
## Anti-recommendations: when the full lifecycle is overkill — docs/when-to-use.md:36
### Typo, comment, or single-line doc fix — docs/when-to-use.md:42
### Reverting a known-bad commit — docs/when-to-use.md:49
### Mechanical rename across files — docs/when-to-use.md:55
### Dependency version bump (patch or minor, no API change) — docs/when-to-use.md:62
### One-off throwaway script — docs/when-to-use.md:68
## The deciding questions — docs/when-to-use.md:74
## Related documents — docs/when-to-use.md:92

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Directly grounds lifecycle fitness decisions in historical project failures from `.agents/retrospective/` (e.g. PR #1887 push-guard requiring 69 commits and 11+ review rounds due to skipping `/spec`; PR #1989 reproducing three prior failure modes over 21 commits due to skipping spec-against-current-state; Issue #2205 wedging customer environments for 33 days due to skipping runtime contract tests). Emphasizes that skipping phases must be an explicit, conscious choice rather than an accidental shortcut.

## Context cost
7161 bytes, approximately 1790 tokens.
