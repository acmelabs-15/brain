---
package: rjm
name: run_diagnostics
slug: run-diagnostics
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/diagnose_copilot_cli.py, sha256: d05040c1d6bdaab669157a383c9f470e3cbc1261e0cb4974c89666ee59ec0b39}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# run_diagnostics

## Definition — verbatim
(used, not defined)

> "def run_diagnostics(" — scripts/ci/diagnose_copilot_cli.py:100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/diagnose_copilot_cli.py | 100 | defined here | Orchestration function running all diagnostic checks on Copilot CLI availability and credentials. |

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
`run_diagnostics` is an internal Python function identifier running comprehensive diagnostics on Copilot CLI installation and authentication state rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
