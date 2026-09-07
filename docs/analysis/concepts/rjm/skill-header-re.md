---
package: rjm
name: SKILL_HEADER_RE
slug: skill-header-re
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# SKILL_HEADER_RE

## Definition — verbatim
(used, not defined)

> "SKILL_HEADER_RE = re.compile(" — scripts/validate_skill_format.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_format.py | 25 | defined here | Compiled regular expression matching legacy bundled skill headers in markdown files. |

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
defects: script-bug, orphan

## Design notes
`SKILL_HEADER_RE` is a regular expression constant identifier used to detect disallowed bundled skill headers in files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
