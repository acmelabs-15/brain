---
package: rjm
name: save_mapping
slug: save-mapping
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# save_mapping

## Definition — verbatim
(used, not defined)

> "def save_mapping(project_root: Path, mapping: PRBranchMapping) -> None:" — scripts/pr_branch_mapping.py:162

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_branch_mapping.py | 162 | defined here | Function that serializes PRBranchMapping state to JSON and writes it atomically to the Serena memory file. |

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
`save_mapping` is a Python function identifier persisting updated PR branch mappings to memory storage rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
