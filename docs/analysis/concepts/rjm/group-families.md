---
package: rjm
name: group_families
slug: group-families
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

# group_families

## Definition — verbatim
(used, not defined)

> "def group_families(skills: list[Skill]) -> dict[str, list[Skill]]:" — scripts/validation/check_skill_skip_clauses.py:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_skip_clauses.py | 96 | defined here | Function grouping skills by leading-token family and filtering to multi-member families. |

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
A family grouping function identifier in `check_skill_skip_clauses.py`, classified as name-only per D-023.
