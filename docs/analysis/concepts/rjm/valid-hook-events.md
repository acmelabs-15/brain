---
package: rjm
name: VALID_HOOK_EVENTS
slug: valid-hook-events
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/_constants.py, sha256: 7d95cd0e323d528ee16098e199af1dbf91434ae1e8cd7e2e312e1acecca669b6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# VALID_HOOK_EVENTS

## Definition — verbatim
(used, not defined)

> "VALID_HOOK_EVENTS = {'PreToolUse', 'PostToolUse', 'Stop'}" — .claude/skills/skillforge/scripts/_constants.py:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/_constants.py | 51 | defined here | Constant set enumerating valid hook event triggers ('PreToolUse', 'PostToolUse', 'Stop'). |

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
VALID_HOOK_EVENTS is a Python constant set of supported hook lifecycle event strings in _constants.py rather than an operational lifecycle concept, classified as name-only per D-023.
