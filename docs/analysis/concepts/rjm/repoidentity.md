---
package: rjm
name: RepoIdentity
slug: repoidentity
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/hook_utilities/guards.py, sha256: 9e1ceb95f567fff54f584d47b1e0cf9691eaa40ae85f38b0a1284bd07e6cdfb2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RepoIdentity

## Definition — verbatim
(used, not defined)

> "RepoIdentity" — scripts/hook_utilities/guards.py:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/hook_utilities/guards.py | 32 | defined here | Type alias defining the three possible resolution states for repository identity. |

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
A Python type alias enumerating the possible identity states of the current repository checkout, classified as name-only per D-023.
