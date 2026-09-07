---
package: rjm
name: _GH_PR_CREATE_PATTERN
slug: gh-pr-create-pattern
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _GH_PR_CREATE_PATTERN

## Definition — verbatim
(used, not defined)

> "_GH_PR_CREATE_PATTERN = re.compile(r\"(?:^|\s)gh\s+pr\s+create\b\")" — scripts/hook_utilities/utilities.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/hook_utilities/utilities.py | 25 | defined here | Compiled regular expression matching GitHub CLI PR creation commands. |

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
A private regular expression constant identifier used to recognize PR creation commands in hook scripts rather than a lifecycle concept.
