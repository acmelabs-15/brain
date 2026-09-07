---
package: rjm
name: compute_trend
slug: compute-trend
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/quality-grades/scripts/grade_domains.py, sha256: 14cd79a354e088527cb5cf77f2389be5577ed87949ba910b715ef69b7af91b5a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# compute_trend

## Definition — verbatim
(used, not defined)

> "def compute_trend(current: float, previous: float | None) -> str:" — .claude/skills/quality-grades/scripts/grade_domains.py:396

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/quality-grades/scripts/grade_domains.py | 396 | defined here | Helper function calculating delta between current and previous scores to determine trend indicator. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: exit-code-mismatch, doc-drift

## Design notes
Python function identifier in grade_domains.py calculating numerical score deltas for trend indicators rather than an operational lifecycle concept.
