---
package: rjm
name: get_project_directory
slug: get-project-directory
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# get_project_directory

## Definition — verbatim
(used, not defined)

> "def get_project_directory(" — scripts/hook_utilities/utilities.py:97

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/hook_utilities/__init__.py | 16 | used here | Re-exported symbol in hook utilities package public interface. |
| scripts/hook_utilities/utilities.py | 97 | defined here | Resolves project root directory by inspecting CLAUDE_PROJECT_DIR or walking up directory ancestors for .git marker. |

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
A Python utility function that locates the root directory of the current project, classified as name-only per D-023.
