---
package: rjm
name: GIT_CONTEXT_VARIABLES
slug: git-context-variables
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_runtime_parity.py, sha256: a5f463e3d9e5a1b7792aee049f05a40b8f2c14ca3188fbc0f6dab8534d5b1308}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GIT_CONTEXT_VARIABLES

## Definition — verbatim
(used, not defined)

> "GIT_CONTEXT_VARIABLES = (" — scripts/eval/_runtime_parity.py:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_runtime_parity.py | 18 | defined here | Tuple of git environment variable names stripped to avoid git context leakage in nested git repositories. |

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
A configuration tuple naming git environment variables that must be scrubbed during workspace preparation, classified as name-only per D-023.
