---
package: rjm
name: validate_timeout
slug: validate-timeout
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_copilot_cli_acp.py, sha256: 19c2dc3b24691c7460044a256c6a26927f8b3a5c2212c34303a731baaaa8c93d}
  - {path: scripts/validation/hook_contracts.py, sha256: c04f10b106e2e97cce4ee061b755033b16b415d046d304a7ff015069fcae357b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_timeout

## Definition — verbatim
(used, not defined)

> "def validate_timeout(timeout: float) -> float:" — scripts/eval/_copilot_cli_acp.py:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_copilot_cli_acp.py | 41 | defined here | Function validating float timeout values for ACP process completion. |
| scripts/validation/hook_contracts.py | 655 | defined here | Function validating hook timeout constraints in hook contract validation. |

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
defects: doc-drift

## Design notes
validate_timeout is a Python validation function identifier checking timeout constraints in evaluation and validation scripts rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
