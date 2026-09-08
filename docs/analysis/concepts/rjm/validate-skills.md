---
package: rjm
name: validate_skills
slug: validate-skills
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/check_skill_skip_clauses.py, sha256: 7185094210f05a814ef0fbbb05fcb47d005ac6a080e09cbadaab26e065095ea4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# validate_skills

## Definition — verbatim
(used, not defined)

> "def validate_skills(skills: list[Skill]) -> list[Violation]:" — scripts/validation/check_skill_skip_clauses.py:158

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_skip_clauses.py | 158 | defined here | Core validation function returning all SKIP-clause violations across skill families. |

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
defects: script-bug

## Design notes
A validator function identifier in `check_skill_skip_clauses.py`, classified as name-only per D-023.
