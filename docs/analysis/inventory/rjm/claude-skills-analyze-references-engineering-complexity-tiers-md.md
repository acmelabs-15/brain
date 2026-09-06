---
package: rjm
path: .claude/skills/analyze/references/engineering-complexity-tiers.md
type: reference
bytes: 5079
unit: inv-rjm-88
in_scope_via: .claude/skills/analyze/SKILL.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/skills/analyze/references/engineering-complexity-tiers.md

## Purpose — required, verbatim
> "Five tiers of engineering difficulty mapped to experience levels and focus areas. Use for task classification, design review rigor, and quality gate depth." — .claude/skills/analyze/references/engineering-complexity-tiers.md:9

## Design intent — required
Comprehensive taxonomy calibrating engineering complexity across five tiers (Tier 1 Entry to Tier 5 Principal). It establishes rigor benchmarks across the entire engineering lifecycle: pre-work task classification and design review requirements, during-work design patterns and oversight cadence, and post-work quality gates. It defines key professional inflection points (Senior to Staff shifting from code execution to decisions/clarity), maps problem domains across all five tiers, and guides agents during codebase analysis to classify components, detect pattern mismatches (over- or under-engineering), and recommend tier-appropriate quality gates.

## Phase — required
cross-phase

## Inputs — required
- Task specifications, component architecture, and codebase change plans (.claude/skills/analyze/references/engineering-complexity-tiers.md:9, 83-89)

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- command build — .claude/commands/build.md:28
- skill analyze — .claude/skills/analyze/SKILL.md:70
- skill planner — .claude/skills/planner/SKILL.md:291
- skill review — .claude/skills/review/SKILL.md:51
- reference spec-prior-art-schema.md — .claude/skills/spec-generator/references/spec-prior-art-schema.md:156

## Concepts named — required, verbatim
- `Engineering Complexity Tiers` — .claude/skills/analyze/references/engineering-complexity-tiers.md:7 — defined here | used here
- `Tier Summary` — .claude/skills/analyze/references/engineering-complexity-tiers.md:11 — defined here | used here
- `Tier 1` — .claude/skills/analyze/references/engineering-complexity-tiers.md:74 — defined here | used here
- `Tier 2` — .claude/skills/analyze/references/engineering-complexity-tiers.md:74 — defined here | used here
- `Tier 3` — .claude/skills/analyze/references/engineering-complexity-tiers.md:61 — defined here | used here
- `Tier 4` — .claude/skills/analyze/references/engineering-complexity-tiers.md:74 — defined here | used here
- `Tier 5` — .claude/skills/analyze/references/engineering-complexity-tiers.md:74 — defined here | used here
- `Senior to Staff` — .claude/skills/analyze/references/engineering-complexity-tiers.md:21 — defined here | used here
- `Task Classification` — .claude/skills/analyze/references/engineering-complexity-tiers.md:27 — defined here | used here
- `Patterns and Oversight` — .claude/skills/analyze/references/engineering-complexity-tiers.md:37 — defined here | used here
- `Quality Gates` — .claude/skills/analyze/references/engineering-complexity-tiers.md:47 — defined here | used here
- `The Senior Inflection Point` — .claude/skills/analyze/references/engineering-complexity-tiers.md:57 — defined here | used here
- `Staff vs Principal` — .claude/skills/analyze/references/engineering-complexity-tiers.md:63 — defined here | used here
- `Problem Domain Cross-Reference` — .claude/skills/analyze/references/engineering-complexity-tiers.md:72 — defined here | used here
- `Second Order Thinking` — .claude/skills/analyze/references/engineering-complexity-tiers.md:76 — defined here | used here
- `Tech Debt Quadrant` — .claude/skills/analyze/references/engineering-complexity-tiers.md:76 — defined here | used here
- `Cynefin` — .claude/skills/analyze/references/engineering-complexity-tiers.md:76 — defined here | used here
- `Rumsfeld Matrix` — .claude/skills/analyze/references/engineering-complexity-tiers.md:76 — defined here | used here
- `OODA Loop` — .claude/skills/analyze/references/engineering-complexity-tiers.md:76 — defined here | used here
- `Inversion` — .claude/skills/analyze/references/engineering-complexity-tiers.md:76 — defined here | used here
- `Pre-Mortems` — .claude/skills/analyze/references/engineering-complexity-tiers.md:76 — defined here | used here
- `Wardley Mapping` — .claude/skills/analyze/references/engineering-complexity-tiers.md:76 — defined here | used here
- `Chesterton's Fence` — .claude/skills/analyze/references/engineering-complexity-tiers.md:77 — defined here | used here
- `Gall's Law` — .claude/skills/analyze/references/engineering-complexity-tiers.md:77 — defined here | used here
- `Boy Scout Rule` — .claude/skills/analyze/references/engineering-complexity-tiers.md:77 — defined here | used here
- `Strangler Fig` — .claude/skills/analyze/references/engineering-complexity-tiers.md:77 — defined here | used here
- `Migration Planning` — .claude/skills/analyze/references/engineering-complexity-tiers.md:77 — defined here | used here
- `Lindy Effect` — .claude/skills/analyze/references/engineering-complexity-tiers.md:77 — defined here | used here
- `Second System Effect` — .claude/skills/analyze/references/engineering-complexity-tiers.md:77 — defined here | used here
- `Observability Pillars` — .claude/skills/analyze/references/engineering-complexity-tiers.md:78 — defined here | used here
- `Resilience Patterns` — .claude/skills/analyze/references/engineering-complexity-tiers.md:78 — defined here | used here
- `Error Budgets` — .claude/skills/analyze/references/engineering-complexity-tiers.md:78 — defined here | used here
- `Chaos Engineering` — .claude/skills/analyze/references/engineering-complexity-tiers.md:78 — defined here | used here
- `Threat Modeling` — .claude/skills/analyze/references/engineering-complexity-tiers.md:78 — defined here | used here
- `Platform Strategy` — .claude/skills/analyze/references/engineering-complexity-tiers.md:78 — defined here | used here
- `Code Qualities` — .claude/skills/analyze/references/engineering-complexity-tiers.md:79 — defined here | used here
- `SOLID` — .claude/skills/analyze/references/engineering-complexity-tiers.md:79 — defined here | used here
- `Common Patterns` — .claude/skills/analyze/references/engineering-complexity-tiers.md:79 — defined here | used here
- `CVA` — .claude/skills/analyze/references/engineering-complexity-tiers.md:79 — defined here | used here
- `GoF Wisdom` — .claude/skills/analyze/references/engineering-complexity-tiers.md:79 — defined here | used here
- `Governance Frameworks` — .claude/skills/analyze/references/engineering-complexity-tiers.md:79 — defined here | used here
- `Analysis Usage` — .claude/skills/analyze/references/engineering-complexity-tiers.md:81 — defined here | used here

## Structure
- `# Engineering Complexity Tiers` — .claude/skills/analyze/references/engineering-complexity-tiers.md:7
- `## Tier Summary` — .claude/skills/analyze/references/engineering-complexity-tiers.md:11
- `## The Inflection Point: Senior to Staff` — .claude/skills/analyze/references/engineering-complexity-tiers.md:21
- `## Before Work: Task Classification` — .claude/skills/analyze/references/engineering-complexity-tiers.md:27
- `## During Work: Patterns and Oversight` — .claude/skills/analyze/references/engineering-complexity-tiers.md:37
- `## After Work: Quality Gates` — .claude/skills/analyze/references/engineering-complexity-tiers.md:47
- `## The Senior Inflection Point` — .claude/skills/analyze/references/engineering-complexity-tiers.md:57
- `## Staff vs Principal in Practice` — .claude/skills/analyze/references/engineering-complexity-tiers.md:63
- `## Problem Domain Cross-Reference` — .claude/skills/analyze/references/engineering-complexity-tiers.md:72
- `## Analysis Usage` — .claude/skills/analyze/references/engineering-complexity-tiers.md:81

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/analyze/references/engineering-complexity-tiers.md:2 · frontmatter `source:` references non-existent path `wiki/concepts/Engineering Concepts.md`.

## Observations
This document is heavily referenced across the rjm package as the single source of truth for task classification and review calibration. It is invoked directly by `/build`, `planner`, `review`, and `spec-generator` skills.

## Context cost
5079 bytes, loads nothing further (0 bytes). Approximately 1270 tokens.
