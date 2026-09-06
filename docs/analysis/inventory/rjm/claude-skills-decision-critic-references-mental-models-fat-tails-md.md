---
package: rjm
path: .claude/skills/decision-critic/references/mental-models-fat-tails.md
type: reference
bytes: 4857
unit: inv-rjm-114
in_scope_via: .claude/skills/decision-critic/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/decision-critic/references/mental-models-fat-tails.md, sha256: f4af14542219adb7a4adc77a2aa8dc73cd33cffd6526a255d2384da7772a27f3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/decision-critic/references/mental-models-fat-tails.md

## Purpose — required, verbatim
> "A fat-tailed distribution is one where extreme outcomes, the events out at the tails, happen far more often than a normal (Gaussian) distribution predicts." — .claude/skills/decision-critic/references/mental-models-fat-tails.md:11

## Design intent — required
Protects systems against catastrophic tail events and underestimation of risk caused by assuming thin-tailed Gaussian distributions in software engineering and security. Planning capacity, on-call budgets, MTTR, and risk mitigation based on averages or medians ignores the reality that extreme outliers (the 10x overrun, the 30x incident, the 1% catastrophic failure) dominate outcomes. This reference equips decision critics to distrust Gaussian risk metrics, plan for tail events, and evaluate asymmetric upside bets.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill decision-critic — .claude/skills/decision-critic/SKILL.md:101
- skill decision-critic — src/copilot-cli/skills/decision-critic/SKILL.md:101

## Concepts named — required, verbatim
- `Fat Tails` — .claude/skills/decision-critic/references/mental-models-fat-tails.md:7 — defined here
- `Gaussian` — .claude/skills/decision-critic/references/mental-models-fat-tails.md:11 — used here
- `Inversion` — .claude/skills/decision-critic/references/mental-models-fat-tails.md:21 — used here
- `Challenge` — .claude/skills/decision-critic/references/mental-models-fat-tails.md:21 — used here
- `Contrarian Perspectives` — .claude/skills/decision-critic/references/mental-models-fat-tails.md:42 — used here
- `Inversion Analysis` — .claude/skills/decision-critic/references/mental-models-fat-tails.md:50 — used here
- `Operating Moves` — .claude/skills/decision-critic/references/mental-models-fat-tails.md:57 — defined here
- `VERIFIED` — .claude/skills/decision-critic/references/mental-models-fat-tails.md:65 — used here
- `Probabilistic Thinking` — .claude/skills/decision-critic/references/mental-models-fat-tails.md:74 — used here
- `Time Horizon Mismatch` — .claude/skills/decision-critic/references/mental-models-fat-tails.md:75 — used here
- `Survivorship Bias` — .claude/skills/decision-critic/references/mental-models-fat-tails.md:76 — used here

## Structure
- `# Fat Tails` — .claude/skills/decision-critic/references/mental-models-fat-tails.md:7
- `## Principle` — .claude/skills/decision-critic/references/mental-models-fat-tails.md:9
- `## Decision Critic Application` — .claude/skills/decision-critic/references/mental-models-fat-tails.md:19
- `### Verification Questions` — .claude/skills/decision-critic/references/mental-models-fat-tails.md:23
- `### Red Flags in Decisions` — .claude/skills/decision-critic/references/mental-models-fat-tails.md:32
- `### Contrarian Perspectives (Step 5)` — .claude/skills/decision-critic/references/mental-models-fat-tails.md:42
- `### Failure Modes (for Inversion Analysis)` — .claude/skills/decision-critic/references/mental-models-fat-tails.md:50
- `## Operating Moves` — .claude/skills/decision-critic/references/mental-models-fat-tails.md:57
- `## Practical Checklist` — .claude/skills/decision-critic/references/mental-models-fat-tails.md:63
- `## Related Models` — .claude/skills/decision-critic/references/mental-models-fat-tails.md:72
- `## Sources` — .claude/skills/decision-critic/references/mental-models-fat-tails.md:78

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/decision-critic/references/mental-models-fat-tails.md:2 · Frontmatter source `wiki/concepts/Mental Models/Fat Tails.md` does not exist in repository (`wiki/` directory is absent).

## Observations
- Draws on Nassim Taleb and Benoit Mandelbrot to critique Gaussian risk metrics like Value-at-Risk and Sharpe ratios in software engineering and security (lines 80-82).
- Prescribes three concrete operating moves: plan to the tail not the median, distrust Gaussian risk metrics, and take asymmetric upside bets (lines 58-61).

## Context cost
4857 bytes (~1214 tokens). Invokes nothing additional.
