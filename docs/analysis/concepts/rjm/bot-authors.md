---
package: rjm
name: _BOT_AUTHORS
slug: bot-authors
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/detect_human_changes_requested.py, sha256: 54c20c8899411a5c94c089ced5574b0ca47d2597c231025d1edcc08f894bdab1}
  - {path: scripts/ci/retrospective_gate.py, sha256: 81a59bf6bd1a29a33873685f2678ff5147cf806feea4bfbbe919a68cb6e4ccc5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _BOT_AUTHORS

## Definition — verbatim
(used, not defined)

> "_BOT_AUTHORS = frozenset(" — scripts/ci/detect_human_changes_requested.py:22

## Also called — verbatim
"BOT_AUTHORS = frozenset(" — scripts/ci/retrospective_gate.py:22

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/detect_human_changes_requested.py | 22 | defined here | Constant set of bot author usernames excluded when detecting human review requests. |
| scripts/ci/retrospective_gate.py | 22 | defined here | Constant set of bot author usernames filtered out in retrospective gate analysis. |

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
defects: orphan

## Design notes
`_BOT_AUTHORS` is an internal Python constant identifier containing a set of known automated bot usernames to filter out during review analysis rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
