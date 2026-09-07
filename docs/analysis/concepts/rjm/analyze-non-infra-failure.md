---
package: rjm
name: analyze_non_infra_failure
slug: analyze-non-infra-failure
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/invoke_copilot_cli.py, sha256: 279e376171031fb1d2eb9d4ccbe0178dc93aa91c7c81e25e98cb5c78bb32e84a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# analyze_non_infra_failure

## Definition — verbatim
(used, not defined)

> "def analyze_non_infra_failure(result: AttemptResult) -> int:" — scripts/ci/invoke_copilot_cli.py:371

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/invoke_copilot_cli.py | 371 | defined here | Function analyzing non-infrastructure failures and printing troubleshooting diagnostics to stderr. |

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
analyze_non_infra_failure is a Python troubleshooting diagnostic function logging cause analyses for application errors rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
