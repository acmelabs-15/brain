---
package: rjm
name: prunable
slug: prunable
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/_gc_parse.py, sha256: 8b5b2db80218fb22c500b43624d6423f421e0ca1cf3b6e6e7a9091f19296bdad}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# prunable

## Definition — verbatim
(used, not defined)

> "``prunable`` is the line that matters most." — scripts/maintenance/_gc_parse.py:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_parse.py | 9 | used here | Documented in module docstring as the git porcelain attribute indicating a missing working tree with human-readable reason. |

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
`prunable` is a Git porcelain attribute line identifier emitted by `git worktree list --porcelain` rather than an independent lifecycle concept, classified as `kind: name-only` per D-023.
