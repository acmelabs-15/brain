---
package: rjm
name: declared_required_contexts
slug: declared-required-contexts
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/recovery_manifest.py, sha256: 4ec40a442220c75958c784756c9bb22f6e2c7902b1f47382feee82ef7ed953a9}
  - {path: scripts/github_core/workflow_event_subscriptions.py, sha256: c96ed1a14ed968911cba419c7e5b7281afb018736e06e0b521a2cea23ee923f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# declared_required_contexts

## Definition — verbatim
(used, not defined)

> "def declared_required_contexts(" — scripts/github_core/workflow_event_subscriptions.py:285

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/recovery_manifest.py | 33 | used here | Used in run classification to statically discover required contexts from workflow job declarations. |
| scripts/github_core/workflow_event_subscriptions.py | 285 | defined here | Function matching workflow job names and expression prefixes against ruleset required contexts. |

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
A helper function in `workflow_event_subscriptions.py` statically matching workflow job identities against ruleset required contexts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
