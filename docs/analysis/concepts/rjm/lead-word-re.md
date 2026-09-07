---
package: rjm
name: _LEAD_WORD_RE
slug: lead-word-re
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _LEAD_WORD_RE

## Definition — verbatim
(used, not defined)

> "_LEAD_WORD_RE = re.compile(r\"^[*_`~>\[\s]*([A-Za-z]+)\")" — scripts/validation/check_adr_lifecycle.py:183

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 183 | defined here | Regular expression constant extracting the leading lifecycle word through markdown formatting. |

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
A compiled regular expression constant identifier used to strip markdown formatting and extract lead lifecycle status keywords, classified as `name-only` per D-023 because it is a code constant rather than a development lifecycle concept.
