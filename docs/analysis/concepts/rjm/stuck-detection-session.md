---
package: rjm
name: STUCK_DETECTION_SESSION
slug: stuck-detection-session
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

# STUCK_DETECTION_SESSION

## Definition — verbatim
(used, not defined)

> "3. `STUCK_DETECTION_SESSION` environment variable (per-session file under the" — .claude/skills/stuck-detection/SKILL.md:121

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/stuck-detection/SKILL.md | 121 | defined here | Documented as an environment variable scoping history to a session-specific file to prevent cross-talk. |
| .claude/skills/stuck-detection/stuck_detection.py | 62 | used here | Docstring and path resolution logic reading session name to isolate history files under XDG state dir. |

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
`STUCK_DETECTION_SESSION` is an environment variable identifier scoping stuck-detection history files to specific sessions rather than an autonomous lifecycle concept, classified as `kind: name-only` per D-023.
