---
package: rjm
name: _PLAIN_BRANCH_NAME
slug: plain-branch-name
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _PLAIN_BRANCH_NAME

## Definition — verbatim
(used, not defined)

> "_PLAIN_BRANCH_NAME = re.compile(" — scripts/scope_pr_base.py:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/scope_pr_base.py | 36 | defined here | Regex pattern validating ordinary branch name formats and rejecting git revision syntax. |

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
`_PLAIN_BRANCH_NAME` is a regular expression pattern constant enforcing branch name allowlists in scope gate tooling rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
