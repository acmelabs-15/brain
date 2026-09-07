---
package: rjm
name: check_markers
slug: check-markers
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# check_markers

## Definition — verbatim
(used, not defined)

> "def check_markers(repo_root: Path, stream: TextIO | None = None) -> int:" — scripts/testing/mutation_workspace.py:403

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_workspace.py | 403 | defined here | Function checking for lingering mutation marker files and returning a non-zero exit code to block push operations. |

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
check_markers is a Python function identifier validating that no unfinished mutation runs remain rather than a lifecycle concept.
