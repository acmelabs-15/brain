---
package: rjm
name: Issue #4835
slug: issue-4835
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/recovery_manifest.py, sha256: 4ec40a442220c75958c784756c9bb22f6e2c7902b1f47382feee82ef7ed953a9}
  - {path: scripts/github_core/runs_file.py, sha256: fc54605d096ae1191ec2ae922105c431c4f73b8993785931ff245fd72818e4f2}
  - {path: scripts/github_core/workflow_event_subscriptions.py, sha256: c96ed1a14ed968911cba419c7e5b7281afb018736e06e0b521a2cea23ee923f0}
  - {path: scripts/github_core/workflow_provenance.py, sha256: 54e330d98b0775ed2ddc545d4b03aaaee833cbdee1ffa05ba2e0efbea4b2d9d4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Issue #4835

## Definition — verbatim
(used, not defined)

> "Issue #4835" — scripts/github_core/recovery_manifest.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/recovery_manifest.py | 3 | used here | Cited in module docstring describing incident where panic rollback cancelled 818 runs without recovery verification. |
| scripts/github_core/runs_file.py | 3 | used here | Cited in module docstring explaining file split from bulk_cancel_guard.py to enforce fail-closed parsing. |
| scripts/github_core/workflow_event_subscriptions.py | 3 | used here | Cited in module docstring establishing requirement to statically verify workflow recovery event subscriptions. |
| scripts/github_core/workflow_provenance.py | 3 | used here | Cited in module docstring justifying per-run workflow fetching at pull request merge refs. |

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
A GitHub issue tracking identifier (`Issue #4835`) referencing an incident where a panic rollback cancelled 818 runs without recovery verification rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
