---
package: rjm
name: collect_artifacts
slug: collect-artifacts
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/artifact_collect.py, sha256: 910064a4608b09ccb0a153a4362a2c48fda3e52051bc40af061d2d6201289f15}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# collect_artifacts

## Definition — verbatim
(used, not defined)

> "Return sorted-unique list of recently modified artifact paths." — scripts/ci/artifact_collect.py:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/artifact_collect.py | 37 | defined here | Scans agent directories for recently modified markdown and json artifacts within the lookback window. |

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
`collect_artifacts` is a filesystem collection utility function in `scripts/ci/artifact_collect.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
