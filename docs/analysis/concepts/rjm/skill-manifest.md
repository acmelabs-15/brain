---
package: rjm
name: SKILL_MANIFEST
slug: skill-manifest
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/validate_skill_shells.py, sha256: 4cba79bf9cb3ec27fd8125379a925e1fa07b4225658f7c7efc102b3dbc88b0d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SKILL_MANIFEST

## Definition — verbatim
(used, not defined)

> "SKILL_MANIFEST = \"SKILL.md\"" — scripts/validation/validate_skill_shells.py:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/validate_skill_shells.py | 54 | defined here | Constant string naming the required skill manifest file SKILL.md. |

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
A Python constant string identifier in `validate_skill_shells.py`, classified as name-only per D-023.
