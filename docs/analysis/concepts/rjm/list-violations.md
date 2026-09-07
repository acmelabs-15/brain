---
package: rjm
name: list_violations
slug: list-violations
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/taste_count_ratchet.py, sha256: ff9e2fe47024f635d0df5c00d6ffb265ab99ae4f589b786080b5de4fe58611bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# list_violations

## Definition — verbatim
(used, not defined)

> "def list_violations(" — scripts/ci/taste_count_ratchet.py:246

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/taste_count_ratchet.py | 246 | defined here | Function returning formatted violation strings prioritized by branch changes upon ratchet regression. |

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
list_violations is a Python function in the CI taste count ratchet script that formats error-severity violations rather than a lifecycle concept.
