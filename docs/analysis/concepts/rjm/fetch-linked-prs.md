---
package: rjm
name: fetch_linked_prs
slug: fetch-linked-prs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# fetch_linked_prs

## Definition — verbatim
(used, not defined)

> "Return (pr_number, state) for PRs cross-referenced from an issue timeline." — scripts/issue_triage.py:528

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/issue_triage.py | 527 | defined here | Function retrieving cross-referenced pull request numbers and states from an issue's timeline events. |

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
defects: orphan

## Design notes
`fetch_linked_prs` is an internal Python data-fetching helper in `scripts/issue_triage.py` querying GitHub API timeline endpoints rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
