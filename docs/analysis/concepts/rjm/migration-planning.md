---
package: rjm
name: Migration Planning
slug: migration-planning
kind: technique
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

# Migration Planning

## Definition — verbatim
(used, not defined)

> "| Legacy Systems | Chesterton's Fence, Gall's Law | Boy Scout Rule | Strangler Fig | Migration Planning | Lindy Effect, Second System Effect |" — .claude/skills/analyze/references/engineering-complexity-tiers.md:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 77 | defined here | Listed in Problem Domain Cross-Reference table as a Tier 4 (Staff) legacy systems competency. |

## Consumes
Legacy system architecture, dependencies, target architecture, risk assessments.

## Produces
Phased migration roadmap, transition milestones, rollback strategies, and interoperability bridges.

## When applied
Applied during architectural analysis of Tier 4 legacy system transitions spanning multiple components or organizational boundaries.

## Sub-concepts
none

## Part of
engineering-complexity-tiers

## Implementation status
defects: missing-path

## Design notes
In rjm's engineering complexity tiers, Migration Planning represents the Tier 4 (Staff) capability to architect and govern multi-phase system migrations, coordinating data consistency, backwards compatibility, and gradual cutovers across teams without downtime.
