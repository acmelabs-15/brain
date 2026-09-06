---
package: rjm
path: .claude/skills/analyze/references/quality-boy-scout-rule.md
type: reference
bytes: 1962
unit: inv-rjm-88
in_scope_via: .claude/skills/analyze/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/analyze/references/quality-boy-scout-rule.md, sha256: fe632e02d3b667f3f21fe6336aefb6747e671955e195820dc4a6bca764b4a6aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/analyze/references/quality-boy-scout-rule.md

## Purpose — required, verbatim
> "Always leave the codebase cleaner than you found it." — .claude/skills/analyze/references/quality-boy-scout-rule.md:9

## Design intent — required
Establishes operational boundaries and scope classifications for continuous, incremental code quality improvements. Formulates rules for including small opportunistic improvements in touched files during feature work or bug fixing, while explicitly identifying warning signs of overreach (such as "while I'm here" refactoring that blocks delivery) and structuring analysis recommendations into four distinct scope tiers.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference references/quality-boy-scout-rule.md — .claude/skills/analyze/SKILL.md:68
- reference .claude/skills/analyze/references/quality-boy-scout-rule.md — .claude/skills/review/references/code-quality.md:53

## Concepts named — required, verbatim
- `Boy Scout Rule` — .claude/skills/analyze/references/quality-boy-scout-rule.md:7 — defined here
- `Core Insight` — .claude/skills/analyze/references/quality-boy-scout-rule.md:13 — defined here
- `Practical Application` — .claude/skills/analyze/references/quality-boy-scout-rule.md:17 — defined here
- `Boundaries` — .claude/skills/analyze/references/quality-boy-scout-rule.md:26 — defined here
- `During Analysis and PR Work` — .claude/skills/analyze/references/quality-boy-scout-rule.md:35 — defined here
- `Warning Signs of Overreach` — .claude/skills/analyze/references/quality-boy-scout-rule.md:42 — defined here
- `Using This in Analysis Recommendations` — .claude/skills/analyze/references/quality-boy-scout-rule.md:48 — defined here
- `Boy Scout fix` — .claude/skills/analyze/references/quality-boy-scout-rule.md:54 — defined here
- `Small refactor` — .claude/skills/analyze/references/quality-boy-scout-rule.md:55 — defined here
- `Large refactor` — .claude/skills/analyze/references/quality-boy-scout-rule.md:56 — defined here
- `Architecture change` — .claude/skills/analyze/references/quality-boy-scout-rule.md:57 — defined here
- `Chesterton's Fence` — .claude/skills/analyze/references/quality-boy-scout-rule.md:61 — used here
- `Strangler Fig Pattern` — .claude/skills/analyze/references/quality-boy-scout-rule.md:62 — used here
- `Technical Debt Quadrant` — .claude/skills/analyze/references/quality-boy-scout-rule.md:63 — used here

## Structure
# Boy Scout Rule — .claude/skills/analyze/references/quality-boy-scout-rule.md:7
## Core Insight — .claude/skills/analyze/references/quality-boy-scout-rule.md:13
## Practical Application — .claude/skills/analyze/references/quality-boy-scout-rule.md:17
## Boundaries — .claude/skills/analyze/references/quality-boy-scout-rule.md:26
## During Analysis and PR Work — .claude/skills/analyze/references/quality-boy-scout-rule.md:35
## Warning Signs of Overreach — .claude/skills/analyze/references/quality-boy-scout-rule.md:42
## Using This in Analysis Recommendations — .claude/skills/analyze/references/quality-boy-scout-rule.md:48
## Related Concepts — .claude/skills/analyze/references/quality-boy-scout-rule.md:59

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Defines a 4-tier recommendation classification for codebase findings: Boy Scout fix (include in current work), Small refactor (separate PR in same sprint), Large refactor (dedicated task with plan), and Architecture change (ADR required). Frontmatter references `wiki/concepts/Mental Models/Boy Scout Rule.md`.

## Context cost
1962 bytes, approximately 490 tokens.
