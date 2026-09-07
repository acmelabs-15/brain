---
package: rjm
name: ADR_FILENAME_RE
slug: adr-filename-re
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# ADR_FILENAME_RE

## Definition — verbatim
(used, not defined)

> "ADR_FILENAME_RE = re.compile(r\"^ADR-(\d{2,})-[^/]+\.md$\")" — scripts/validation/check_adr_lifecycle.py:161

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 161 | defined here | Regular expression constant defining standard ADR filename pattern matching. |
| scripts/validation/check_adr_uniqueness.py | 38 | defined here | Regular expression constant matching ADR filenames to extract numeric identifiers for uniqueness checking. |

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
A compiled regular expression constant identifier defining the filename pattern for ADR documents, classified as `name-only` per D-023 because it is a code constant rather than a development lifecycle concept.
