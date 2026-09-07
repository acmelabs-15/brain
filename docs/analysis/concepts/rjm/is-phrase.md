---
package: rjm
name: _is_phrase
slug: is-phrase
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _is_phrase

## Definition — verbatim
(used, not defined)

> "def _is_phrase(normalized: str) -> bool:" — scripts/validation/check_skill_md_drift.py:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_drift.py | 98 | defined here | Nested helper predicate filtering out slash-separated English prose phrases from detected path lists. |

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
defects: doc-drift

## Design notes
An internal filtering predicate within drift validation rather than an agent lifecycle concept.
