---
package: rjm
name: DEFAULT_MAX_HISTORY
slug: default-max-history
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

# DEFAULT_MAX_HISTORY

## Definition — verbatim
(used, not defined)

> "DEFAULT_MAX_HISTORY = 10" — .claude/skills/stuck-detection/stuck_detection.py:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/stuck-detection/SKILL.md | 109 | defined here | Configuration table documenting the default number of turn entries (10) retained on disk. |
| .claude/skills/stuck-detection/stuck_detection.py | 29 | defined here | Constant defining the default maximum history buffer size of recent turns for loop detection. |

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
`DEFAULT_MAX_HISTORY` is a configuration constant in `stuck_detection.py` setting the maximum number of historical signatures stored on disk rather than an autonomous lifecycle concept, classified as `kind: name-only` per D-023.
