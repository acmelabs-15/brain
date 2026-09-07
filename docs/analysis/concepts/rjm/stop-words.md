---
package: rjm
name: STOP_WORDS
slug: stop-words
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/stuck-detection/stuck_detection.py, sha256: 99d4b403cad8ddf03b744832780919354d9fa22f95d9668378a7396cbfa3bc18}
  - {path: scripts/external_signals/acceptance_criteria.py, sha256: f11417815ba57aa29786c3c9c962fd0a811cb2ac651b9b466992e482bb8883e8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# STOP_WORDS

## Definition — verbatim
(used, not defined)

> "STOP_WORDS: frozenset[str] = frozenset([" — .claude/skills/stuck-detection/stuck_detection.py:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/stuck-detection/stuck_detection.py | 37 | defined here | Constant frozenset containing common English stop words excluded from topic signatures. |
| scripts/external_signals/acceptance_criteria.py | 104 | defined here | Constant frozenset containing 3-letter noise words filtered out during diff keyword matching. |

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
`STOP_WORDS` is a Python data structure constant in text processing scripts filtering out common English words during keyword and signature extraction rather than an autonomous lifecycle concept, classified as `kind: name-only` per D-023.
