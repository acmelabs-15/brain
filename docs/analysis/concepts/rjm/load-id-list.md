---
package: rjm
name: _load_id_list
slug: load-id-list
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _load_id_list

## Definition — verbatim
(used, not defined)

> "def _load_id_list(files: dict[str, object], key: str, path: Path) -> set[str]:" — scripts/validation/check_rule_activation_coverage.py:295

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_rule_activation_coverage.py | 295 | defined here | Private helper function loading and validating unique identifier sets from baseline dictionary keys. |

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
A private helper function identifier loading and validating identifier lists from the baseline configuration rather than an agent lifecycle concept.
