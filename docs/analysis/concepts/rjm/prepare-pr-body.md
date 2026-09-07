---
package: rjm
name: prepare_pr_body
slug: prepare-pr-body
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# prepare_pr_body

## Definition — verbatim
(used, not defined)

> "    module_path = skill_script.with_name(\"prepare_pr_body.py\")" — scripts/new_validated_pr.py:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/new_validated_pr.py | 110 | used here | Dynamic import of module managing secure allocation of PR description body files. |

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
A Python module and function identifier for allocating PR body file paths rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
