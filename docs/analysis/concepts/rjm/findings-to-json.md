---
package: rjm
name: findings_to_json
slug: findings-to-json
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

# findings_to_json

## Definition — verbatim
(used, not defined)

> "def findings_to_json(findings: list[Finding]) -> str:" — .github/scripts/parse_artifact_insights.py:186

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/parse_artifact_insights.py | 186 | defined here | Serializes list of Finding dataclasses to a JSON string for consumption by downstream scripts. |

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
A serialization helper function formatting finding objects as JSON rather than an independent lifecycle concept.
