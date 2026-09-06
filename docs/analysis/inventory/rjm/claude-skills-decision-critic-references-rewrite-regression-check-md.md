---
package: rjm
path: .claude/skills/decision-critic/references/rewrite-regression-check.md
type: reference
bytes: 7241
unit: inv-rjm-114
in_scope_via: .claude/skills/decision-critic/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/decision-critic/references/rewrite-regression-check.md, sha256: 99924952eb755b00631c90a5aa6d1fded4ea201460304a3d916ba0e9e3384c14}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/decision-critic/references/rewrite-regression-check.md

## Purpose — required, verbatim
> "Rewrite wins are usually transient." — .claude/skills/decision-critic/references/rewrite-regression-check.md:14

## Design intent — required
Acts as an unyielding halt criterion against transient rewrite claims. When engineers propose rewrites, refactors, or migrations justified by performance, clarity, or maintainability improvements, initial benchmarks against empty prototype surfaces (v0) look impressive. However, once real-world feature pressures (auth, error handling, telemetry, accessibility, compliance) are re-added (v1), the system regresses to or below baseline. This reference enforces a mandatory 5-question evaluation and halt rule: if baseline, v1 projection, regression budgets, and institutional incentives cannot be answered, the decision must be halted (REVISE or ESCALATE) rather than rubber-stamped.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill decision-critic — .claude/skills/decision-critic/SKILL.md:94
- skill decision-critic — .claude/skills/decision-critic/SKILL.md:107
- skill decision-critic — src/copilot-cli/skills/decision-critic/SKILL.md:94
- skill decision-critic — src/copilot-cli/skills/decision-critic/SKILL.md:107

## Concepts named — required, verbatim
- `Rewrite-Regression Check` — .claude/skills/decision-critic/references/rewrite-regression-check.md:8 — defined here
- `second-system effect` — .claude/skills/decision-critic/references/rewrite-regression-check.md:16 — used here
- `halt criterion` — .claude/skills/decision-critic/references/rewrite-regression-check.md:20 — defined here
- `Verification` — .claude/skills/decision-critic/references/rewrite-regression-check.md:20 — used here
- `Halt Rule` — .claude/skills/decision-critic/references/rewrite-regression-check.md:30 — defined here
- `ESCALATE` — .claude/skills/decision-critic/references/rewrite-regression-check.md:32 — used here
- `REVISE` — .claude/skills/decision-critic/references/rewrite-regression-check.md:32 — used here
- `STAND` — .claude/skills/decision-critic/references/rewrite-regression-check.md:39 — used here
- `programming-advisor` — .claude/skills/decision-critic/references/rewrite-regression-check.md:76 — used here
- `chestertons-fence` — .claude/skills/decision-critic/references/rewrite-regression-check.md:77 — used here
- `Gall's Law` — .claude/skills/decision-critic/references/rewrite-regression-check.md:78 — used here
- `Falsifiability` — .claude/skills/decision-critic/references/rewrite-regression-check.md:79 — used here

## Structure
- `# Rewrite-Regression Check` — .claude/skills/decision-critic/references/rewrite-regression-check.md:8
- `## Principle` — .claude/skills/decision-critic/references/rewrite-regression-check.md:12
- `## Decision Critique Application` — .claude/skills/decision-critic/references/rewrite-regression-check.md:18
- `## Halt Rule` — .claude/skills/decision-critic/references/rewrite-regression-check.md:30
- `## Worked Example 1: Performance Rewrite` — .claude/skills/decision-critic/references/rewrite-regression-check.md:46
- `## Worked Example 2: Clarity Rewrite` — .claude/skills/decision-critic/references/rewrite-regression-check.md:60
- `## Cross-Links` — .claude/skills/decision-critic/references/rewrite-regression-check.md:74

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/decision-critic/references/rewrite-regression-check.md:2 · Frontmatter source `wiki/concepts/Engineering Pitfalls/Rewrite Regression.md` does not exist in repository (`wiki/` directory is absent).

## Observations
- Adapts Casey Muratori's critique of transient rewrite benchmark wins into a structured gating rule (lines 10, 14-16).
- Formulates a 5-question protocol distinguishing v0 empty-surface marketing numbers from v1 full-surface engineering numbers (lines 23-28, 34-35).
- Provides two concrete worked examples: a performance rewrite (Go router to Rust prototype) and a clarity rewrite (legacy billing module), detailing baseline measurement, v0/v1 projection, regression budgets, and institutional incentives (lines 46-73).

## Context cost
7241 bytes (~1810 tokens). Invokes nothing additional.
