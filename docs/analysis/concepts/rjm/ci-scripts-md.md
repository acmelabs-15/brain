---
package: rjm
name: ci-scripts.md
slug: ci-scripts-md
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# ci-scripts.md

## Definition — verbatim
(used, not defined)

> "# link the current change introduced (.claude/rules/ci-scripts.md MUST NOT 4" — scripts/validation/check_adr_links_baseline.txt:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links_baseline.txt | 22 | used here | Baseline comment citing rule ci-scripts.md prohibiting adding baseline allowances for newly introduced defects. |
| scripts/validation/check_citation_freshness.py | 19 | used here | Script docstring citing rule ci-scripts.md requirement to assert state against HEAD. |

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
`ci-scripts.md` is a repository rule documentation file name rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
