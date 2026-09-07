---
package: rjm
name: DEFAULT_SIMILARITY_THRESHOLD
slug: default-similarity-threshold
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/stuck-detection/SKILL.md, sha256: 2f9d0a80008c774d8d159505dfd7cc6cd42ffe2eafa704358716f9d12e71b1f9}
  - {path: .claude/skills/stuck-detection/stuck_detection.py, sha256: 99d4b403cad8ddf03b744832780919354d9fa22f95d9668378a7396cbfa3bc18}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DEFAULT_SIMILARITY_THRESHOLD

## Definition — verbatim
(used, not defined)

> "DEFAULT_SIMILARITY_THRESHOLD = 0.6" — .claude/skills/stuck-detection/stuck_detection.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/stuck-detection/SKILL.md | 111 | defined here | Configuration table documenting the Jaccard similarity cutoff (0.6) for classifying turns as similar. |
| .claude/skills/stuck-detection/stuck_detection.py | 31 | defined here | Constant setting the minimum Jaccard similarity coefficient required between topic signatures. |

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
`DEFAULT_SIMILARITY_THRESHOLD` is a numerical constant in `stuck_detection.py` defining the Jaccard similarity cutoff for topic comparisons rather than an autonomous lifecycle concept, classified as `kind: name-only` per D-023.
