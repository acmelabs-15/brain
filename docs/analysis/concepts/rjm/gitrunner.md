---
package: rjm
name: GitRunner
slug: gitrunner
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/_gc_remote.py, sha256: 26e40c416c74f117beb585cf042ed381311485f23c722ceb52c7c9edfef76d5b}
  - {path: scripts/maintenance/_gc_stale.py, sha256: e719dbce6d933f8fcaffbc203d3383e6d4d9c43021c26e056b09070e2052ffc5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GitRunner

## Definition — verbatim
(used, not defined)

> "GitRunner = Callable[[list[str]], str]" — scripts/maintenance/_gc_remote.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_remote.py | 7 | defined here | Type alias for a callable executing git commands with argument lists and returning standard output strings. |
| scripts/maintenance/_gc_stale.py | 21 | defined here | Type alias for a callable executing git commands with argument lists and returning standard output strings. |

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
`GitRunner` is a Python type alias for git execution callables in maintenance scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
