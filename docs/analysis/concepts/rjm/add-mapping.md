---
package: rjm
name: add_mapping
slug: add-mapping
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# add_mapping

## Definition — verbatim
(used, not defined)

> "def add_mapping(" — scripts/pr_branch_mapping.py:177

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_branch_mapping.py | 177 | defined here | Function adding or updating a PR-to-branch mapping while enforcing branch uniqueness. |

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
`add_mapping` is a Python function identifier modifying the PR branch mapping table with a new or updated record rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
