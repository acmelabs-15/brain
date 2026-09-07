---
package: rjm
name: require_git_stdout
slug: require-git-stdout
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# require_git_stdout

## Definition — verbatim
(used, not defined)

> "def require_git_stdout(cwd: Path, *args: str, error: str) -> str:" — scripts/testing/mutation_workspace_git.py:115

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_workspace_git.py | 115 | defined here | Function executing git commands and asserting single-line non-empty stdout output. |

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
require_git_stdout is a Python helper function identifier ensuring git commands succeed with single-line stdout rather than a lifecycle concept.
