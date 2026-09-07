---
package: rjm
name: SKILL_REF_RE
slug: skill-ref-re
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/scripts/counts.py, sha256: 086ca656c2ab398e7f5ca5d88143b1ad092a965e3bc2757d6816c055f0da8213}
  - {path: .claude/skills/orphan-ref-validator/scripts/filters.py, sha256: 16a166b88e86a6d4dba483c3f6a96c99e318b30cae02007c26305592f777b153}
  - {path: .claude/skills/orphan-ref-validator/scripts/patterns.py, sha256: dfb52ef98707034cd271dbc3877e9fa6d17bfb16a9ac96e2cf121b47c3582410}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SKILL_REF_RE

## Definition — verbatim
(used, not defined)

> "SKILL_REF_RE = re.compile(r\"`([a-z][a-z0-9]*(?:-[a-z0-9]+)+)`\")" — .claude/skills/orphan-ref-validator/scripts/patterns.py:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/orphan-ref-validator/scripts/counts.py | 10 | used here | Referenced and applied in counts.py during verification and operational workflows. |
| .claude/skills/orphan-ref-validator/scripts/filters.py | 65 | used here | Referenced and applied in filters.py during verification and operational workflows. |
| .claude/skills/orphan-ref-validator/scripts/patterns.py | 13 | defined here | Primary definition of `SKILL_REF_RE` within patterns.py. |

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
A code identifier, type, or architectural heading (`SKILL_REF_RE`) recorded during inventory analysis, classified as `name-only` per D-023.
