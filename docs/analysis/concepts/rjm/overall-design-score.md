---
package: rjm
name: Overall Design Score
slug: overall-design-score
kind: artifact
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/architect.md, sha256: 7b7b77787fd3abd5ba75cfe3c29a5e7f91d33a661c2788f9b29a96f95a992e6e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Overall Design Score

## Definition — verbatim
> "**Overall Design Score**: X/5" — .claude/skills/review/references/architect.md:130

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/architect.md | 130 | defined here | Output field presenting the composite 1-5 architectural design score. |

## Consumes
Individual ratings from the Design Quality Assessment table.

## Produces
A composite numeric score out of 5 representing overall architectural design quality.

## When applied
At the conclusion of the Design Quality Assessment section in architectural review.

## Sub-concepts
none

## Part of
design-quality-assessment

## Implementation status
defects: doc-drift, missing-path, other

## Design notes
A composite score field in rjm's architecture review report synthesizing individual aspect ratings into a single score out of 5 for rapid operator triage.
