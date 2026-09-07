---
package: rjm
name: PRIORITY_ORDER
slug: priority-order
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/parse_artifact_insights.py, sha256: ef6e822a93974a31b85cd71aed0138681eb9fa80ceadbbb26162054aa0208fb5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PRIORITY_ORDER

## Definition — verbatim
(used, not defined)

> "PRIORITY_ORDER = {\"P0\": 0, \"P1\": 1, \"P2\": 2, \"P3\": 3}" — .github/scripts/parse_artifact_insights.py:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/parse_artifact_insights.py | 37 | defined here | Dictionary defining integer rank ordering for P0 through P3 priority levels. |

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
defects: doc-drift, orphan

## Design notes
A dictionary constant mapping priority level strings to numeric sorting order rather than an independent lifecycle concept.
