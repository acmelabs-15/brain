---
package: rjm
name: cell_score
slug: cell-score
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-instrument.md, sha256: e44bedb58e00f8ca48ec3ee0cb3b8396e3cecf9bfde2e87f00e98adee9c6ee18}
  - {path: .claude/skills/context-optimizer/references/rule-audit-procedure.md, sha256: 410c727ad2802a3cd5dd5d32009daf60016a6b3eb02947b0bd0693d068007b4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# cell_score

## Definition — verbatim
> "`cell_score` reduced in that second order; with an even sample count that median" — .claude/skills/context-optimizer/references/rule-audit-instrument.md:130

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-instrument.md | 130 | defined here | Defines the post-fix composite metric for an evaluation cell computed by averaging sample triples first, then medianing across judge calls. |
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 345 | defined here | Specifies the corrected cell score calculation in audit reporting pipelines. |

## Consumes
Individual judge sample score triples for a specific scenario × mechanism cell.

## Produces
A single scalar metric representing the robust central tendency of performance in that cell.

## When applied
Applied during evaluation score reduction across repeated judge calls.

## Sub-concepts
- activation-score
- citation-score
- behavior-score

## Part of
none

## Implementation status
clean

## Design notes
`cell_score` is the primary aggregated performance metric for an evaluation cell (scenario × mechanism) in rjm. Following the fix for the coordinate-wise median defect, it is derived by averaging each judge's rubric triple into a single scalar first, and then taking the median across judge repeats, protecting against outlier judge variance.
