---
package: rjm
path: .claude/skills/analyze/references/quality-boy-scout-rule.md
type: reference
bytes: 1962
unit: inv-rjm-88
in_scope_via: .claude/skills/analyze/SKILL.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/quality-boy-scout-rule.md, sha256: fe632e02d3b667f3f21fe6336aefb6747e671955e195820dc4a6bca764b4a6aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/skills/analyze/references/quality-boy-scout-rule.md

## Purpose — required, verbatim
> "Always leave the codebase cleaner than you found it." — .claude/skills/analyze/references/quality-boy-scout-rule.md:9

## Design intent — required
Practical guide for applying the Boy Scout Rule (continuous opportunistic cleanup) during software development, code reviews, and codebase audits. It defines the boundaries between disciplined incremental improvement and harmful overreach ("while I'm here" gold-plating or delivery delays). It provides a 4-tier taxonomy for scoping recommendations in analysis findings: Boy Scout fix (in current work), small refactor (separate PR, same sprint), large refactor (dedicated task with plan), and architecture change (requiring an ADR).

## Phase — required
cross-phase

## Inputs — required
- Codebase files touched during maintenance, bug fixes, feature work, or analysis (.claude/skills/analyze/references/quality-boy-scout-rule.md:19-24, 37)

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill analyze — .claude/skills/analyze/SKILL.md:68
- reference code-quality.md — .claude/skills/review/references/code-quality.md:53

## Concepts named — required, verbatim
- `Boy Scout Rule` — .claude/skills/analyze/references/quality-boy-scout-rule.md:7 — defined here | used here
- `Core Insight` — .claude/skills/analyze/references/quality-boy-scout-rule.md:13 — defined here | used here
- `Practical Application` — .claude/skills/analyze/references/quality-boy-scout-rule.md:17 — defined here | used here
- `Boundaries` — .claude/skills/analyze/references/quality-boy-scout-rule.md:26 — defined here | used here
- `Warning Signs of Overreach` — .claude/skills/analyze/references/quality-boy-scout-rule.md:42 — defined here | used here
- `Boy Scout fix` — .claude/skills/analyze/references/quality-boy-scout-rule.md:54 — defined here | used here
- `Small refactor` — .claude/skills/analyze/references/quality-boy-scout-rule.md:55 — defined here | used here
- `Large refactor` — .claude/skills/analyze/references/quality-boy-scout-rule.md:56 — defined here | used here
- `Architecture change` — .claude/skills/analyze/references/quality-boy-scout-rule.md:57 — defined here | used here
- `Chesterton's Fence` — .claude/skills/analyze/references/quality-boy-scout-rule.md:61 — defined here | used here
- `Strangler Fig Pattern` — .claude/skills/analyze/references/quality-boy-scout-rule.md:62 — defined here | used here
- `Technical Debt Quadrant` — .claude/skills/analyze/references/quality-boy-scout-rule.md:63 — defined here | used here

## Structure
- `# Boy Scout Rule` — .claude/skills/analyze/references/quality-boy-scout-rule.md:7
- `## Core Insight` — .claude/skills/analyze/references/quality-boy-scout-rule.md:13
- `## Practical Application` — .claude/skills/analyze/references/quality-boy-scout-rule.md:17
- `## Boundaries` — .claude/skills/analyze/references/quality-boy-scout-rule.md:26
- `## During Analysis and PR Work` — .claude/skills/analyze/references/quality-boy-scout-rule.md:35
- `## Warning Signs of Overreach` — .claude/skills/analyze/references/quality-boy-scout-rule.md:42
- `## Using This in Analysis Recommendations` — .claude/skills/analyze/references/quality-boy-scout-rule.md:48
- `## Related Concepts` — .claude/skills/analyze/references/quality-boy-scout-rule.md:59

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/analyze/references/quality-boy-scout-rule.md:2 · frontmatter `source:` references non-existent path `wiki/concepts/Mental Models/Boy Scout Rule.md` (flagged in Phase 1V verification `_verification.md:53`).

## Observations
This file specifically categorizes analysis recommendation actions by scope (Boy Scout fix vs Small refactor vs Large refactor vs Architecture change), ensuring findings do not bundle high-risk architectural refactorings into minor PRs.

## Context cost
1962 bytes, loads nothing further (0 bytes). Approximately 490 tokens.
