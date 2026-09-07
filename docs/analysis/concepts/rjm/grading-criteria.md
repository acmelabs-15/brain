---
package: rjm
name: Grading Criteria
slug: grading-criteria
kind: checklist
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/quality-grades/SKILL.md, sha256: 169d96f9077aeeb8c6039593f702f0b100d56bc9d126dd28e82d5e5bfab775e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Grading Criteria

## Definition — verbatim
> "## Grading Criteria" — .claude/skills/quality-grades/SKILL.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/quality-grades/SKILL.md | 49 | defined here | Section heading and rubric mapping numerical score ranges (0-100) to letter grades (A-F) with operational meanings. |

## Consumes
Numerical scores aggregated from domain layer checks.

## Produces
Standardized letter grade classifications (A, B, C, D, F) indicating coverage and quality gap severity.

## When applied
When translating layer scores into standardized quality assessments.

## Sub-concepts
none

## Part of
quality-grades

## Implementation status
defects: doc-drift

## Design notes
A standardized five-tier scoring rubric that maps quantitative 0–100 scores to qualitative letter grades (A: full coverage, B: minor gaps, C: gaps present, D: significant gaps, F: broken/missing), establishing clear thresholds for quality intervention across domains.
