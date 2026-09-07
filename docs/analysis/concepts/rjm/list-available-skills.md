---
package: rjm
name: list_available_skills
slug: list-available-skills
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/check_skill_exists.py, sha256: 217d9c08ab8ab052abcfabed7a1f5db5c57d148ed2eb25407955b6d065892f16}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# list_available_skills

## Definition — verbatim
(used, not defined)

> "List all available skills organized by operation type." — scripts/check_skill_exists.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/check_skill_exists.py | 46 | defined here | Discovers and prints all available GitHub skill scripts grouped by operation. |

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
`list_available_skills` is a script discovery and console display function in `scripts/check_skill_exists.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
