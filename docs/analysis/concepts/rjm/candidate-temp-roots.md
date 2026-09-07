---
package: rjm
name: _candidate_temp_roots
slug: candidate-temp-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/validation.py, sha256: a07f30b4bc09a656e2c5f3d7109928f245a20055d0f60dd3f6165535b412afae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _candidate_temp_roots

## Definition — verbatim
(used, not defined)

> "def _candidate_temp_roots() -> list[str]:" — scripts/github_core/validation.py:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/validation.py | 95 | defined here | Discovers plausible system temporary directory roots used across operating systems and shells. |

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
An internal utility function (`_candidate_temp_roots`) for resolving temporary directory roots rather than an SDLC lifecycle concept, classified as `name-only` per D-023.
