---
package: rjm
name: scan_repo
slug: scan-repo
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/adr006_run_block_scanner.py, sha256: ef880b3f5f753654f6ec751498eb3dd2fa2d4581398ab022787367e80fd3306e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# scan_repo

## Definition — verbatim
(used, not defined)

> "Scan the repo's workflow/action files, returning violation records." — scripts/ci/adr006_run_block_scanner.py:263

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/adr006_run_block_scanner.py | 262 | defined here | Scans target workflow and action files in the repository for ADR-006 violations. |

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
`scan_repo` is an orchestration function in `scripts/ci/adr006_run_block_scanner.py` that crawls workflow files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
