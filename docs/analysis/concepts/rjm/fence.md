---
package: rjm
name: FENCE
slug: fence
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# FENCE

## Definition — verbatim
(used, not defined)

> "FENCE = re.compile" — scripts/validation/check_adr_links.py:113

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 113 | defined here | Compiled regular expression matching CommonMark code block fence openers. |
| scripts/validation/stale_script_refs.py | 42 | defined here | Compiled regular expression detecting markdown code fence lines. |

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
`FENCE` is a Python regular expression constant identifier used across validation scripts to detect code fence delimiters rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
