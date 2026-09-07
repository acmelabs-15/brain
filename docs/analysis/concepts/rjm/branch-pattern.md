---
package: rjm
name: BRANCH_PATTERN
slug: branch-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# BRANCH_PATTERN

## Definition — verbatim
(used, not defined)

> "BRANCH_PATTERN = re.compile" — scripts/validate_session_json.py:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 101 | defined here | Compiled regex constant validating conventional prefix on git branch names. |

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
defects: missing-path, doc-drift

## Design notes
BRANCH_PATTERN is a compiled regex constant identifier in scripts/validate_session_json.py rather than an SDLC lifecycle concept.
