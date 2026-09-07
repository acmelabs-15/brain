---
package: rjm
name: pin_to_head_ref
slug: pin-to-head-ref
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/workflow_event_subscriptions.py, sha256: c96ed1a14ed968911cba419c7e5b7281afb018736e06e0b521a2cea23ee923f0}
  - {path: scripts/github_core/workflow_provenance.py, sha256: 54e330d98b0775ed2ddc545d4b03aaaee833cbdee1ffa05ba2e0efbea4b2d9d4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pin_to_head_ref

## Definition — verbatim
(used, not defined)

> "def pin_to_head_ref(" — scripts/github_core/workflow_event_subscriptions.py:333

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/workflow_event_subscriptions.py | 333 | defined here | Function combining a pull request merge-ref workflow definition with base branch subscriptions. |
| scripts/github_core/workflow_provenance.py | 20 | used here | Referenced in module docstring explaining combination of head-ref and base-ref subscriptions. |

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
Function identifier (`pin_to_head_ref`) in `workflow_event_subscriptions.py` combining workflow subscriptions across git refs rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
