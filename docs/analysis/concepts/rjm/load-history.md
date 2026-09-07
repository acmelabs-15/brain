---
package: rjm
name: load_history
slug: load-history
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

# load_history

## Definition — verbatim
(used, not defined)

> "def load_history(path: Path) -> list[dict[str, str]]:" — .claude/skills/stuck-detection/stuck_detection.py:128

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/stuck-detection/stuck_detection.py | 128 | defined here | Function that reads persisted signature history JSON and validates schema structure. |

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
An internal Python helper function that deserializes and validates stuck-detection history from disk rather than a lifecycle concept.
