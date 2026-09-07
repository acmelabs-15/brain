---
package: rjm
name: detect_drift
slug: detect-drift
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# detect_drift

## Definition — verbatim
(used, not defined)

> "def detect_drift(repo_root: Path, targets: tuple[str, ...]) -> DriftResult:" — scripts/sync/detect_spec_drift.py:315

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/sync/detect_spec_drift.py | 315 | defined here | Function scanning specification tiers across a repository root and returning aggregated drift results. |

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
`detect_drift` is a Python function identifier coordinating spec drift scanning across specification tiers rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
