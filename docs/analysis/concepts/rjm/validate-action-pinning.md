---
package: rjm
name: validate_action_pinning
slug: validate-action-pinning
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# validate_action_pinning

## Definition — verbatim
(used, not defined)

> "def validate_action_pinning(self, file_path: Path, content: dict[str, Any]) -> None:" — scripts/validate_workflows.py:140

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workflows.py | 140 | defined here | Method checking that all external actions and reusable workflows are pinned to full commit SHAs. |

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
`validate_action_pinning` is a Python method identifier verifying supply-chain SHA pinning for external GitHub actions rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
