---
package: rjm
name: _ADR_REFERENCE_RE
slug: adr-reference-re
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _ADR_REFERENCE_RE

## Definition — verbatim
(used, not defined)

> "_ADR_REFERENCE_RE = re.compile(r\"^ADR[-_ ]?(\d{1,4})$\", re.IGNORECASE)" — scripts/validation/check_adr_lifecycle.py:164

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 164 | defined here | Regular expression constant for parsing ADR ID references inside frontmatter. |

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
A compiled regular expression constant identifier for parsing ADR identifier references in frontmatter, classified as `name-only` per D-023 because it is a code constant rather than a development lifecycle concept.
