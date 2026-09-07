---
package: rjm
name: Shift-Left Score
slug: shift-left-score
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/metrics/dashboard-template.md, sha256: 645d599ed5100a968188f22d7ccd8e43df7fb8eea23c2b79d608804b1dc17103}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Shift-Left Score

## Definition — verbatim
> "Score = Agent % + (PR % * 0.5) + (Production % * 0)" — .agents/metrics/dashboard-template.md:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/metrics/dashboard-template.md | 82 | defined here | Defined in the dashboard template as a composite formula weighting issue detection by lifecycle phase. |

## Consumes
Issue discovery percentages across agent review, PR review, and production phases.

## Produces
A composite score from 0 to 100 representing defect prevention effectiveness.

## When applied
Computed during dashboard generation to provide a single summary metric for shift-left performance.

## Sub-concepts
none

## Part of
shift-left-effectiveness

## Implementation status
clean

## Design notes
Shift-Left Score calculates a weighted aggregate score of defect discovery timeliness, heavily rewarding issues caught during initial agent sessions while penalizing late discovery during PR review or production.
