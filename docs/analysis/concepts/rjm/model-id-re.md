---
package: rjm
name: MODEL_ID_RE
slug: model-id-re
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/scripts/filters.py, sha256: 16a166b88e86a6d4dba483c3f6a96c99e318b30cae02007c26305592f777b153}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# MODEL_ID_RE

## Definition — verbatim
(used, not defined)

> "MODEL_ID_RE = re.compile(r\"^claude-(opus|sonnet|haiku)-\d\")" — .claude/skills/orphan-ref-validator/scripts/filters.py:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/orphan-ref-validator/scripts/filters.py | 13 | defined here | Primary definition of `MODEL_ID_RE` within filters.py. |

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
A code identifier, type, or architectural heading (`MODEL_ID_RE`) recorded during inventory analysis, classified as `name-only` per D-023.
