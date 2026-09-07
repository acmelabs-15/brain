---
package: rjm
name: Patterns and Oversight
slug: patterns-and-oversight
kind: checklist
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Patterns and Oversight

## Definition — verbatim
(used, not defined)

> "## During Work: Patterns and Oversight" — .claude/skills/analyze/references/engineering-complexity-tiers.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 37 | defined here | In-flight checklist mapping tier-appropriate architectural patterns and oversight cadences. |

## Consumes
Active implementation tasks and proposed software patterns.

## Produces
Evaluation of pattern appropriateness (preventing over- or under-engineering) and oversight cadence.

## When applied
During active development or design reviews.

## Sub-concepts
none

## Part of
engineering-complexity-tiers

## Implementation status
defects: missing-path

## Design notes
An in-flight oversight matrix in `engineering-complexity-tiers.md` providing guidelines on which architectural patterns are appropriate for each complexity tier, preventing juniors from over-engineering simple tasks or seniors from under-designing strategic systems.
