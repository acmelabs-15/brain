---
package: rjm
path: docs/when-to-use.md
type: doc
bytes: 7161
unit: inv-rjm-194
in_scope_via: README.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: docs/when-to-use.md, sha256: b1010165adfde7358c21c0b295d842c982690d7c5a74e28d1e830df2346ba6b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# docs/when-to-use.md

## Purpose — required, verbatim
> "This is a fitness guide. It maps task shapes to the lifecycle commands (`/spec`, `/plan`, `/build`, `/test`, `/review`, `/ship`) so you run the right phases for the work in front of you and skip the ones that add cost without value." — docs/when-to-use.md:3-6

## Design intent — required
Establishes a fitness rubric and decision guide for tailoring lifecycle command execution to task shape, preventing both insufficient rigor on critical paths and bureaucratic overhead on trivial changes. Using a fitness matrix mapping eight distinct task shapes (scaled delivery, compliance/guardrail change, defect mitigation, hotfix, customer-facing generated artifact, exploratory spike, documentation-only change, and context black hole) to the six commands (`/spec`, `/plan`, `/build`, `/test`, `/review`, `/ship`), it draws on repository retrospectives (such as PR #1887, PR #1989, and Issue #2205) to illustrate the engineering costs of skipping necessary phases. It provides explicit anti-recommendations (when full lifecycle is overkill: typo/comment fix, reverting known-bad commits, mechanical renames, minor dependency bumps, throwaway scripts) and a four-question heuristic ordering for uncertain shapes. Without this guide, developers and agents would either default to running heavy ceremonies for minor fixes or bypass vital validation and review phases on high-risk changes.

## Phase — required
cross-phase

## Inputs — required
- Task shapes and engineering work requests (docs/when-to-use.md:3, 25-34, 76).
- Incident retrospectives under `.agents/retrospective/` documenting real failure modes (docs/when-to-use.md:22-23, 99).
- Command mechanics from `docs/workflow-commands.md` (docs/when-to-use.md:13, 94).
- Agent routing guidance from `docs/task-classification-guide.md` (docs/when-to-use.md:14, 95).
- Ideation workflows from `docs/ideation-workflow.md` (docs/when-to-use.md:34, 97).

## Outputs — required
- Selected subset of lifecycle phases/commands to execute (`/spec`, `/plan`, `/build`, `/test`, `/review`, `/ship`) calibrated to task risk (docs/when-to-use.md:4, 10, 19-21, 26).

## Invokes — required
- command /spec — docs/when-to-use.md:4
- command /plan — docs/when-to-use.md:4
- command /build — docs/when-to-use.md:4
- command /test — docs/when-to-use.md:4
- command /review — docs/when-to-use.md:4
- command /ship — docs/when-to-use.md:4
- doc workflow-commands.md — docs/when-to-use.md:13
- doc task-classification-guide.md — docs/when-to-use.md:14
- doc ideation-workflow.md — docs/when-to-use.md:97

## Invoked by — required
- README.md — README.md:544
- docs/task-classification-guide.md — docs/task-classification-guide.md:382

## Concepts named — required, verbatim
- `fitness guide` — docs/when-to-use.md:3 — defined here
- `lifecycle commands` — docs/when-to-use.md:3 — defined here
- `task shapes` — docs/when-to-use.md:3 — defined here
- `fitness table` — docs/when-to-use.md:17 — defined here
- `Scaled delivery` — docs/when-to-use.md:27 — defined here
- `Compliance or guardrail change` — docs/when-to-use.md:28 — defined here
- `Defect mitigation` — docs/when-to-use.md:29 — defined here
- `Hotfix` — docs/when-to-use.md:30 — defined here
- `Customer-facing generated artifact` — docs/when-to-use.md:31 — defined here
- `Exploratory spike` — docs/when-to-use.md:32 — defined here
- `Documentation-only change` — docs/when-to-use.md:33 — defined here
- `Context black hole` — docs/when-to-use.md:34 — defined here
- `Quick Fix Workflow` — docs/when-to-use.md:30 — used here
- `Research-First Workflow` — docs/when-to-use.md:32 — used here
- `Anti-recommendations` — docs/when-to-use.md:36 — defined here
- `The deciding questions` — docs/when-to-use.md:74 — defined here

## Structure
- # When to Use the Lifecycle Commands — docs/when-to-use.md:1
- ## How to read the fitness table — docs/when-to-use.md:17
- ## Anti-recommendations: when the full lifecycle is overkill — docs/when-to-use.md:36
- ### Typo, comment, or single-line doc fix — docs/when-to-use.md:42
- ### Reverting a known-bad commit — docs/when-to-use.md:49
- ### Mechanical rename across files — docs/when-to-use.md:55
- ### Dependency version bump (patch or minor, no API change) — docs/when-to-use.md:62
- ### One-off throwaway script — docs/when-to-use.md:68
- ## The deciding questions — docs/when-to-use.md:74
- ## Related documents — docs/when-to-use.md:92

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Grounds process discipline in concrete negative production incidents: PR #1887 (69 commits from skipping spec on regex contracts), PR #1989 (21 commits from skipping spec on fix-the-fix), and Issue #2205 (33-day customer outage from skipping runtime test of a generated hooks artifact). Emphasizes that "the cheap mistake is running one extra phase. The expensive mistake is skipping /test or /review on something a customer touches."

## Context cost
7161 bytes, ~1790 tokens.
