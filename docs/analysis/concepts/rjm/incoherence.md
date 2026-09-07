---
package: rjm
name: incoherence
slug: incoherence
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/SKILL.md, sha256: a01623b7716f524ef453a28f9eec5d414f53273557b76304d0c250563e82435d}
  - {path: .claude/skills/orphan-ref-validator/scripts/filters.py, sha256: 16a166b88e86a6d4dba483c3f6a96c99e318b30cae02007c26305592f777b153}
  - {path: .claude/skills/orphan-ref-validator/scripts/patterns.py, sha256: dfb52ef98707034cd271dbc3877e9fa6d17bfb16a9ac96e2cf121b47c3582410}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# incoherence

## Definition — verbatim
(used, not defined)

> "incoherence",  # DEPRECATED 2026-05-29, absorbed by doc-accuracy; retired #2662" — .claude/skills/orphan-ref-validator/scripts/filters.py:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/SKILL.md | 51 | applies | Replaced legacy skill noted for 15.8% recall on critical issues. |
| .claude/skills/orphan-ref-validator/scripts/filters.py | 83 | references | Listed in KNOWN_SINGLE_WORD_SKILLS as a retired skill absorbed by doc-accuracy. |
| .claude/skills/orphan-ref-validator/scripts/patterns.py | 15 | references | Cited in code comments as an example of a retired single-word skill. |

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
incoherence is the name of a retired, single-word legacy skill that was deprecated and absorbed by doc-accuracy rather than an active operational lifecycle concept.
