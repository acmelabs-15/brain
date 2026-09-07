---
package: rjm
name: Tier Summary
slug: tier-summary
kind: reference
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

# Tier Summary

## Definition — verbatim
(used, not defined)

> "## Tier Summary" — .claude/skills/analyze/references/engineering-complexity-tiers.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 11 | defined here | Reference table summarizing experience levels, focus areas, and autonomy across Tiers 1-5. |

## Consumes
Task scope and domain boundaries.

## Produces
Baseline tier categorization across experience, focus, and autonomy dimensions.

## When applied
Initial triage and task breakdown during planning or analysis.

## Sub-concepts
tier-4

## Part of
engineering-complexity-tiers

## Implementation status
defects: missing-path

## Design notes
The summary matrix in `engineering-complexity-tiers.md` defining the baseline characteristics of all five engineering tiers, detailing expected autonomy, focus areas, and experience levels from Entry (<2 years) to Principal (15+ years).
