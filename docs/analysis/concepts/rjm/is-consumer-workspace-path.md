---
package: rjm
name: _is_consumer_workspace_path
slug: is-consumer-workspace-path
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _is_consumer_workspace_path

## Definition — verbatim
(used, not defined)

> "def _is_consumer_workspace_path(path: str) -> bool:" — scripts/validation/check_skill_md_drift.py:213

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_drift.py | 213 | defined here | Predicate checking if a path matches or falls under recognized consumer-workspace directories. |

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
An internal path-checking helper predicate for consumer workspace exemption rather than an agent lifecycle concept.
