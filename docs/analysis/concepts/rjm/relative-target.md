---
package: rjm
name: relative_target
slug: relative-target
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# relative_target

## Definition — verbatim
(used, not defined)

> "def relative_target(repo_root: Path, target: Path | str) -> Path:" — scripts/testing/mutation_workspace_git.py:268

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_workspace_git.py | 268 | defined here | Function resolving and validating that a mutation target is a tracked file within the repository. |

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
relative_target is a Python function identifier validating and normalizing relative repository file targets rather than a lifecycle concept.
