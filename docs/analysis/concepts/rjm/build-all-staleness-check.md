---
package: rjm
name: Build-all staleness check
slug: build-all-staleness-check
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/workflows/validate-generated-agents.yml, sha256: bfec11e4e278d7959a9341743431c53b8f4c68ee7d453a25390ec6e58777e6ca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Build-all staleness check

## Definition — verbatim
(used, not defined)

> "- name: Build-all staleness check (REQ-003-005)" — .github/workflows/validate-generated-agents.yml:151

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/workflows/validate-generated-agents.yml | 151 | defined here | CI workflow step executing build_all.py --check to catch stale generator outputs. |

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
defects: internal-contradiction

## Design notes
`Build-all staleness check` is a CI workflow step label in `validate-generated-agents.yml` verifying generated artifact currency rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
