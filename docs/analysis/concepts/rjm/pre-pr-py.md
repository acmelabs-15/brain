---
package: rjm
name: pre_pr.py
slug: pre-pr-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# pre_pr.py

## Definition — verbatim
(used, not defined)

> "This is the ``pre_pr.py`` entry point, so the base-ref provenance check" — scripts/validation/check_adr_links.py:975

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 975 | used here | Cited as the PR pre-submission runner script invoking `validate_adr_links`. |
| scripts/validation/check_nested_tests.py | 109 | used here | Cited as the runner script invoking the `validate_*(repo_root) -> bool` gate contract. |

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
`pre_pr.py` is a repository validation orchestration script file name executing quality gates before PR creation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
