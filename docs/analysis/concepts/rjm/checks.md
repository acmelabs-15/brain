---
package: rjm
name: CHECKS
slug: checks
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
  - {path: scripts/validation/check_generated_staleness.py, sha256: 1be3095eed20c44cb26605bb6632317cdaf00ab7551f9eef44d94386b0979e5b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CHECKS

## Definition — verbatim
(used, not defined)

> "CHECKS: tuple[str, ...] = (" — scripts/validation/check_adr_lifecycle.py:141

## Also called — verbatim
`_CHECKS` — scripts/validation/check_generated_staleness.py:150

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 141 | defined here | Constant tuple enumerating the active check identifiers for ADR lifecycle validation. |
| scripts/validation/check_generated_staleness.py | 150 | defined here | Constant tuple enumerating ordered generator validation checks for checking generated staleness. |

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
A Python constant tuple identifier defining the registered list of validation checks, classified as `name-only` per D-023 because it is a code constant rather than a development lifecycle concept.
