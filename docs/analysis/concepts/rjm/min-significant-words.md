---
package: rjm
name: MIN_SIGNIFICANT_WORDS
slug: min-significant-words
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/stuck-detection/stuck_detection.py, sha256: 99d4b403cad8ddf03b744832780919354d9fa22f95d9668378a7396cbfa3bc18}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MIN_SIGNIFICANT_WORDS

## Definition — verbatim
(used, not defined)

> "MIN_SIGNIFICANT_WORDS = 2" — .claude/skills/stuck-detection/stuck_detection.py:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/stuck-detection/stuck_detection.py | 32 | defined here | Constant defining the minimum number of significant words required to generate a valid signature. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
stuck-detection

## Implementation status
clean

## Design notes
`MIN_SIGNIFICANT_WORDS` is a Python configuration constant in `stuck_detection.py` setting the minimum word count required for signature generation rather than an autonomous lifecycle concept, classified as `kind: name-only` per D-023.
