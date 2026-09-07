---
package: rjm
name: KNOWN_SINGLE_WORD_SKILLS
slug: known-single-word-skills
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/SKILL.md, sha256: 69f9c7a8e800ef594a858838198baecfc0ec92a1f3f7af1b5d4fd3bef244c5a3}
  - {path: .claude/skills/orphan-ref-validator/scripts/filters.py, sha256: 16a166b88e86a6d4dba483c3f6a96c99e318b30cae02007c26305592f777b153}
  - {path: .claude/skills/orphan-ref-validator/scripts/patterns.py, sha256: dfb52ef98707034cd271dbc3877e9fa6d17bfb16a9ac96e2cf121b47c3582410}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# KNOWN_SINGLE_WORD_SKILLS

## Definition — verbatim
(used, not defined)

> "KNOWN_SINGLE_WORD_SKILLS: frozenset[str] = frozenset({" — .claude/skills/orphan-ref-validator/scripts/filters.py:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/orphan-ref-validator/scripts/filters.py | 80 | defined here | Primary definition of `KNOWN_SINGLE_WORD_SKILLS` within filters.py. |
| .claude/skills/orphan-ref-validator/scripts/patterns.py | 21 | used here | Referenced and applied in patterns.py during verification and operational workflows. |
| .claude/skills/orphan-ref-validator/SKILL.md | 200 | used here | Referenced and applied in SKILL.md during verification and operational workflows. |

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
A code identifier, type, or architectural heading (`KNOWN_SINGLE_WORD_SKILLS`) recorded during inventory analysis, classified as `name-only` per D-023.
