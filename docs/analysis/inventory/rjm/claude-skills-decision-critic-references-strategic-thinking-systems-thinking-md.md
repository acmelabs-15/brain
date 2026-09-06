---
package: rjm
path: .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md
type: reference
bytes: 3520
unit: inv-rjm-114
in_scope_via: .claude/skills/decision-critic/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md, sha256: d501f1ba7cb7251ea8f3ea5cba3eb2c9d611908ebc12d1a78e3125634c259fd6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md

## Purpose — required, verbatim
> "Understand behavior by examining the whole system, not isolated parts." — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:11

## Design intent — required
Provides a framework for evaluating second- and third-order consequences, non-linear feedback loops, delays, and emergence in decision making. Local optimizations or fixes aimed at isolated symptoms often create worse problems elsewhere or trigger reinforcing loops that compound failures over time. This reference directs critics during challenge steps to trace multi-level downstream effects, identify leverage points, and challenge flawed linear mental models.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill decision-critic — .claude/skills/decision-critic/SKILL.md:106
- skill decision-critic — src/copilot-cli/skills/decision-critic/SKILL.md:106

## Concepts named — required, verbatim
- `Systems Thinking` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:7 — defined here
- `Feedback loops` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:17 — defined here
- `Emergence` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:18 — defined here
- `Delays` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:19 — defined here
- `Leverage points` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:20 — defined here
- `Mental models` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:21 — defined here
- `Brooks's Law` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:21 — used here
- `Challenge` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:25 — used here
- `Goodhart's Law` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:45 — used here
- `Second-Order Effect Analysis` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:47 — defined here
- `Contrarian Perspectives` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:58 — used here
- `Inversion Analysis` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:65 — used here
- `VERIFIED` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:75 — used here
- `Gall's Law` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:86 — used here
- `Chesterton's Fence` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:87 — used here
- `Survivorship Bias` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:88 — used here

## Structure
- `# Systems Thinking` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:7
- `## Principle` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:9
- `## Core Concepts` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:13
- `## Decision Critic Application` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:23
- `### Verification Questions` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:27
- `### Red Flags in Decisions` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:37
- `### Second-Order Effect Analysis` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:47
- `### Contrarian Perspectives (Step 5)` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:58
- `### Failure Modes (for Inversion Analysis)` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:65
- `## Practical Checklist` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:73
- `## Related Models` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:84

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:2 · Frontmatter source `wiki/concepts/Strategic Thinking/Systems Thinking.md` does not exist in repository (`wiki/` directory is absent).

## Observations
- Outlines 5 core systems dynamics: feedback loops, emergence, delays, leverage points, and mental models (lines 15-21).
- Provides a practical 3-tier tracing schema for Second-Order Effect Analysis (First-order -> Second-order -> Third-order) (lines 49-56).

## Context cost
3520 bytes (~880 tokens). Invokes nothing additional.
