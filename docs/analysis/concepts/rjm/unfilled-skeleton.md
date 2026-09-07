---
package: rjm
name: UNFILLED SKELETON
slug: unfilled-skeleton
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/retro.md, sha256: fbb66599fec7bacf613b20b35c9178a06bce46793cdca2f019063e2ecba02014}
  - {path: .claude/skills/retrospective/scripts/run_retrospective.py, sha256: 7bef09acd131cbf5a9bbe725c86d14b2024da5828e639f81d0d02cbdcf4e1d9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# UNFILLED SKELETON

## Definition — verbatim
(used, not defined)

> "- [ ] After filling, the file no longer contains the `UNFILLED SKELETON` banner." — .claude/commands/retro.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/retro.md | 72 | used here | Included in the verification checklist requiring removal of the placeholder banner upon filling. |
| .claude/skills/retrospective/scripts/run_retrospective.py | 425 | used here | Verified in validation logic ensuring target files contain the skeleton banner before running fill routines. |

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
UNFILLED SKELETON is a visual text banner placed in newly initialized retrospective placeholder files to warn readers and automated validators of incomplete status rather than an active lifecycle concept per D-023.
