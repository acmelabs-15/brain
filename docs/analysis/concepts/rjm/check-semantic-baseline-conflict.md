---
package: rjm
name: check_semantic_baseline_conflict
slug: check-semantic-baseline-conflict
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# check_semantic_baseline_conflict

## Definition — verbatim
(used, not defined)

> "def check_semantic_baseline_conflict(" — scripts/validation/check_skill_md_portability.py:891

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 891 | defined here | Detects when measured input files change concurrently with baseline files relative to a base git ref. |

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
defects: doc-drift

## Design notes
`check_semantic_baseline_conflict` is a Python function identifier inspecting git changes for baseline conflict rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
