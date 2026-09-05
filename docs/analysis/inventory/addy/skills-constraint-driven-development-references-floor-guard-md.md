---
package: addy
path: skills/constraint-driven-development/references/floor-guard.md
type: reference
bytes: 5851
unit: inv-addy-40
aliases: []
memo_inputs:
  - {path: skills/constraint-driven-development/references/floor-guard.md, sha256: dba15dad8f5a5cbae464ec8457e6dd014a7bcb3ad13a360a6908d54991a5415e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/constraint-driven-development/references/floor-guard.md

## Purpose — required, verbatim
> "Every numbered dimension in `CONSTRAINTS.md` maps to a de facto tool (Step 4). The **floor** does not: it is a diff-scoped check for the five moves in Step 6, and without a shipped reference every agent invents its own, so two runs (or a Python repo and a Go one) produce two different guards. That is the exact non-determinism this skill exists to remove." — skills/constraint-driven-development/references/floor-guard.md:3

## Design intent — required
Provides a concrete, diff-scoped Node.js reference implementation of the floor guard check for `CONSTRAINTS.md`. Without this shipped reference, agents would invent ad-hoc implementations resulting in inconsistent enforcement of quality thresholds across runs and language stacks. It defines a strict exit-code contract and regex heuristics to detect bar-lowering moves (suppression comments, relaxed test assertions/skips, stubs, and lowered numerical constraints) between the merge base and the working tree.

## Phase — required
cross-phase

## Inputs — required
- Diff between the merge base and the working tree (added and removed lines, plus untracked files via `git ls-files --others --exclude-standard`)
- Optional base reference flag `--base <ref>` (default: `origin/main`)
- Optional `.constraintsignore` file for path exemptions

## Outputs — required
- Standard output reports clean status (`floor-guard: clean`) or standard error reports floor violations with rule, file, and code snippet
- Exit code: `0` clean, `1` at least one floor violation, `2` execution failure (no merge base against base ref or not a git repo)

## Invokes — required
none

## Invoked by — required
- skill constraint-driven-development — skills/constraint-driven-development/SKILL.md:216

## Concepts named — required, verbatim
- `CONSTRAINTS.md` — skills/constraint-driven-development/references/floor-guard.md:3 — used here
- `floor` — skills/constraint-driven-development/references/floor-guard.md:3 — defined here
- `merge base` — skills/constraint-driven-development/references/floor-guard.md:9 — used here
- `working tree` — skills/constraint-driven-development/references/floor-guard.md:9 — used here
- `floor violation` — skills/constraint-driven-development/references/floor-guard.md:11 — defined here
- `tracked exception` — skills/constraint-driven-development/references/floor-guard.md:91 — used here
- `.constraintsignore` — skills/constraint-driven-development/references/floor-guard.md:98 — defined here
- `Escalation Path` — skills/constraint-driven-development/references/floor-guard.md:99 — used here

## Structure
- `# Floor guard: reference implementation`
- `## Contract`
- `## Reference (Node, ~stack-agnostic patterns)`
- `## Adapting it`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Demonstrates diff-scoped checking against 5 bar-lowering moves: silenced checker comments, easier tests, stubs/TODOs, new exception rows, and lowered numerical thresholds. Emphasizes redaction of secret values, strict non-zero exit on missing merge base, and regex-shallow patterns designed for fast per-diff execution.

## Context cost
5851 bytes (~1463 tokens). Loads no external files.
