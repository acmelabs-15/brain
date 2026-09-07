---
package: rjm
name: parse_iso_timestamp
slug: parse-iso-timestamp
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/issue_triage.py, sha256: fcd6b841e0998709bc8e6c141ca452d89ea8238ba619daa7cbb301af9f851565}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# parse_iso_timestamp

## Definition — verbatim
(used, not defined)

> "def parse_iso_timestamp(value: str) -> datetime:" — scripts/issue_triage.py:149

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/issue_triage.py | 149 | defined here | Python helper function parsing ISO-8601 UTC timestamp strings from GitHub API payloads into datetime objects. |

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
defects: orphan

## Design notes
`parse_iso_timestamp` is a Python timestamp parsing helper function in `issue_triage.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
