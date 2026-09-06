---
package: rjm
path: .claude/skills/decision-critic/references/mental-models-galls-law.md
type: reference
bytes: 2396
unit: inv-rjm-114
in_scope_via: .claude/skills/decision-critic/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/decision-critic/references/mental-models-galls-law.md, sha256: 02e959738698d10d405c028c1a165cd63f81e23e53535bbbe2a8323f8204cf6a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/decision-critic/references/mental-models-galls-law.md

## Purpose — required, verbatim
> "Complex systems that work evolved from simple systems that worked." — .claude/skills/decision-critic/references/mental-models-galls-law.md:11

## Design intent — required
Restrains over-engineering and designed-from-scratch big-bang redesigns by asserting that workable complex systems can only emerge through evolutionary iteration from simple working systems. System designs proposed in isolation without a simple baseline almost invariably fail to integrate or ship. This reference directs decision critics to challenge complete rewrites, speculative feature additions, and big-bang cutovers, ensuring work is decomposed into independently viable increments.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill decision-critic — .claude/skills/decision-critic/SKILL.md:100
- reference decision-rigor.md — .claude/skills/review/references/decision-rigor.md:55
- skill decision-critic — src/copilot-cli/skills/decision-critic/SKILL.md:100
- reference decision-rigor.md — src/copilot-cli/skills/review/references/decision-rigor.md:55

## Concepts named — required, verbatim
- `Gall's Law` — .claude/skills/decision-critic/references/mental-models-galls-law.md:7 — defined here
- `Challenge` — .claude/skills/decision-critic/references/mental-models-galls-law.md:21 — used here
- `Contrarian Perspectives` — .claude/skills/decision-critic/references/mental-models-galls-law.md:42 — used here
- `Inversion Analysis` — .claude/skills/decision-critic/references/mental-models-galls-law.md:50 — used here
- `VERIFIED` — .claude/skills/decision-critic/references/mental-models-galls-law.md:59 — used here
- `Chesterton's Fence` — .claude/skills/decision-critic/references/mental-models-galls-law.md:68 — used here
- `YAGNI` — .claude/skills/decision-critic/references/mental-models-galls-law.md:69 — used here
- `Strangler Fig` — .claude/skills/decision-critic/references/mental-models-galls-law.md:70 — used here

## Structure
- `# Gall's Law` — .claude/skills/decision-critic/references/mental-models-galls-law.md:7
- `## Principle` — .claude/skills/decision-critic/references/mental-models-galls-law.md:9
- `## Corollary` — .claude/skills/decision-critic/references/mental-models-galls-law.md:15
- `## Decision Critic Application` — .claude/skills/decision-critic/references/mental-models-galls-law.md:19
- `### Verification Questions` — .claude/skills/decision-critic/references/mental-models-galls-law.md:23
- `### Red Flags in Decisions` — .claude/skills/decision-critic/references/mental-models-galls-law.md:32
- `### Contrarian Perspectives (Step 5)` — .claude/skills/decision-critic/references/mental-models-galls-law.md:42
- `### Failure Modes (for Inversion Analysis)` — .claude/skills/decision-critic/references/mental-models-galls-law.md:50
- `## Practical Checklist` — .claude/skills/decision-critic/references/mental-models-galls-law.md:57
- `## Related Models` — .claude/skills/decision-critic/references/mental-models-galls-law.md:66

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/decision-critic/references/mental-models-galls-law.md:2 · Frontmatter source `wiki/concepts/Mental Models/Galls Law.md` does not exist in the repository (`wiki/` directory is absent).

## Observations
- Quotes John Gall's corollary: "A complex system designed from scratch never works and cannot be patched up to make it work. You have to start over with a working simple system." (lines 17-18).
- Targets "big bang" cutover and "complete rewrite" rationales as classic failure risks (lines 36, 39).

## Context cost
2396 bytes (~599 tokens). Invokes nothing additional.
