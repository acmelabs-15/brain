---
package: rjm
name: is_project_repo
slug: is-project-repo
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# is_project_repo

## Definition — verbatim
(used, not defined)

> "def is_project_repo(" — scripts/hook_utilities/guards.py:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/hook_utilities/__init__.py | 10 | used here | Re-exported symbol in hook utilities package public interface. |
| scripts/hook_utilities/guards.py | 99 | defined here | Returns True when running inside the ai-agents project repository, checking git origin remote with fallback to environment variable. |

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
A Python guard function determining whether execution is inside the project repository versus a consumer repository, classified as name-only per D-023.
