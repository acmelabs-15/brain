---
package: rjm
name: VALID_STATUSES
slug: valid-statuses
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/pre-mortem/scripts/pre-mortem.py, sha256: 0aced954bc1e31acd2fedc4e9bb52abece6b0666c4fb2daab207bcab735c6fc4}
  - {path: scripts/validation/validate_design_review.py, sha256: f661f67d438dac52a7cfbc335a1857408c16601a8a962cb387e637a2420ef671}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# VALID_STATUSES

## Definition — verbatim
(used, not defined)

> "VALID_STATUSES = [\"Open\", \"Mitigating\", \"Accepted\", \"Resolved\"]" — .claude/skills/pre-mortem/scripts/pre-mortem.py:72

## Also called — verbatim
- `_VALID_STATUSES` — scripts/validation/validate_design_review.py:22

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/pre-mortem/scripts/pre-mortem.py | 72 | defined here | Constant list defining the set of valid status strings allowed for risk items during inventory validation. |
| scripts/validation/validate_design_review.py | 22 | defined here | Constant set (_VALID_STATUSES) enumerating valid design review approval and blocking statuses. |

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
defects: exit-code-mismatch, other

## Design notes
VALID_STATUSES is an identifier for script constants that define authorized status enumerations in pre-mortem and design-review validators rather than an independent lifecycle concept.
