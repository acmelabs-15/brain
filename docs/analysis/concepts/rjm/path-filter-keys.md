---
package: rjm
name: _PATH_FILTER_KEYS
slug: path-filter-keys
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

# _PATH_FILTER_KEYS

## Definition — verbatim
(used, not defined)

> "_PATH_FILTER_KEYS = (\"paths\", \"paths-ignore\")" — scripts/github_core/workflow_event_subscriptions.py:120

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/workflow_event_subscriptions.py | 120 | defined here | Constant tuple defining the pull_request-family trigger keys that filter workflow execution by path. |

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
Module-level constant tuple identifier (`_PATH_FILTER_KEYS`) in `workflow_event_subscriptions.py` defining path filter trigger keys rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
