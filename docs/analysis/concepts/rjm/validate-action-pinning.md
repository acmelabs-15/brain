---
package: rjm
name: validate_action_pinning
slug: validate-action-pinning
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_workflows.py, sha256: 79f3e393f6cbe540ef6a3d5b2c4399226ed9dde0aa7ef2f5b5cc338ba9ebbb22}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_action_pinning

## Definition — verbatim
(used, not defined)

> "def validate_action_pinning(self, file_path: Path, content: dict[str, Any]) -> None:" — scripts/validate_workflows.py:140

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workflows.py | 140 | defined here | Method checking that all external actions and reusable workflows are pinned to full commit SHAs. |

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
`validate_action_pinning` is a Python method identifier verifying supply-chain SHA pinning for external GitHub actions rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
