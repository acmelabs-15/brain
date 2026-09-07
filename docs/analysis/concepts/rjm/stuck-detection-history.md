---
package: rjm
name: STUCK_DETECTION_HISTORY
slug: stuck-detection-history
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

# STUCK_DETECTION_HISTORY

## Definition — verbatim
(used, not defined)

> "2. `STUCK_DETECTION_HISTORY` environment variable (full path)" — .claude/skills/stuck-detection/SKILL.md:120

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/stuck-detection/SKILL.md | 120 | defined here | Documented as an environment variable providing an absolute override path for the history file. |
| .claude/skills/stuck-detection/stuck_detection.py | 61 | used here | Docstring and resolution logic checking os.environ for explicit history file path override. |

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
`STUCK_DETECTION_HISTORY` is an environment variable identifier allowing users to explicitly override the stuck detection history file location rather than an autonomous lifecycle concept, classified as `kind: name-only` per D-023.
