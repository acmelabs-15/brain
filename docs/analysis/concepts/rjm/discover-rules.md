---
package: rjm
name: discover_rules
slug: discover-rules
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# discover_rules

## Definition — verbatim
(used, not defined)

> "def discover_rules(repo_root: Path) -> set[str]:" — scripts/validation/check_rule_activation_coverage.py:103

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_rule_activation_coverage.py | 103 | defined here | Function discovering rule files under .claude/rules/ and returning rule identifier stems. |

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
A Python discovery function identifier returning rule identifiers from .claude/rules/ rather than an agent lifecycle concept.
