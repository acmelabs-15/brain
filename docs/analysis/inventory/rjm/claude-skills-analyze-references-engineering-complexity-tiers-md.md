---
package: rjm
path: .claude/skills/analyze/references/engineering-complexity-tiers.md
type: reference
bytes: 5079
unit: inv-rjm-88
in_scope_via: .claude/skills/analyze/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/analyze/references/engineering-complexity-tiers.md

## Purpose — required, verbatim
> "Five tiers of engineering difficulty mapped to experience levels and focus areas. Use for task classification, design review rigor, and quality gate depth." — .claude/skills/analyze/references/engineering-complexity-tiers.md:9

## Design intent — required
Establishes a 5-tier engineering difficulty hierarchy (Tier 1 Entry through Tier 5 Principal) to systematically calibrate task planning, design review rigor, architectural patterns, and post-implementation quality gates across the development lifecycle. It prevents both under-engineering high-risk architectural tasks and over-engineering simple scoped changes by establishing clear expectations before, during, and after work.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference .claude/skills/analyze/references/engineering-complexity-tiers.md — .claude/commands/build.md:28
- reference references/engineering-complexity-tiers.md — .claude/skills/analyze/SKILL.md:70

## Concepts named — required, verbatim
- `Tier Summary` — .claude/skills/analyze/references/engineering-complexity-tiers.md:11 — defined here
- `The Inflection Point: Senior to Staff` — .claude/skills/analyze/references/engineering-complexity-tiers.md:21 — defined here
- `Before Work: Task Classification` — .claude/skills/analyze/references/engineering-complexity-tiers.md:27 — defined here
- `During Work: Patterns and Oversight` — .claude/skills/analyze/references/engineering-complexity-tiers.md:37 — defined here
- `After Work: Quality Gates` — .claude/skills/analyze/references/engineering-complexity-tiers.md:47 — defined here
- `The Senior Inflection Point` — .claude/skills/analyze/references/engineering-complexity-tiers.md:57 — defined here
- `Staff vs Principal in Practice` — .claude/skills/analyze/references/engineering-complexity-tiers.md:63 — defined here
- `Problem Domain Cross-Reference` — .claude/skills/analyze/references/engineering-complexity-tiers.md:72 — defined here
- `Analysis Usage` — .claude/skills/analyze/references/engineering-complexity-tiers.md:81 — defined here

## Structure
# Engineering Complexity Tiers — .claude/skills/analyze/references/engineering-complexity-tiers.md:7
## Tier Summary — .claude/skills/analyze/references/engineering-complexity-tiers.md:11
## The Inflection Point: Senior to Staff — .claude/skills/analyze/references/engineering-complexity-tiers.md:21
## Before Work: Task Classification — .claude/skills/analyze/references/engineering-complexity-tiers.md:27
## During Work: Patterns and Oversight — .claude/skills/analyze/references/engineering-complexity-tiers.md:37
## After Work: Quality Gates — .claude/skills/analyze/references/engineering-complexity-tiers.md:47
## The Senior Inflection Point — .claude/skills/analyze/references/engineering-complexity-tiers.md:57
## Staff vs Principal in Practice — .claude/skills/analyze/references/engineering-complexity-tiers.md:63
## Problem Domain Cross-Reference — .claude/skills/analyze/references/engineering-complexity-tiers.md:72
## Analysis Usage — .claude/skills/analyze/references/engineering-complexity-tiers.md:81

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Functions as a core reference across commands and agents (e.g. `.claude/commands/build.md:28` requires an analyst subagent to read this document and classify incoming tasks as Tier 1-5 prior to coding). Includes comprehensive cross-references linking each tier to decision-making, legacy systems, reliability, and design methodologies. Frontmatter cites `wiki/concepts/Engineering Concepts.md`.

## Context cost
5079 bytes, approximately 1250 tokens.
