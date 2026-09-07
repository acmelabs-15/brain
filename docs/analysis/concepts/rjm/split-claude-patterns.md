---
package: rjm
name: _SPLIT_CLAUDE_PATTERNS
slug: split-claude-patterns
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _SPLIT_CLAUDE_PATTERNS

## Definition — verbatim
(used, not defined)

> "_SPLIT_CLAUDE_PATTERNS: tuple[re.Pattern[str], ...] = (" — scripts/validation/check_skill_portability.py:89

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_portability.py | 89 | defined here | Constant tuple of regex patterns detecting split component path constructions referencing upstream directories. |

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
A module-level constant identifier in `check_skill_portability.py`, classified as name-only per D-023.
