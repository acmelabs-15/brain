---
package: rjm
name: load_mapping
slug: load-mapping
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# load_mapping

## Definition — verbatim
(used, not defined)

> "def load_mapping(project_root: Path) -> PRBranchMapping:" — scripts/pr_branch_mapping.py:91

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_branch_mapping.py | 91 | defined here | Function that parses the Serena memory markdown file into a PRBranchMapping dataclass instance. |

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
`load_mapping` is a Python function identifier reading and deserializing PR branch mapping state from disk rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
