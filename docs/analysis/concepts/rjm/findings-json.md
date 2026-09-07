---
package: rjm
name: FINDINGS_JSON
slug: findings-json
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/artifact_create_issues.py, sha256: fb16852af5a0a38c29c2fbd7d3d1ef2dcd5632c410819b730a2d2ea903c0255f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FINDINGS_JSON

## Definition — verbatim
(used, not defined)

> "FINDINGS_JSON - JSON array of finding objects (title, body, labels, source)" — scripts/ci/artifact_create_issues.py:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/artifact_create_issues.py | 8 | used here | Environment variable supplying the serialized JSON array of artifact insight findings. |

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
clean

## Design notes
`FINDINGS_JSON` is an environment variable configuration name in `scripts/ci/artifact_create_issues.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
