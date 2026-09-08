---
package: rjm
name: SKILL_SIZE_WARNING
slug: skill-size-warning
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/skill_size.py, sha256: e5fa48299f918de1daf66d0a8c710835ac4a0e929048092c6799d34a65655d3e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SKILL_SIZE_WARNING

## Definition — verbatim
(used, not defined)

> "SKILL_SIZE_WARNING: int = 300" — scripts/validation/skill_size.py:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/skill_size.py | 62 | defined here | Sets the advisory warning line threshold (300 lines) for SKILL.md prompt files. |

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
A Python configuration constant in `scripts/validation/skill_size.py`, classified as name-only per D-023.
