---
package: rjm
name: _FIXTURE_FRAGMENTS
slug: fixture-fragments
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _FIXTURE_FRAGMENTS

## Definition — verbatim
(used, not defined)

> "_FIXTURE_FRAGMENTS = (\"/fixtures/\",)" — scripts/validation/check_citation_freshness.py:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_citation_freshness.py | 73 | defined here | Constant tuple of directory fragments whose files synthesize citations and are exempted from validation. |

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
A Python constant identifier in `check_citation_freshness.py` defining exempt directory path fragments, classified as `name-only` per D-023.
