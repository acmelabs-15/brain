---
package: rjm
name: redact_artifact_text
slug: redact-artifact-text
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/artifact_build_context.py, sha256: f339c103901b07ad898ad3e37e6863f3a961ef0bea50d2188095074e6b05c3f7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# redact_artifact_text

## Definition — verbatim
(used, not defined)

> "Redact installed credentials and recognized shapes from artifact text." — scripts/ci/artifact_build_context.py:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/artifact_build_context.py | 41 | defined here | Strips secret credentials and tokens from artifact content before AI analysis. |

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
defects: orphan, doc-drift

## Design notes
`redact_artifact_text` is a secret sanitization helper function in `scripts/ci/artifact_build_context.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
