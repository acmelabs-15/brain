---
package: rjm
name: Trend Tracking
slug: trend-tracking
kind: technique
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

# Trend Tracking

## Definition — verbatim
> "## Trend Tracking" — .claude/skills/quality-grades/SKILL.md:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/quality-grades/SKILL.md | 80 | defined here | Section establishing delta thresholds for categorizing domain trajectory as improving, stable, degrading, or new. |

## Consumes
Prior JSON grading reports and current numerical audit scores.

## Produces
Longitudinal trend classifications (`improving`, `stable`, `degrading`, `new`) reflecting historical score movement.

## When applied
When generating quality reports with persistence enabled (`--output`).

## Sub-concepts
none

## Part of
quality-grades

## Implementation status
defects: doc-drift

## Design notes
A longitudinal measurement technique that tracks domain score trajectories over time, identifying regressions (degradation of ≥5 points) and improvements (increase of ≥5 points) across successive runs rather than treating audits as isolated point-in-time snapshots.
