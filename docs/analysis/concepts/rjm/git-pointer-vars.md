---
package: rjm
name: _GIT_POINTER_VARS
slug: git-pointer-vars
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/portability_baseline.py, sha256: 713e756f9d9bf1db3006bc3cf53182484d338b62c39b18292fd60f1fcba5cca6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _GIT_POINTER_VARS

## Definition — verbatim
(used, not defined)

> "_GIT_POINTER_VARS = (" — scripts/validation/portability_baseline.py:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/portability_baseline.py | 65 | defined here | Constant tuple of environment variables stripped by run_git to prevent hiding repositories. |

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
A module-level constant identifier in `portability_baseline.py`, classified as name-only per D-023.
