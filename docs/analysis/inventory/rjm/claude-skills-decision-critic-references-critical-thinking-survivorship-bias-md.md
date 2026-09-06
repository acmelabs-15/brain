---
package: rjm
path: .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md
type: reference
bytes: 2752
unit: inv-rjm-114
in_scope_via: .claude/skills/decision-critic/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md, sha256: 4fecb4c15025c5d210c0eb5c3d456700fb637c758c8e7fc2cca1ad5ad114192a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md

## Purpose — required, verbatim
> "Survivorship bias occurs when we draw conclusions from winners while ignoring the losers who used the same strategy." — .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:11

## Design intent — required
Prevents false confidence derived from studying only successful outcomes while ignoring failures that used identical approaches. When engineering decisions justify patterns by pointing to high-profile industry successes or past winning projects, they frequently overlook silent project failures, selection bias, and base rates. This reference instructs critics to surface hidden data gaps, examine non-survivors, and question whether evidence is self-selected.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill decision-critic — .claude/skills/decision-critic/SKILL.md:105
- reference decision-rigor.md — .claude/skills/review/references/decision-rigor.md:53
- reference decision-rigor.md — src/copilot-cli/skills/review/references/decision-rigor.md:53
- skill decision-critic — src/copilot-cli/skills/decision-critic/SKILL.md:105

## Concepts named — required, verbatim
- `Survivorship Bias` — .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:7 — defined here
- `Decomposition` — .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:19 — used here
- `Challenge` — .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:19 — used here
- `Contrarian Perspectives` — .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:40 — used here
- `Inversion Analysis` — .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:48 — used here
- `VERIFIED` — .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:57 — used here
- `Confirmation Bias` — .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:67 — used here
- `Base Rate Neglect` — .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:68 — used here
- `Systems Thinking` — .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:69 — used here

## Structure
- `# Survivorship Bias` — .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:7
- `## Principle` — .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:9
- `## Classic Example` — .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:13
- `## Decision Critic Application` — .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:17
- `### Verification Questions` — .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:21
- `### Red Flags in Decisions` — .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:30
- `### Contrarian Perspectives (Step 5)` — .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:40
- `### Failure Modes (for Inversion Analysis)` — .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:48
- `## Practical Checklist` — .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:55
- `## Related Models` — .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:65

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:2 · Frontmatter source `wiki/concepts/Critical Thinking/Survivorship Bias.md` does not exist in the repository (`wiki/` directory is absent).

## Observations
- Uses Abraham Wald's WWII aircraft armor analysis as the foundational mental model (lines 15-16).
- Flags "Company X did this and succeeded" and "Our successful projects all used pattern Y" as classic survivorship bias decision signals (lines 34-35).

## Context cost
2752 bytes (~688 tokens). Invokes nothing additional.
