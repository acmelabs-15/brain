---
package: rjm
name: check_mitigations
slug: check-mitigations
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/scripts/validate_threat_model.py, sha256: 2df216789ee2fa0e552450372de422efd2bda8e7dc1f6f8a4e386e05ec3d86b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# check_mitigations

## Definition — verbatim
(used, not defined)

> "def check_mitigations(content: str) -> list[ValidationResult]:" — .claude/skills/threat-modeling/scripts/validate_threat_model.py:182

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/scripts/validate_threat_model.py | 182 | defined here | Python function ensuring every Critical or High severity threat has documented mitigations. |

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
defects: exit-code-mismatch

## Design notes
`check_mitigations` is a Python validation rule function in `validate_threat_model.py` verifying high-risk mitigation coverage rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
