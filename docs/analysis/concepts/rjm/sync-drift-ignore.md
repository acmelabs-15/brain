---
package: rjm
name: sync-drift-ignore
slug: sync-drift-ignore
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# sync-drift-ignore

## Definition — verbatim
> "sync-drift-ignore" — scripts/sync/detect_spec_drift.py:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/sync/detect_spec_drift.py | 101 | defined here | Constant defining the inline HTML comment directive to mute drift findings for intentional references to absent paths. |

## Consumes
A specification markdown line containing a planned, hypothetical, or example code reference.

## Produces
Line-level suppression of spec drift findings during detect_spec_drift scans.

## When applied
Added as `<!-- sync-drift-ignore -->` at the end of a line in a specification file to mark absent code references as intentionally exempted.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`sync-drift-ignore` is an inline HTML comment directive in rjm that allows specification authors to reference planned or example code paths without triggering false-positive spec-to-code drift alerts. By marking intentional forward references explicitly on the offending line, it prevents spec drift detection tools from failing CI checks while preserving strict validation for all unannotated references.
