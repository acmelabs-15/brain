---
package: rjm
name: Common Patterns
slug: common-patterns
kind: pattern
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

# Common Patterns

## Definition — verbatim
(used, not defined)

> "| Design | Code Qualities, SOLID | Common Patterns, POD | CVA, GoF Wisdom | Design Principles, Services | Governance Frameworks |" — .claude/skills/analyze/references/engineering-complexity-tiers.md:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 79 | defined here | Cataloged in Problem Domain Cross-Reference table as a Tier 2 (Junior) design competency paired with Plain Old Data (POD). |

## Consumes
Routine software design challenges, standard component architectures.

## Produces
Standardized, idiomatic code structures avoiding unnecessary abstractions.

## When applied
Applied during Tier 2 engineering design to select standard idiomatic software patterns.

## Sub-concepts
none

## Part of
engineering-complexity-tiers

## Implementation status
defects: missing-path

## Design notes
Common Patterns in rjm's engineering complexity matrix represents standard, idiomatic software design solutions appropriate for Tier 2 complexity, preventing junior engineers and agents from introducing premature complexity or bespoke abstractions for routine design tasks.
