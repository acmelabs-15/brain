---
package: rjm
name: validate_token_budget
slug: validate-token-budget
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/token_budget.py, sha256: 02ab5e547356da50e609eac3e1cf435dc4ab028583074fe3a9f445757651ffe4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# validate_token_budget

## Definition — verbatim
(used, not defined)

> "def validate_token_budget(" — scripts/validation/token_budget.py:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/token_budget.py | 96 | defined here | Validates token limits for .agents/HANDOFF.md, returning ADR-035 status codes and printing remediation steps when exceeded. |

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
A Python validation function identifier in `token_budget.py` that checks handoff token budgets, classified as name-only per D-023.
