---
package: rjm
name: _stat_mode
slug: stat-mode
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_shipped_skill_routes.py, sha256: bafff39d3de4725ac44e0ec799ac0b66e8dd4c701136ab47edf20adcf007b9c2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _stat_mode

## Definition — verbatim
(used, not defined)

> "def _stat_mode(path: Path) -> int | None:" — scripts/validation/check_shipped_skill_routes.py:330

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_shipped_skill_routes.py | 330 | defined here | Returns path st_mode or None for absent paths, implementing fail-closed stat policy for route validation. |

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
A private filesystem stat helper function in `scripts/validation/check_shipped_skill_routes.py` implementing fail-closed stat inspection, classified as `name-only` per D-023.
