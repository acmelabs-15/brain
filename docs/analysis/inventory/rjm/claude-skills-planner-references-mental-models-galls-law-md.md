---
package: rjm
path: .claude/skills/planner/references/mental-models-galls-law.md
type: reference
bytes: 2380
unit: inv-rjm-134
in_scope_via: .claude/skills/planner/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/planner/references/mental-models-galls-law.md, sha256: c92dfa5f41a98019df5632823621ccab6fac26ad154ddb59fcda98de50b8f04b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/planner/references/mental-models-galls-law.md

## Purpose — required, verbatim
> "Complex systems that work evolved from simple systems that worked." — .claude/skills/planner/references/mental-models-galls-law.md:11

## Design intent — required
Applies John Gall's law of complex systems to milestone decomposition and review within implementation planning. It establishes the imperative that every successful complex architecture must evolve from a functioning, testable simple system rather than being built from scratch in a big-bang manner. It provides verification questions, plan red flags, and review phase checks to ensure Milestone 1 delivers an independent proof of concept with standalone value.

## Phase — required
rjm:plan

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference references/mental-models-galls-law.md — .claude/skills/planner/SKILL.md:290

## Concepts named — required, verbatim
- `Gall's Law` — .claude/skills/planner/references/mental-models-galls-law.md:7 — defined here
- `Planning Verification Questions` — .claude/skills/planner/references/mental-models-galls-law.md:23 — defined here
- `Red Flags in Plans` — .claude/skills/planner/references/mental-models-galls-law.md:32 — defined here
- `Chesterton's Fence` — .claude/skills/planner/references/mental-models-galls-law.md:60 — used here
- `YAGNI` — .claude/skills/planner/references/mental-models-galls-law.md:61 — used here
- `Strangler Fig` — .claude/skills/planner/references/mental-models-galls-law.md:62 — used here

## Structure
# Gall's Law — .claude/skills/planner/references/mental-models-galls-law.md:7
## Principle — .claude/skills/planner/references/mental-models-galls-law.md:9
## Corollary — .claude/skills/planner/references/mental-models-galls-law.md:15
## Planner Application — .claude/skills/planner/references/mental-models-galls-law.md:19
### Planning Verification Questions — .claude/skills/planner/references/mental-models-galls-law.md:23
### Red Flags in Plans — .claude/skills/planner/references/mental-models-galls-law.md:32
### Review Phase Application — .claude/skills/planner/references/mental-models-galls-law.md:42
### Practical Checklist — .claude/skills/planner/references/mental-models-galls-law.md:49
## Related Models — .claude/skills/planner/references/mental-models-galls-law.md:58

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/planner/references/mental-models-galls-law.md:2 · Frontmatter source `wiki/concepts/Mental Models/Galls Law.md` does not exist in the repository.

## Observations
Directly anchors the review phase responsibilities: Technical Writer (Step 1) verifies that milestone descriptions avoid temporal contamination implying current phases lack standalone value, while Quality Reviewer (Step 2) validates that every milestone can be shipped independently.

## Context cost
2380 bytes, approximately 580 tokens.
