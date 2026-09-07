---
package: rjm
name: KEEP_DETACHED
slug: keep-detached
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/worktree_report.py, sha256: 251fe398370211c41c979ce7bbd3043f34661bf3c5e70fe998fdf151cd27cf11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# KEEP_DETACHED

## Definition — verbatim
(used, not defined)

> "KEEP_DETACHED = \"detached HEAD (no branch to evaluate)\"" — scripts/maintenance/worktree_report.py:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/worktree_report.py | 20 | defined here | Retention reason constant identifying worktrees with a detached HEAD. |

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
A retention reason constant identifier in `worktree_report.py` protecting detached HEAD checkouts rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
