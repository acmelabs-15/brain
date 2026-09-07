---
package: rjm
name: STRICT_CANONICAL_CHECK
slug: strict-canonical-check
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# STRICT_CANONICAL_CHECK

## Definition — verbatim
(used, not defined)

> "output on stdout). Set the environment variable `STRICT_CANONICAL_CHECK=1`" — scripts/validation/check_canonical_citations.py:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_canonical_citations.py | 22 | defined here | Environment variable used to upgrade soft citation warnings into hard process exit failures. |
| scripts/validation/checks_spec.py | 309 | used here | Checked by canonical citation runner to determine whether non-zero exit codes block PR validation. |

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
defects: script-bug, exit-code-mismatch

## Design notes
`STRICT_CANONICAL_CHECK` is an environment variable configuration identifier controlling whether canonical citation checks fail hard or warn softly rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
