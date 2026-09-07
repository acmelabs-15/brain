---
package: rjm
name: SHIPPED_SKILL_ROOTS
slug: shipped-skill-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_colocated_skill_tests.py, sha256: 49ed724b3e8cedbd9917a596e3dd3fdec039097bbdc3ce64c4c058834b9225f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SHIPPED_SKILL_ROOTS

## Definition — verbatim
(used, not defined)

> "SHIPPED_SKILL_ROOTS: tuple[str, ...] = (" — scripts/validation/check_colocated_skill_tests.py:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_colocated_skill_tests.py | 23 | defined here | Constant tuple defining directory roots that ship to customers via plugin installation. |

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
A Python constant tuple identifier in `check_colocated_skill_tests.py` declaring customer-shipped skill directory roots, classified as `name-only` per D-023.
