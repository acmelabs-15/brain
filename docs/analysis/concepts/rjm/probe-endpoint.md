---
package: rjm
name: _PROBE_ENDPOINT
slug: probe-endpoint
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/rate_limit.py, sha256: 5d4b36bbf056d64c5d45e9f783b33042a8cc0d6475888bb4b9c0f8218a39ef00}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _PROBE_ENDPOINT

## Definition — verbatim
(used, not defined)

> "_PROBE_ENDPOINT = \"meta\"" — scripts/github_core/rate_limit.py:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/rate_limit.py | 92 | defined here | Constant specifying the GitHub REST API endpoint probed for non-exempt live rate-limit verification. |

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
An internal constant in `rate_limit.py` specifying the GitHub REST API endpoint probed for live rate-limit verification rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
