---
package: rjm
name: CANONICAL_ROOT_NAME
slug: canonical-root-name
kind: name-only
package_phase: cross-phase
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

# CANONICAL_ROOT_NAME

## Definition — verbatim
(used, not defined)

> "CANONICAL_ROOT_NAME = \".claude\"" — scripts/validation/check_shipped_skill_routes.py:189

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_shipped_skill_routes.py | 189 | defined here | Constant identifying .claude as the canonical plugin root directory name. |

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
A constant identifier naming the canonical plugin root directory .claude rather than an agent lifecycle concept.
