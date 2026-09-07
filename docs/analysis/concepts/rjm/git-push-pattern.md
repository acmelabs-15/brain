---
package: rjm
name: _GIT_PUSH_PATTERN
slug: git-push-pattern
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _GIT_PUSH_PATTERN

## Definition — verbatim
(used, not defined)

> "_GIT_PUSH_PATTERN = re.compile(r\"(?:^|\s)git\s+push(?:\s|$)\")" — scripts/hook_utilities/utilities.py:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/hook_utilities/utilities.py | 22 | defined here | Compiled regular expression matching git push invocations. |

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
A private regular expression constant identifier used for CLI command pattern matching rather than a lifecycle concept.
