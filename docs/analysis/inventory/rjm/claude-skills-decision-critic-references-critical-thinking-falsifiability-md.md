---
package: rjm
path: .claude/skills/decision-critic/references/critical-thinking-falsifiability.md
type: reference
bytes: 3267
unit: inv-rjm-114
in_scope_via: .claude/skills/decision-critic/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/decision-critic/references/critical-thinking-falsifiability.md, sha256: 16b92ac278886404388a0459346144c6d32187344443c3d57185d6abf438d1d6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/decision-critic/references/critical-thinking-falsifiability.md

## Purpose — required, verbatim
> "A claim is meaningful only if there is some observation that could prove it false." — .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:11

## Design intent — required
Enforces empirical rigor on proposed benefits and architectural claims. In software decisions, proposals frequently justify changes with subjective or vague assertions ("more maintainable", "cleaner", "faster") that cannot be disproven and therefore cannot be validated. This reference requires defining explicit measures, baselines, success thresholds, and failure conditions before work begins, preventing teams from treating unmeasurable assertions as evidence or defining success post hoc.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill decision-critic — .claude/skills/decision-critic/SKILL.md:104
- reference analyst.md — .claude/skills/review/references/analyst.md:47
- reference analyst.md — src/copilot-cli/skills/review/references/analyst.md:47
- skill decision-critic — src/copilot-cli/skills/decision-critic/SKILL.md:104

## Concepts named — required, verbatim
- `Falsifiability` — .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:7 — defined here
- `Verification` — .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:21 — used here
- `Falsification Test` — .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:42 — defined here
- `UNCERTAIN` — .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:54 — used here
- `VERIFIED` — .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:54 — used here
- `Contrarian Perspectives` — .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:56 — used here
- `Inversion Analysis` — .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:62 — used here
- `Survivorship Bias` — .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:80 — used here
- `Brandolini's Law` — .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:81 — used here
- `Systems Thinking` — .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:82 — used here

## Structure
- `# Falsifiability` — .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:7
- `## Principle` — .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:9
- `## Classic Example` — .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:15
- `## Decision Critic Application` — .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:19
- `### Verification Questions` — .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:23
- `### Red Flags in Decisions` — .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:32
- `### Falsification Test` — .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:42
- `### Contrarian Perspectives (Step 5)` — .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:56
- `### Failure Modes (for Inversion Analysis)` — .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:62
- `## Practical Checklist` — .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:69
- `## Related Models` — .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:78

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:2 · Frontmatter source `wiki/concepts/Critical Thinking/Falsifiability.md` does not exist in the repository (`wiki/` directory is absent).

## Observations
- Defines the 4-part Falsification Test schema (Claim, Measure, Baseline, Success threshold, Failure condition) at lines 47-52.
- Grounded in Karl Popper's falsification criterion for scientific validity (line 13).

## Context cost
3267 bytes (~817 tokens). Invokes nothing additional.
