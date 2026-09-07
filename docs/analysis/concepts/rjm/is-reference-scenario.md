---
package: rjm
name: _is_reference_scenario
slug: is-reference-scenario
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _is_reference_scenario

## Definition — verbatim
(used, not defined)

> "def _is_reference_scenario(repo_root: Path, data: Mapping[str, Any], path: Path) -> bool:" — scripts/validation/check_rule_activation_coverage.py:202

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_rule_activation_coverage.py | 202 | defined here | Private helper function checking whether a scenario targets a skill reference under ADR-088. |

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
A private helper function identifier checking whether a scenario targets a skill reference under ADR-088 rather than an agent lifecycle concept.
