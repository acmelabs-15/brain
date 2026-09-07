---
package: rjm
name: cross-book conflicts
slug: cross-book-conflicts
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# cross-book conflicts

## Definition — verbatim
> "limitations, cross-book conflicts, worked example) of one book." — .claude/skills/business-strategy/SKILL.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/SKILL.md | 21 | used here | Structural section in strategy reference skills explicitly resolving contradictions between frameworks. |

## Consumes
Divergent recommendations and conflicting dogmas from prominent business literature.

## Produces
Concrete contextual heuristics (e.g., deal size, stage, maturity) resolving methodological tensions.

## When applied
Consulted when selecting between competing approaches that offer contradictory prescriptions.

## Sub-concepts
none

## Part of
business-strategy

## Implementation status
defects: missing-path

## Design notes
Cross-book conflicts explicitly acknowledge that respected business authors frequently recommend opposing tactics (such as consultative questioning vs. Challenger insights). In rjm, these sections prevent confusion by defining situational boundaries that dictate exactly when one methodology should yield to another.
