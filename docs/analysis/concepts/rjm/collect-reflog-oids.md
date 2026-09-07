---
package: rjm
name: _collect_reflog_oids
slug: collect-reflog-oids
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _collect_reflog_oids

## Definition — verbatim
(used, not defined)

> "def _collect_reflog_oids(text: str, seen: dict[str, None]) -> bool:" — scripts/maintenance/_gc_anchors.py:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_anchors.py | 77 | defined here | Helper function parsing reflog text lines to accumulate non-null commit IDs into a seen dictionary. |

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
Internal parser function extracting valid commit OIDs from reflog lines, classified as name-only per D-023.
