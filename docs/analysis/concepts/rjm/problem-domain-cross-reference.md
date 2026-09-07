---
package: rjm
name: Problem Domain Cross-Reference
slug: problem-domain-cross-reference
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

# Problem Domain Cross-Reference

## Definition — verbatim
(used, not defined)

> "## Problem Domain Cross-Reference" — .claude/skills/analyze/references/engineering-complexity-tiers.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 72 | defined here | Cross-reference table mapping problem domains across the five complexity tiers. |

## Consumes
Problem domain requirements (Decision-Making, Legacy Systems, Reliability, Design).

## Produces
Domain-specific mental model and pattern selections calibrated by complexity tier.

## When applied
Selecting appropriate frameworks and mental models during planning and analysis.

## Sub-concepts
second-order-thinking, tech-debt-quadrant, inversion

## Part of
engineering-complexity-tiers

## Implementation status
defects: missing-path

## Design notes
A multi-dimensional mapping matrix in `engineering-complexity-tiers.md` correlating four major engineering domains (Decision-Making, Legacy Systems, Reliability, Design) across all five complexity tiers to prescribe domain-appropriate tools and mental models.
