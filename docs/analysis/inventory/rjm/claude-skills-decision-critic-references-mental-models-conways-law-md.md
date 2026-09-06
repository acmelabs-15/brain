---
package: rjm
path: .claude/skills/decision-critic/references/mental-models-conways-law.md
type: reference
bytes: 3156
unit: inv-rjm-114
in_scope_via: .claude/skills/decision-critic/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/decision-critic/references/mental-models-conways-law.md, sha256: b73b17cb46fe4c9b84b9e5eb953fe661a53ceac27d983cd23139cc18392dbeb9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/decision-critic/references/mental-models-conways-law.md

## Purpose — required, verbatim
> "Organizations design systems that mirror their own communication structure." — .claude/skills/decision-critic/references/mental-models-conways-law.md:11

## Design intent — required
Identifies architectural failure modes stemming from misalignment between system modularity and organizational communication structures. When architects draw module or service boundaries based purely on reporting lines rather than domain cohesion—or conversely when they propose tightly coupled integrations between teams that do not communicate—interfaces leak and coordination costs explode. This reference forces critics to evaluate the organizational feasibility and ownership boundaries of architectural proposals, including applying the inverse Conway maneuver.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill decision-critic — .claude/skills/decision-critic/SKILL.md:99
- reference architect.md — .claude/skills/review/references/architect.md:50
- skill decision-critic — src/copilot-cli/skills/decision-critic/SKILL.md:99
- reference architect.md — src/copilot-cli/skills/review/references/architect.md:50

## Concepts named — required, verbatim
- `Conway's Law` — .claude/skills/decision-critic/references/mental-models-conways-law.md:7 — defined here
- `inverse Conway maneuver` — .claude/skills/decision-critic/references/mental-models-conways-law.md:17 — defined here
- `Challenge` — .claude/skills/decision-critic/references/mental-models-conways-law.md:21 — used here
- `Contrarian Perspectives` — .claude/skills/decision-critic/references/mental-models-conways-law.md:42 — used here
- `Inversion Analysis` — .claude/skills/decision-critic/references/mental-models-conways-law.md:50 — used here
- `VERIFIED` — .claude/skills/decision-critic/references/mental-models-conways-law.md:59 — used here
- `Gall's Law` — .claude/skills/decision-critic/references/mental-models-conways-law.md:68 — used here
- `Chesterton's Fence` — .claude/skills/decision-critic/references/mental-models-conways-law.md:69 — used here
- `Systems Thinking` — .claude/skills/decision-critic/references/mental-models-conways-law.md:70 — used here

## Structure
- `# Conway's Law` — .claude/skills/decision-critic/references/mental-models-conways-law.md:7
- `## Principle` — .claude/skills/decision-critic/references/mental-models-conways-law.md:9
- `## Corollary` — .claude/skills/decision-critic/references/mental-models-conways-law.md:15
- `## Decision Critic Application` — .claude/skills/decision-critic/references/mental-models-conways-law.md:19
- `### Verification Questions` — .claude/skills/decision-critic/references/mental-models-conways-law.md:23
- `### Red Flags in Decisions` — .claude/skills/decision-critic/references/mental-models-conways-law.md:32
- `### Contrarian Perspectives (Step 5)` — .claude/skills/decision-critic/references/mental-models-conways-law.md:42
- `### Failure Modes (for Inversion Analysis)` — .claude/skills/decision-critic/references/mental-models-conways-law.md:50
- `## Practical Checklist` — .claude/skills/decision-critic/references/mental-models-conways-law.md:57
- `## Related Models` — .claude/skills/decision-critic/references/mental-models-conways-law.md:66

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/decision-critic/references/mental-models-conways-law.md:2 · Frontmatter source `wiki/concepts/Mental Models/Conways Law.md` does not exist in the repository (`wiki/` directory is absent).

## Observations
- Introduces the inverse Conway maneuver: intentionally shaping organizational communication structures so the intended system architecture emerges naturally (lines 17-18).
- Explicitly warns against diffs that cross module boundaries owned by different teams (line 40).

## Context cost
3156 bytes (~789 tokens). Invokes nothing additional.
