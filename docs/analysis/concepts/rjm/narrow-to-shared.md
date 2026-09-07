---
package: rjm
name: _narrow_to_shared
slug: narrow-to-shared
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/workflow_event_subscriptions.py, sha256: c96ed1a14ed968911cba419c7e5b7281afb018736e06e0b521a2cea23ee923f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _narrow_to_shared

## Definition — verbatim
(used, not defined)

> "def _narrow_to_shared(" — scripts/github_core/workflow_event_subscriptions.py:381

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/workflow_event_subscriptions.py | 381 | defined here | Function computing conservative intersection of subscriptions for workflows sharing the same name. |

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
Private helper function identifier (`_narrow_to_shared`) in `workflow_event_subscriptions.py` implementing fail-closed intersection logic rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
