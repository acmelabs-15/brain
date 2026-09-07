---
package: rjm
name: _INLINE_STATUS_RE
slug: inline-status-re
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _INLINE_STATUS_RE

## Definition — verbatim
(used, not defined)

> "_INLINE_STATUS_RE = re.compile(r\"(?m)^[ \t]{0,3}\*\*Status\*\*[ \t]*:[ \t]*(.+)$\")" — scripts/validation/check_adr_lifecycle.py:175

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 175 | defined here | Regular expression constant matching inline bold status declarations in ADR headers. |

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
A compiled regular expression constant identifier used to detect inline bold status annotations in ADR headers, classified as `name-only` per D-023 because it is a code constant rather than a development lifecycle concept.
