---
package: rjm
name: _IGNORE_WITH_REASON
slug: ignore-with-reason
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _IGNORE_WITH_REASON

## Definition — verbatim
(used, not defined)

> "_IGNORE_WITH_REASON = re.compile(re.escape(IGNORE_MARKER)" — scripts/validation/check_citation_freshness.py:103

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_citation_freshness.py | 103 | defined here | Compiled regular expression matching ignore directives accompanied by a non-empty reason string. |

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
A Python regular expression constant identifier in `check_citation_freshness.py` validating ignore marker syntax, classified as `name-only` per D-023.
