---
package: rjm
name: conftest.py
slug: conftest-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# conftest.py

## Definition — verbatim
(used, not defined)

> "conftest.py" — scripts/test_selection/runtime_read_patterns.txt:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/runtime_read_patterns.txt | 4 | defined here | Pattern entry requiring a full test run whenever the root pytest configuration fixture file is modified. |
| scripts/validation/check_push_lock_before_commit.py | 7 | used here | Cited root test fixture file hosting the repo head concurrency protection fixture. |

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
`conftest.py` is a pytest configuration and fixture file path cited in runtime read patterns and commit lock validation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
