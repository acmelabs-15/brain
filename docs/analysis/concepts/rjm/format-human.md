---
package: rjm
name: format_human
slug: format-human
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

# format_human

## Definition — verbatim
(used, not defined)

> "Render a short human-readable summary of the report." — scripts/issue_triage.py:590

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/issue_triage.py | 589 | defined here | Function formatting triage scanner findings and summary statistics into readable text. |

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
`format_human` is a formatting utility function in `scripts/issue_triage.py` for rendering report text to standard output rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
