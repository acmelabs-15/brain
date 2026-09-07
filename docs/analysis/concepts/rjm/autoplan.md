---
package: rjm
name: autoplan
slug: autoplan
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-e2e-delivery.py, sha256: def5027d65244270d65f2bd9e0329765678c2808d15206622d8ee4c791c3b064}
  - {path: scripts/validation/check_shipped_skill_routes.py, sha256: bafff39d3de4725ac44e0ec799ac0b66e8dd4c701136ab47edf20adcf007b9c2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# autoplan

## Definition — verbatim
(used, not defined)

> "\"autoplan\": \".claude/skills/autoplan/SKILL.md\"," — scripts/eval/eval-e2e-delivery.py:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-e2e-delivery.py | 69 | used here | Registered in agent registry as an automated planning skill prompt evaluated against end-to-end delivery rubrics. |
| scripts/validation/check_shipped_skill_routes.py | 26 | used here | Cited in docstring narrative describing a shipping drift incident where autoplan routed to an excluded skill. |

## Consumes
Task requirements, issue descriptions, or high-level development requests.

## Produces
Structured delivery plans decomposing tasks into sequential phases with process gates and acceptance criteria.

## When applied
During the planning lifecycle phase when automatically generating development plans from task descriptions.

## Sub-concepts
none

## Part of
rjm:plan

## Implementation status
clean

## Design notes
An automated planning skill and prompt in rjm (`.claude/skills/autoplan/SKILL.md`) that takes informal or ambiguous engineering requests and generates multi-step delivery plans with explicit verification gates and task decomposition.
