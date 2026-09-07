---
package: rjm
name: _runtime_text
slug: runtime-text
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _runtime_text

## Definition — verbatim
(used, not defined)

> "def _runtime_text(text: str, suffix: str) -> str:" — scripts/validation/check_skill_portability.py:191

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_portability.py | 191 | defined here | Function returning runtime executable text after stripping comments, docstrings, and prose tokens. |

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
defects: doc-drift, orphan

## Design notes
A Python helper function identifier in `check_skill_portability.py`, classified as name-only per D-023.
