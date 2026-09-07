---
package: rjm
name: ALLOWED_INTERVIEW_STATUS
slug: allowed-interview-status
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/work-operating-model/scripts/validate_operating_model.py, sha256: 99f44b417e6f3b715e0579caf73524caa79c26fa8cf7887e0fda9f0a1de44a54}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ALLOWED_INTERVIEW_STATUS

## Definition — verbatim
(used, not defined)

> "ALLOWED_INTERVIEW_STATUS: tuple[str, ...] = " — .claude/skills/work-operating-model/scripts/validate_operating_model.py:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/work-operating-model/scripts/validate_operating_model.py | 48 | defined here | Constant tuple defining valid interview status enumeration values in operating model metadata. |

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
`ALLOWED_INTERVIEW_STATUS` is an internal Python validation constant defining permissible status strings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
