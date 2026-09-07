---
package: rjm
name: git diff
slug: git-diff
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-suite.py, sha256: 65acc521915f252268c5eefda9c61ced62776d29003d88a7ffd851ec44343290}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# git diff

## Definition — verbatim
(used, not defined)

> "Detects what changed via git diff, classifies changes, and routes to the" — scripts/eval/eval-suite.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-suite.py | 4 | used here | Named as the command-line mechanism used to detect changed repository files against a base ref. |

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
defects: missing-path

## Design notes
An external Git version control command invoked by the evaluation orchestrator for detecting changed files rather than an internal lifecycle concept.
