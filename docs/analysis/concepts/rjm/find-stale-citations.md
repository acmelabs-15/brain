---
package: rjm
name: find_stale_citations
slug: find-stale-citations
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# find_stale_citations

## Definition — verbatim
(used, not defined)

> "def find_stale_citations(repo_root: Path, base_ref: str) -> list[Finding] | None:" — scripts/validation/check_citation_freshness.py:276

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_citation_freshness.py | 276 | defined here | Function discovering stale citations across added lines between base ref and HEAD. |

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
A Python function identifier in `check_citation_freshness.py` returning stale citation findings across added lines, classified as `name-only` per D-023.
